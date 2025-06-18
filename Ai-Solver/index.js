/*
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements. See the NOTICE file
distributed with this work for additional information regarding
copyright ownership. The ASF licenses this file to you under
the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may
obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
// --- DOM Elements ---
const chatContainer = document.getElementById('chatContainer');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const historyToggle = document.getElementById('historyToggle');
const historyPanel = document.getElementById('historyPanel');
const closeHistory = document.getElementById('closeHistory');
const newChatBtn = document.getElementById('newChatBtn');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const overlay = document.getElementById('overlay');
const attachImageBtn = document.getElementById('attachImageBtn');
const imageInput = document.getElementById('imageInput');
const inputContainer = document.getElementById('inputContainer');

// --- State Management ---
const API_KEY = 'AIzaSyCaz5LSc_zSWLY-lL9sG57_ALWghzFQwSc';
let currentChatId = null;
let chats = {};
let attachedImage = null;

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', initializeChat);
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', handleInputKeydown);
messageInput.addEventListener('input', handleInputChange);
historyToggle.addEventListener('click', toggleHistoryPanel);
closeHistory.addEventListener('click', toggleHistoryPanel);
overlay.addEventListener('click', toggleHistoryPanel);
newChatBtn.addEventListener('click', startNewChat);
clearHistoryBtn.addEventListener('click', clearAllHistory);
attachImageBtn.addEventListener('click', () => imageInput.click());
imageInput.addEventListener('change', handleImageAttachment);

// Manage virtual keyboard
messageInput.addEventListener('focus', () => {
  inputContainer.classList.add('keyboard-open');
  setTimeout(scrollToBottom, 300);
});

messageInput.addEventListener('blur', () => {
  inputContainer.classList.remove('keyboard-open');
});

// --- Initialization ---
function initializeChat() {
  loadChatsFromStorage();
  if (Object.keys(chats).length === 0) {
    startNewChat();
  } else {
    const latestChatId = Object.keys(chats).sort((a, b) => chats[b].timestamp - chats[a].timestamp)[0];
    loadChat(latestChatId);
  }
  renderHistoryList();

  // Set the initial height for the content
  adjustChatHeight();

  // Reset height when window is resized
  window.addEventListener('resize', adjustChatHeight);
}

function adjustChatHeight() {
  const headerHeight = document.querySelector('.header').offsetHeight;
  chatContainer.style.height = `calc(100% - ${headerHeight}px - ${inputContainer.offsetHeight}px)`;
}

// --- Core Chat Functions ---
async function sendMessage() {
  const messageText = messageInput.value.trim();
  if (!messageText && !attachedImage) return;

  sendBtn.disabled = true;
  const userMessage = { role: 'user', parts: [] };

  if (messageText) {
    userMessage.parts.push({ text: messageText });
  }
  if (attachedImage) {
    userMessage.parts.push({
      inlineData: {
        mimeType: attachedImage.type,
        data: attachedImage.base64
      }
    });
    addMessageToUI('user', messageText, attachedImage.url);
  } else {
    addMessageToUI('user', messageText);
  }

  chats[currentChatId].messages.push(userMessage);

  clearInput();
  showTypingIndicator();
  scrollToBottom();

  try {
    const apiMessages = chats[currentChatId].messages.map(msg => ({
      role: msg.role,
      parts: msg.parts
    }));

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: apiMessages }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error.message || 'خطا در ارتباط با API');
    }

    const data = await response.json();
    const aiResponse = data.candidates[0].content.parts[0].text;

    const aiMessage = { role: 'model', parts: [{ text: aiResponse }] };
    chats[currentChatId].messages.push(aiMessage);

    hideTypingIndicator();
    addMessageToUI('ai', aiResponse);

  } catch (error) {
    console.error('Gemini API Error:', error);
    hideTypingIndicator();
    addMessageToUI('ai', `Unfortunately, an error occurred: ${error.message}`, null, true);
  } finally {
    saveChatsToStorage();
    renderHistoryList();
    sendBtn.disabled = false;
    handleInputChange(); // re-check button state
  }
}

function startNewChat() {
  const newId = `chat_${Date.now()}`;
  currentChatId = newId;
  chats[newId] = {
    id: newId,
    title: 'New chat',
    timestamp: Date.now(),
    messages: [{
      role: 'model',
      parts: [{ text: 'Hi! Im Gemini, Googles Ai. How can I help you?' }]
    }]
  };
  loadChat(newId);
  saveChatsToStorage();
  renderHistoryList();
  if (historyPanel.classList.contains('open')) {
    toggleHistoryPanel();
  }
}

function loadChat(chatId) {
  if (!chats[chatId]) return;
  currentChatId = chatId;
  chatContainer.innerHTML = '';
  chats[chatId].messages.forEach(msg => {
    const textPart = msg.parts.find(p => p.text)?.text || '';
    addMessageToUI(msg.role === 'user' ? 'user' : 'ai', textPart);
  });
  renderHistoryList();
  scrollToBottom();
}

// --- UI Update Functions ---
function addMessageToUI(sender, content, imageUrl = null, isError = false) {
  // Update chat title for new chats
  if (chats[currentChatId].messages.length <= 1 && sender === 'user') {
    chats[currentChatId].title = content.substring(0, 30) + (content.length > 30 ? '...' : '');
    renderHistoryList();
  }

  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;

  const header = sender === 'user'
    ? `<div class="message-header"> <i class="fas fa-user"></i>‌ ‌You‌ ‌</div>`
    : `<div class="message-header"><i class="fas fa-robot"></i>‌ ‌Gemini Ai‌ ‌</div>`;

  const imageContent = imageUrl ? `<img src="${imageUrl}" alt="Attached image">` : '';

  const formattedContent = marked.parse(content || '');

  const actions = sender === 'ai'
    ? `<div class="message-actions">
                       <button class="message-action-btn" onclick="copyMessage(this)">
                           <i class="far fa-copy"></i>
                       </button>
                   </div>`
    : '';

  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  if (isError) bubble.style.borderColor = 'var(--error)';
  bubble.innerHTML = `
                ${header}
                <div class="message-content">${imageContent}${formattedContent}</div>
                ${actions}
            `;

  messageDiv.appendChild(bubble);
  chatContainer.appendChild(messageDiv);
  scrollToBottom();
}

function renderHistoryList() {
  historyList.innerHTML = '';
  const sortedChats = Object.values(chats).sort((a, b) => b.timestamp - a.timestamp);

  sortedChats.forEach(chat => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.dataset.id = chat.id;
    if (chat.id === currentChatId) {
      item.classList.add('active');
    }

    const date = new Date(chat.timestamp).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    item.innerHTML = `
                    <div class="history-item-content">
                        <div class="history-item-title">${chat.title}</div>
                        <div class="history-item-date">${date}</div>
                    </div>
                    <button class="delete-chat-btn" title="Delete chat">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                `;

    item.querySelector('.history-item-content').addEventListener('click', () => loadChat(chat.id));
    item.querySelector('.delete-chat-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteChat(chat.id);
    });

    historyList.appendChild(item);
  });
}

function showTypingIndicator() {
  if (document.querySelector('.typing-indicator')) return;
  const typingDiv = document.createElement('div');
  typingDiv.className = 'typing-indicator';
  typingDiv.innerHTML = `
                <div class="typing-dots"><span></span><span></span><span></span></div>
                Gemini is typing
            `;
  chatContainer.appendChild(typingDiv);
  scrollToBottom();
}

function hideTypingIndicator() {
  const indicator = document.querySelector('.typing-indicator');
  if (indicator) indicator.remove();
}

// --- Event Handlers & Helpers ---
function handleInputKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function handleInputChange() {
  sendBtn.disabled = messageInput.value.trim().length === 0 && !attachedImage;
  messageInput.style.height = 'auto';
  messageInput.style.height = (messageInput.scrollHeight) + 'px';

  // Reset chat height when input is resized
  adjustChatHeight();
}

function handleImageAttachment(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    attachedImage = {
      url: reader.result,
      base64: reader.result.split(',')[1],
      type: file.type
    };
    // Display thumbnail in input area or similar feedback
    messageInput.placeholder = `Image attached. Write your message...`;
    handleInputChange();
  };
  reader.readAsDataURL(file);
}

function clearInput() {
  messageInput.value = '';
  messageInput.placeholder = 'Write your message here...';
  attachedImage = null;
  imageInput.value = null; // Reset file input
  handleInputChange();
}

function deleteChat(chatId) {
  if (confirm(`Are you sure you want to delete this chat?`)) {
    delete chats[chatId];
    saveChatsToStorage();
    renderHistoryList();
    if (currentChatId === chatId) {
      startNewChat();
    }
  }
}

function clearAllHistory() {
  if (confirm('Are you sure you want to delete all chat history? This action is irreversible.')) {
    chats = {};
    currentChatId = null;
    localStorage.removeItem('geminiChats');
    startNewChat();
  }
}

function toggleHistoryPanel() {
  const isOpen = historyPanel.classList.toggle('open');
  overlay.classList.toggle('show', isOpen);
}

function copyMessage(button) {
  const messageContent = button.closest('.message-bubble').querySelector('.message-content');
  navigator.clipboard.writeText(messageContent.innerText).then(() => {
    const originalHTML = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => { button.innerHTML = originalHTML; }, 2000);
  });
}

function scrollToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// --- Local Storage Persistence ---
function saveChatsToStorage() {
  localStorage.setItem('geminiChats', JSON.stringify(chats));
}

function loadChatsFromStorage() {
  const storedChats = localStorage.getItem('geminiChats');
  if (storedChats) {
    chats = JSON.parse(storedChats);
  }
}

function applyTheme(theme) {
  const isLightTheme = theme === "light";
  document.body.classList.toggle("light-theme", isLightTheme);

  const color = isLightTheme ? "#e2e2e2" : "#0f172a";
  document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
  document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", theme === "dark" ? "black-translucent" : "default");
  document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content", color);
  document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", color);
}

function loadTheme() {
  let savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);
}

document.addEventListener("DOMContentLoaded", loadTheme);
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    loadTheme();
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js')
    .then(() => console.log("Service Worker ثبت شد."))
    .catch(err => console.error("خطا در ثبت Service Worker:", err));
}

function launchFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

document.addEventListener('click', () => {
  launchFullscreen(document.documentElement);
});