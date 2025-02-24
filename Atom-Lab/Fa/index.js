function goBack() {
    window.location.href = "../../Fa/";
}

document.getElementById("search-box").addEventListener("blur", function () {
    this.value = "";
});

const elements = {
    1: {
        name: "هیدروژن",
        symbol: "H",
        mass: 1.008,
        requiredNeutrons: 0,
        requiredElectrons: 1,
        image: "../css/assets/elements/H.png",
        type: "نافلز",
        state: "گاز",
        isotopes: [
            { neutrons: 0, mass: 1, name: "هیدروژن-1" },
            { neutrons: 1, mass: 2, name: "دوتریوم" },
            { neutrons: 2, mass: 3, name: "تریتیم" },
            { neutrons: 3, mass: 4, name: "هیدروژن-4" },
            { neutrons: 4, mass: 5, name: "هیدروژن-5" },
            { neutrons: 5, mass: 6, name: "هیدروژن-6" },
            { neutrons: 6, mass: 7, name: "هیدروژن-7" }
        ]
    },
    2: {
        name: "هلیوم", symbol: "He", mass: 4.0026, requiredNeutrons: 2, requiredElectrons: 2, image: "../css/assets/elements/He.png", type: "گاز نجیب", state: "گاز",
        isotopes: [
            { neutrons: 2, mass: 4, name: "هلیوم-4" },
            { neutrons: 1, mass: 3, name: "هلیوم-3" },
            { neutrons: 3, mass: 5, name: "هلیوم-5" },
            { neutrons: 4, mass: 6, name: "هلیوم-6" },
            { neutrons: 5, mass: 7, name: "هلیوم-7" },
            { neutrons: 6, mass: 8, name: "هلیوم-8" }
        ]
    },
    3: {
        name: "لیتیم", symbol: "Li", mass: 6.94, requiredNeutrons: 4, requiredElectrons: 3, image: "../css/assets/elements/Li.png", type: "فلز قلیایی", state: "جامد",
        isotopes: [
            { neutrons: 3, mass: 6, name: "لیتیم-6" },
            { neutrons: 4, mass: 7, name: "لیتیم-7" },
            { neutrons: 5, mass: 8, name: "لیتیم-8" },
            { neutrons: 6, mass: 9, name: "لیتیم-9" },
            { neutrons: 7, mass: 10, name: "لیتیم-10" }
        ]
    },
    4: {
        name: "بریلیم", symbol: "Be", mass: 9.0122, requiredNeutrons: 5, requiredElectrons: 4, image: "../css/assets/elements/Be.png", type: "فلز قلیایی خاکی", state: "جامد",
        isotopes: [
            { neutrons: 5, mass: 9, name: "بریلیم-9" },
            { neutrons: 6, mass: 10, name: "بریلیم-10" },
            { neutrons: 7, mass: 11, name: "بریلیم-11" },
            { neutrons: 8, mass: 12, name: "بریلیم-12" },
            { neutrons: 9, mass: 13, name: "بریلیم-13" },
            { neutrons: 10, mass: 14, name: "بریلیم-14" }
        ]
    },
    5: {
        name: "بور", symbol: "B", mass: 10.81, requiredNeutrons: 6, requiredElectrons: 5, image: "../css/assets/elements/B.png", type: "شبه فلز", state: "جامد",
        isotopes: [
            { neutrons: 5, mass: 10, name: "بور-10" },
            { neutrons: 6, mass: 11, name: "بور-11" },
            { neutrons: 7, mass: 12, name: "بور-12" },
            { neutrons: 8, mass: 13, name: "بور-13" },
            { neutrons: 9, mass: 14, name: "بور-14" },
            { neutrons: 10, mass: 15, name: "بور-15" },
            { neutrons: 11, mass: 16, name: "بور-16" },
            { neutrons: 12, mass: 17, name: "بور-17" }
        ]
    },
    6: {
        name: "کربن", symbol: "C", mass: 12.011, requiredNeutrons: 6, requiredElectrons: 6, image: "../css/assets/elements/C.png", type: "نافلز", state: "جامد",
        isotopes: [
            { neutrons: 6, mass: 12, name: "کربن-12" },
            { neutrons: 7, mass: 13, name: "کربن-13" },
            { neutrons: 8, mass: 14, name: "کربن-14" },
            { neutrons: 9, mass: 15, name: "کربن-15" },
            { neutrons: 10, mass: 16, name: "کربن-16" }
        ]
    },
    7: {
        name: "نیتروژن", symbol: "N", mass: 14.007, requiredNeutrons: 7, requiredElectrons: 7, image: "../css/assets/elements/N.png", type: "نافلز", state: "گاز",
        isotopes: [
            { neutrons: 7, mass: 14, name: "نیتروژن-14" },
            { neutrons: 8, mass: 15, name: "نیتروژن-15" },
            { neutrons: 9, mass: 16, name: "نیتروژن-16" },
            { neutrons: 10, mass: 17, name: "نیتروژن-17" },
            { neutrons: 11, mass: 18, name: "نیتروژن-18" },
            { neutrons: 12, mass: 19, name: "نیتروژن-19" },
            { neutrons: 13, mass: 20, name: "نیتروژن-20" },
            { neutrons: 14, mass: 21, name: "نیتروژن-21" },
            { neutrons: 15, mass: 22, name: "نیتروژن-22" },
            { neutrons: 16, mass: 23, name: "نیتروژن-23" },
            { neutrons: 17, mass: 24, name: "نیتروژن-24" }
        ]
    },
    8: {
        name: "اکسیژن", symbol: "O", mass: 15.999, requiredNeutrons: 8, requiredElectrons: 8, image: "../css/assets/elements/O.png", type: "نافلز", state: "گاز",
        isotopes: [
            { neutrons: 8, mass: 16, name: "اکسیژن-16" },
            { neutrons: 9, mass: 17, name: "اکسیژن-17" },
            { neutrons: 10, mass: 18, name: "اکسیژن-18" },
            { neutrons: 11, mass: 19, name: "اکسیژن-19" },
            { neutrons: 12, mass: 20, name: "اکسیژن-20" },
            { neutrons: 13, mass: 21, name: "اکسیژن-21" },
            { neutrons: 14, mass: 22, name: "اکسیژن-22" },
            { neutrons: 15, mass: 23, name: "اکسیژن-23" },
            { neutrons: 16, mass: 24, name: "اکسیژن-24" }
        ]
    },
    9: {
        name: "فلوئور", symbol: "F", mass: 18.998, requiredNeutrons: 10, requiredElectrons: 9, image: "../css/assets/elements/F.png", type: "هالوژن", state: "گاز",
        isotopes: [
            { neutrons: 10, mass: 19, name: "فلوئور-19" },
            { neutrons: 9, mass: 18, name: "فلوئور-18" },
            { neutrons: 8, mass: 17, name: "فلوئور-17" },
            { neutrons: 7, mass: 16, name: "فلوئور-16" },
            { neutrons: 6, mass: 15, name: "فلوئور-15" },
            { neutrons: 5, mass: 14, name: "فلوئور-14" },
            { neutrons: 4, mass: 13, name: "فلوئور-13" }
        ]
    },
    10: {
        name: "نئون", symbol: "Ne", mass: 20.180, requiredNeutrons: 10, requiredElectrons: 10, image: "../css/assets/elements/Ne.png", type: "گاز نجیب", state: "گاز",
        isotopes: [
            { neutrons: 10, mass: 20, name: "نئون-20" },
            { neutrons: 11, mass: 21, name: "نئون-21" },
            { neutrons: 12, mass: 22, name: "نئون-22" },
            { neutrons: 13, mass: 23, name: "نئون-23" },
            { neutrons: 14, mass: 24, name: "نئون-24" },
            { neutrons: 15, mass: 25, name: "نئون-25" },
            { neutrons: 16, mass: 26, name: "نئون-26" },
            { neutrons: 17, mass: 27, name: "نئون-27" },
            { neutrons: 18, mass: 28, name: "نئون-28" },
            { neutrons: 19, mass: 29, name: "نئون-29" },
            { neutrons: 20, mass: 30, name: "نئون-30" }
        ]
    },
    11: {
        name: "سدیم", symbol: "Na", mass: 22.990, requiredNeutrons: 12, requiredElectrons: 11, image: "../css/assets/elements/Na.png", type: "فلز قلیایی", state: "جامد",
        isotopes: [
            { neutrons: 12, mass: 23, name: "سدیم-23" },
            { neutrons: 11, mass: 22, name: "سدیم-22" },
            { neutrons: 13, mass: 24, name: "سدیم-24" },
            { neutrons: 14, mass: 25, name: "سدیم-25" },
            { neutrons: 15, mass: 26, name: "سدیم-26" },
            { neutrons: 16, mass: 27, name: "سدیم-27" },
            { neutrons: 17, mass: 28, name: "سدیم-28" },
            { neutrons: 18, mass: 29, name: "سدیم-29" },
            { neutrons: 19, mass: 30, name: "سدیم-30" }
        ]
    },
    12: {
        name: "منیزیم", symbol: "Mg", mass: 24.305, requiredNeutrons: 12, requiredElectrons: 12, image: "../css/assets/elements/Mg.png", type: "فلز قلیایی خاکی", state: "جامد",
        isotopes: [
            { neutrons: 12, mass: 24, name: "منیزیم-24" },
            { neutrons: 13, mass: 25, name: "منیزیم-25" },
            { neutrons: 14, mass: 26, name: "منیزیم-26" },
            { neutrons: 15, mass: 27, name: "منیزیم-27" },
            { neutrons: 16, mass: 28, name: "منیزیم-28" },
            { neutrons: 17, mass: 29, name: "منیزیم-29" },
            { neutrons: 18, mass: 30, name: "منیزیم-30" }
        ]
    },
    13: {
        name: "آلومینیوم", symbol: "Al", mass: 26.982, requiredNeutrons: 14, requiredElectrons: 13, image: "../css/assets/elements/Al.png", type: "فلز", state: "جامد",
        isotopes: [
            { neutrons: 14, mass: 27, name: "آلومینیوم-27" },
            { neutrons: 13, mass: 26, name: "آلومینیوم-26" },
            { neutrons: 15, mass: 28, name: "آلومینیوم-28" },
            { neutrons: 16, mass: 29, name: "آلومینیوم-29" },
            { neutrons: 17, mass: 30, name: "آلومینیوم-30" },
            { neutrons: 18, mass: 31, name: "آلومینیوم-31" },
            { neutrons: 19, mass: 32, name: "آلومینیوم-32" }
        ]
    },
    14: {
        name: "سیلیسیم", symbol: "Si", mass: 28.085, requiredNeutrons: 14, requiredElectrons: 14, image: "../css/assets/elements/Si.png", type: "شبه فلز", state: "جامد",
        isotopes: [
            { neutrons: 14, mass: 28, name: "سیلیسیم-28" },
            { neutrons: 15, mass: 29, name: "سیلیسیم-29" },
            { neutrons: 16, mass: 30, name: "سیلیسیم-30" },
            { neutrons: 17, mass: 31, name: "سیلیسیم-31" },
            { neutrons: 18, mass: 32, name: "سیلیسیم-32" },
            { neutrons: 19, mass: 33, name: "سیلیسیم-33" },
            { neutrons: 20, mass: 34, name: "سیلیسیم-34" }
        ]
    },
    15: {
        name: "فسفر", symbol: "P", mass: 30.974, requiredNeutrons: 16, requiredElectrons: 15, image: "../css/assets/elements/P.png", type: "نافلز", state: "جامد",
        isotopes: [
            { neutrons: 16, mass: 31, name: "فسفر-31" },
            { neutrons: 15, mass: 30, name: "فسفر-30" },
            { neutrons: 17, mass: 32, name: "فسفر-32" },
            { neutrons: 18, mass: 33, name: "فسفر-33" },
            { neutrons: 19, mass: 34, name: "فسفر-34" },
            { neutrons: 20, mass: 35, name: "فسفر-35" },
            { neutrons: 21, mass: 36, name: "فسفر-36" }
        ]
    },
    16: {
        name: "گوگرد", symbol: "S", mass: 32.06, requiredNeutrons: 16, requiredElectrons: 16, image: "../css/assets/elements/S.png", type: "نافلز", state: "جامد",
        isotopes: [
            { neutrons: 16, mass: 32, name: "گوگرد-32" },
            { neutrons: 17, mass: 33, name: "گوگرد-33" },
            { neutrons: 18, mass: 34, name: "گوگرد-34" },
            { neutrons: 19, mass: 35, name: "گوگرد-35" },
            { neutrons: 20, mass: 36, name: "گوگرد-36" },
            { neutrons: 21, mass: 37, name: "گوگرد-37" },
            { neutrons: 22, mass: 38, name: "گوگرد-38" }
        ]
    },
    17: {
        name: "کلر", symbol: "Cl", mass: 35.45, requiredNeutrons: 18, requiredElectrons: 17, image: "../css/assets/elements/Cl.png", type: "هالوژن", state: "گاز",
        isotopes: [
            { neutrons: 18, mass: 35, name: "کلر-35" },
            { neutrons: 20, mass: 37, name: "کلر-37" },
            { neutrons: 19, mass: 36, name: "کلر-36" },
            { neutrons: 21, mass: 38, name: "کلر-38" },
            { neutrons: 22, mass: 39, name: "کلر-39" },
            { neutrons: 23, mass: 40, name: "کلر-40" }
        ]
    },
    18: {
        name: "آرگون", symbol: "Ar", mass: 39.948, requiredNeutrons: 22, requiredElectrons: 18, image: "../css/assets/elements/Ar.png", type: "گاز نجیب", state: "گاز",
        isotopes: [
            { neutrons: 22, mass: 40, name: "آرگون-40" },
            { neutrons: 20, mass: 38, name: "آرگون-38" },
            { neutrons: 21, mass: 39, name: "آرگون-39" },
            { neutrons: 23, mass: 41, name: "آرگون-41" },
            { neutrons: 24, mass: 42, name: "آرگون-42" },
            { neutrons: 25, mass: 43, name: "آرگون-43" }
        ]
    },
    19: {
        name: "پتاسیم", symbol: "K", mass: 39.098, requiredNeutrons: 20, requiredElectrons: 19, image: "../css/assets/elements/K.png", type: "فلز قلیایی", state: "جامد",
        isotopes: [
            { neutrons: 20, mass: 39, name: "پتاسیم-39" },
            { neutrons: 21, mass: 40, name: "پتاسیم-40" },
            { neutrons: 22, mass: 41, name: "پتاسیم-41" },
            { neutrons: 23, mass: 42, name: "پتاسیم-42" },
            { neutrons: 24, mass: 43, name: "پتاسیم-43" },
            { neutrons: 25, mass: 44, name: "پتاسیم-44" }
        ]
    },
    20: {
        name: "کلسیم", symbol: "Ca", mass: 40.078, requiredNeutrons: 20, requiredElectrons: 20, image: "../css/assets/elements/Ca.png", type: "فلز قلیایی خاکی", state: "جامد",
        isotopes: [
            { neutrons: 20, mass: 40, name: "کلسیم-40" },
            { neutrons: 21, mass: 41, name: "کلسیم-41" },
            { neutrons: 22, mass: 42, name: "کلسیم-42" },
            { neutrons: 23, mass: 43, name: "کلسیم-43" },
            { neutrons: 24, mass: 44, name: "کلسیم-44" },
            { neutrons: 25, mass: 45, name: "کلسیم-45" },
            { neutrons: 26, mass: 46, name: "کلسیم-46" }
        ]
    },
    21: {
        name: "اسکاندیم", symbol: "Sc", mass: 44.956, requiredNeutrons: 24, requiredElectrons: 21, image: "../css/assets/elements/Sc.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 24, mass: 45, name: "اسکاندیم-45" },
            { neutrons: 23, mass: 44, name: "اسکاندیم-44" },
            { neutrons: 25, mass: 46, name: "اسکاندیم-46" },
            { neutrons: 26, mass: 47, name: "اسکاندیم-47" },
            { neutrons: 27, mass: 48, name: "اسکاندیم-48" },
            { neutrons: 28, mass: 49, name: "اسکاندیم-49" }
        ]
    },
    22: {
        name: "تیتانیوم", symbol: "Ti", mass: 47.867, requiredNeutrons: 26, requiredElectrons: 22, image: "../css/assets/elements/Ti.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 26, mass: 48, name: "تیتانیوم-48" },
            { neutrons: 25, mass: 47, name: "تیتانیوم-47" },
            { neutrons: 27, mass: 49, name: "تیتانیوم-49" },
            { neutrons: 28, mass: 50, name: "تیتانیوم-50" },
            { neutrons: 29, mass: 51, name: "تیتانیوم-51" },
            { neutrons: 30, mass: 52, name: "تیتانیوم-52" }
        ]
    },
    23: {
        name: "وانادیم", symbol: "V", mass: 50.942, requiredNeutrons: 28, requiredElectrons: 23, image: "../css/assets/elements/V.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 28, mass: 51, name: "وانادیم-51" },
            { neutrons: 27, mass: 50, name: "وانادیم-50" },
            { neutrons: 29, mass: 52, name: "وانادیم-52" },
            { neutrons: 30, mass: 53, name: "وانادیم-53" },
            { neutrons: 31, mass: 54, name: "وانادیم-54" },
            { neutrons: 32, mass: 55, name: "وانادیم-55" }
        ]
    },
    24: {
        name: "کروم", symbol: "Cr", mass: 51.996, requiredNeutrons: 28, requiredElectrons: 24, image: "../css/assets/elements/Cr.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 28, mass: 52, name: "کروم-52" },
            { neutrons: 27, mass: 51, name: "کروم-51" },
            { neutrons: 29, mass: 53, name: "کروم-53" },
            { neutrons: 30, mass: 54, name: "کروم-54" },
            { neutrons: 31, mass: 55, name: "کروم-55" },
            { neutrons: 32, mass: 56, name: "کروم-56" }
        ]
    },
    25: {
        name: "منگنز", symbol: "Mn", mass: 54.938, requiredNeutrons: 30, requiredElectrons: 25, image: "../css/assets/elements/Mn.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 30, mass: 55, name: "منگنز-55" },
            { neutrons: 29, mass: 54, name: "منگنز-54" },
            { neutrons: 31, mass: 56, name: "منگنز-56" },
            { neutrons: 32, mass: 57, name: "منگنز-57" },
            { neutrons: 33, mass: 58, name: "منگنز-58" },
            { neutrons: 34, mass: 59, name: "منگنز-59" }
        ]
    },
    26: {
        name: "آهن", symbol: "Fe", mass: 55.845, requiredNeutrons: 30, requiredElectrons: 26, image: "../css/assets/elements/Fe.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 28, mass: 54, name: "آهن-54" },
            { neutrons: 30, mass: 56, name: "آهن-56" },
            { neutrons: 31, mass: 57, name: "آهن-57" },
            { neutrons: 32, mass: 58, name: "آهن-58" },
            { neutrons: 33, mass: 59, name: "آهن-59" },
            { neutrons: 34, mass: 60, name: "آهن-60" }
        ]
    },
    27: {
        name: "کبالت", symbol: "Co", mass: 58.933, requiredNeutrons: 32, requiredElectrons: 27, image: "../css/assets/elements/Co.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 32, mass: 59, name: "کبالت-59" },
            { neutrons: 33, mass: 60, name: "کبالت-60" },
            { neutrons: 34, mass: 61, name: "کبالت-61" },
            { neutrons: 35, mass: 62, name: "کبالت-62" },
            { neutrons: 36, mass: 63, name: "کبالت-63" },
            { neutrons: 37, mass: 64, name: "کبالت-64" }
        ]
    },
    28: {
        name: "نیکل", symbol: "Ni", mass: 58.693, requiredNeutrons: 31, requiredElectrons: 28, image: "../css/assets/elements/Ni.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 30, mass: 58, name: "نیکل-58" },
            { neutrons: 31, mass: 59, name: "نیکل-59" },
            { neutrons: 32, mass: 60, name: "نیکل-60" },
            { neutrons: 33, mass: 61, name: "نیکل-61" },
            { neutrons: 34, mass: 62, name: "نیکل-62" },
            { neutrons: 35, mass: 63, name: "نیکل-63" }
        ]
    },
    29: {
        name: "مس", symbol: "Cu", mass: 63.546, requiredNeutrons: 34, requiredElectrons: 29, image: "../css/assets/elements/Cu.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 34, mass: 63, name: "مس-63" },
            { neutrons: 35, mass: 64, name: "مس-64" },
            { neutrons: 36, mass: 65, name: "مس-65" },
            { neutrons: 37, mass: 66, name: "مس-66" },
            { neutrons: 38, mass: 67, name: "مس-67" },
            { neutrons: 39, mass: 68, name: "مس-68" }
        ]
    },
    30: {
        name: "روی", symbol: "Zn", mass: 65.38, requiredNeutrons: 35, requiredElectrons: 30, image: "../css/assets/elements/Zn.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 34, mass: 64, name: "روی-64" },
            { neutrons: 35, mass: 65, name: "روی-65" },
            { neutrons: 36, mass: 66, name: "روی-66" },
            { neutrons: 37, mass: 67, name: "روی-67" },
            { neutrons: 38, mass: 68, name: "روی-68" },
            { neutrons: 39, mass: 69, name: "روی-69" }
        ]
    },
    31: {
        name: "گالیم", symbol: "Ga", mass: 69.723, requiredNeutrons: 39, requiredElectrons: 31, image: "../css/assets/elements/Ga.png", type: "فلز", state: "جامد",
        isotopes: [
            { neutrons: 38, mass: 69, name: "گالیم-69" },
            { neutrons: 39, mass: 70, name: "گالیم-70" },
            { neutrons: 40, mass: 71, name: "گالیم-71" },
            { neutrons: 41, mass: 72, name: "گالیم-72" },
            { neutrons: 42, mass: 73, name: "گالیم-73" },
            { neutrons: 43, mass: 74, name: "گالیم-74" }
        ]
    },
    32: {
        name: "ژرمانیم", symbol: "Ge", mass: 72.63, requiredNeutrons: 41, requiredElectrons: 32, image: "../css/assets/elements/Ge.png", type: "شبه فلز", state: "جامد",
        isotopes: [
            { neutrons: 40, mass: 72, name: "ژرمانیم-72" },
            { neutrons: 41, mass: 73, name: "ژرمانیم-73" },
            { neutrons: 42, mass: 74, name: "ژرمانیم-74" },
            { neutrons: 43, mass: 75, name: "ژرمانیم-75" },
            { neutrons: 44, mass: 76, name: "ژرمانیم-76" },
            { neutrons: 45, mass: 77, name: "ژرمانیم-77" }
        ]
    },
    33: {
        name: "آرسنیک", symbol: "As", mass: 74.922, requiredNeutrons: 42, requiredElectrons: 33, image: "../css/assets/elements/As.png", type: "شبه فلز", state: "جامد",
        isotopes: [
            { neutrons: 42, mass: 75, name: "آرسنیک-75" },
            { neutrons: 43, mass: 76, name: "آرسنیک-76" },
            { neutrons: 44, mass: 77, name: "آرسنیک-77" },
            { neutrons: 45, mass: 78, name: "آرسنیک-78" },
            { neutrons: 46, mass: 79, name: "آرسنیک-79" },
            { neutrons: 47, mass: 80, name: "آرسنیک-80" }
        ]
    },
    34: {
        name: "سلنیوم", symbol: "Se", mass: 78.971, requiredNeutrons: 45, requiredElectrons: 34, image: "../css/assets/elements/Se.png", type: "نافلز", state: "جامد",
        isotopes: [
            { neutrons: 44, mass: 78, name: "سلنیوم-78" },
            { neutrons: 45, mass: 79, name: "سلنیوم-79" },
            { neutrons: 46, mass: 80, name: "سلنیوم-80" },
            { neutrons: 47, mass: 81, name: "سلنیوم-81" },
            { neutrons: 48, mass: 82, name: "سلنیوم-82" },
            { neutrons: 49, mass: 83, name: "سلنیوم-83" }
        ]
    },
    35: {
        name: "برم", symbol: "Br", mass: 79.904, requiredNeutrons: 45, requiredElectrons: 35, image: "../css/assets/elements/Br.png", type: "هالوژن", state: "مایع",
        isotopes: [
            { neutrons: 44, mass: 79, name: "برم-79" },
            { neutrons: 45, mass: 80, name: "برم-80" },
            { neutrons: 46, mass: 81, name: "برم-81" },
            { neutrons: 47, mass: 82, name: "برم-82" },
            { neutrons: 48, mass: 83, name: "برم-83" },
            { neutrons: 49, mass: 84, name: "برم-84" }
        ]
    },
    36: {
        name: "کریپتون", symbol: "Kr", mass: 83.798, requiredNeutrons: 48, requiredElectrons: 36, image: "../css/assets/elements/Kr.png", type: "گاز نجیب", state: "گاز",
        isotopes: [
            { neutrons: 48, mass: 84, name: "کریپتون-84" },
            { neutrons: 47, mass: 83, name: "کریپتون-83" },
            { neutrons: 46, mass: 82, name: "کریپتون-82" },
            { neutrons: 49, mass: 85, name: "کریپتون-85" },
            { neutrons: 50, mass: 86, name: "کریپتون-86" }
        ]
    },
    37: {
        name: "روبیدیم", symbol: "Rb", mass: 85.468, requiredNeutrons: 48, requiredElectrons: 37, image: "../css/assets/elements/Rb.png", type: "فلز قلیایی", state: "جامد",
        isotopes: [
            { neutrons: 48, mass: 85, name: "روبیدیم-85" },
            { neutrons: 50, mass: 87, name: "روبیدیم-87" }
        ]
    },
    38: {
        name: "استرانسیم", symbol: "Sr", mass: 87.62, requiredNeutrons: 50, requiredElectrons: 38, image: "../css/assets/elements/Sr.png", type: "فلز قلیایی خاکی", state: "جامد",
        isotopes: [
            { neutrons: 50, mass: 88, name: "استرانسیم-88" },
            { neutrons: 48, mass: 86, name: "استرانسیم-86" },
            { neutrons: 49, mass: 87, name: "استرانسیم-87" },
            { neutrons: 51, mass: 89, name: "استرانسیم-89" },
            { neutrons: 52, mass: 90, name: "استرانسیم-90" }
        ]
    },
    39: {
        name: "ایتریم", symbol: "Y", mass: 88.906, requiredNeutrons: 50, requiredElectrons: 39, image: "../css/assets/elements/Y.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 50, mass: 89, name: "ایتریم-89" },
            { neutrons: 51, mass: 90, name: "ایتریم-90" },
            { neutrons: 52, mass: 91, name: "ایتریم-91" },
            { neutrons: 53, mass: 92, name: "ایتریم-92" },
            { neutrons: 54, mass: 93, name: "ایتریم-93" }
        ]
    },
    40: {
        name: "زیرکونیم", symbol: "Zr", mass: 91.224, requiredNeutrons: 51, requiredElectrons: 40, image: "../css/assets/elements/Zr.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 51, mass: 91, name: "زیرکونیم-91" },
            { neutrons: 50, mass: 90, name: "زیرکونیم-90" },
            { neutrons: 52, mass: 92, name: "زیرکونیم-92" },
            { neutrons: 53, mass: 93, name: "زیرکونیم-93" },
            { neutrons: 54, mass: 94, name: "زیرکونیم-94" },
            { neutrons: 55, mass: 95, name: "زیرکونیم-95" }
        ]
    },
    41: {
        name: "نیوبیم", symbol: "Nb", mass: 92.906, requiredNeutrons: 52, requiredElectrons: 41, image: "../css/assets/elements/Nb.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 52, mass: 93, name: "نیوبیم-93" },
            { neutrons: 53, mass: 94, name: "نیوبیم-94" },
            { neutrons: 54, mass: 95, name: "نیوبیم-95" },
            { neutrons: 55, mass: 96, name: "نیوبیم-96" },
            { neutrons: 56, mass: 97, name: "نیوبیم-97" }
        ]
    },
    42: {
        name: "مولیبدن", symbol: "Mo", mass: 95.95, requiredNeutrons: 54, requiredElectrons: 42, image: "../css/assets/elements/Mo.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 54, mass: 96, name: "مولیبدن-96" },
            { neutrons: 52, mass: 94, name: "مولیبدن-94" },
            { neutrons: 53, mass: 95, name: "مولیبدن-95" },
            { neutrons: 55, mass: 97, name: "مولیبدن-97" },
            { neutrons: 56, mass: 98, name: "مولیبدن-98" },
            { neutrons: 57, mass: 99, name: "مولیبدن-99" },
            { neutrons: 58, mass: 100, name: "مولیبدن-100" }
        ]
    },
    43: {
        name: "تکنسیم", symbol: "Tc", mass: 98, requiredNeutrons: 55, requiredElectrons: 43, image: "../css/assets/elements/Tc.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 55, mass: 98, name: "تکنسیم-98" },
            { neutrons: 54, mass: 97, name: "تکنسیم-97" },
            { neutrons: 56, mass: 99, name: "تکنسیم-99" },
            { neutrons: 57, mass: 100, name: "تکنسیم-100" },
            { neutrons: 58, mass: 101, name: "تکنسیم-101" }
        ]
    },
    44: {
        name: "روتنیم", symbol: "Ru", mass: 101.07, requiredNeutrons: 57, requiredElectrons: 44, image: "../css/assets/elements/Ru.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 57, mass: 101, name: "روتنیم-101" },
            { neutrons: 56, mass: 100, name: "روتنیم-100" },
            { neutrons: 58, mass: 102, name: "روتنیم-102" },
            { neutrons: 59, mass: 103, name: "روتنیم-103" },
            { neutrons: 60, mass: 104, name: "روتنیم-104" }
        ]
    },
    45: {
        name: "رودیوم", symbol: "Rh", mass: 102.91, requiredNeutrons: 58, requiredElectrons: 45, image: "../css/assets/elements/Rh.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 58, mass: 103, name: "رودیوم-103" },
            { neutrons: 57, mass: 102, name: "رودیوم-102" },
            { neutrons: 59, mass: 104, name: "رودیوم-104" },
            { neutrons: 60, mass: 105, name: "رودیوم-105" },
            { neutrons: 61, mass: 106, name: "رودیوم-106" }
        ]
    },
    46: {
        name: "پالادیوم", symbol: "Pd", mass: 106.42, requiredNeutrons: 60, requiredElectrons: 46, image: "../css/assets/elements/Pd.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 60, mass: 106, name: "پالادیوم-106" },
            { neutrons: 58, mass: 104, name: "پالادیوم-104" },
            { neutrons: 59, mass: 105, name: "پالادیوم-105" },
            { neutrons: 61, mass: 107, name: "پالادیوم-107" },
            { neutrons: 62, mass: 108, name: "پالادیوم-108" }
        ]
    },
    47: {
        name: "نقره", symbol: "Ag", mass: 107.87, requiredNeutrons: 61, requiredElectrons: 47, image: "../css/assets/elements/Ag.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 61, mass: 108, name: "نقره-108" },
            { neutrons: 60, mass: 107, name: "نقره-107" },
            { neutrons: 62, mass: 109, name: "نقره-109" },
            { neutrons: 63, mass: 110, name: "نقره-110" },
            { neutrons: 64, mass: 111, name: "نقره-111" }
        ]
    },
    48: {
        name: "کادمیم", symbol: "Cd", mass: 112.41, requiredNeutrons: 64, requiredElectrons: 48, image: "../css/assets/elements/Cd.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 64, mass: 112, name: "کادمیم-112" },
            { neutrons: 62, mass: 110, name: "کادمیم-110" },
            { neutrons: 63, mass: 111, name: "کادمیم-111" },
            { neutrons: 65, mass: 113, name: "کادمیم-113" },
            { neutrons: 66, mass: 114, name: "کادمیم-114" }
        ]
    },
    49: {
        name: "ایندیوم", symbol: "In", mass: 114.82, requiredNeutrons: 66, requiredElectrons: 49, image: "../css/assets/elements/In.png", type: "فلز", state: "جامد",
        isotopes: [
            { neutrons: 66, mass: 115, name: "ایندیوم-115" },
            { neutrons: 65, mass: 114, name: "ایندیوم-114" },
            { neutrons: 67, mass: 116, name: "ایندیوم-116" },
            { neutrons: 68, mass: 117, name: "ایندیوم-117" },
            { neutrons: 69, mass: 118, name: "ایندیوم-118" }
        ]
    },
    50: {
        name: "قلع", symbol: "Sn", mass: 118.71, requiredNeutrons: 69, requiredElectrons: 50, image: "../css/assets/elements/Sn.png", type: "فلز", state: "جامد",
        isotopes: [
            { neutrons: 69, mass: 119, name: "قلع-119" },
            { neutrons: 68, mass: 118, name: "قلع-118" },
            { neutrons: 70, mass: 120, name: "قلع-120" },
            { neutrons: 71, mass: 121, name: "قلع-121" },
            { neutrons: 72, mass: 122, name: "قلع-122" }
        ]
    },
    51: {
        name: "آنتیموان", symbol: "Sb", mass: 121.76, requiredNeutrons: 71, requiredElectrons: 51, image: "../css/assets/elements/Sb.png", type: "شبه فلز", state: "جامد",
        isotopes: [
            { neutrons: 71, mass: 122, name: "آنتیموان-122" },
            { neutrons: 70, mass: 121, name: "آنتیموان-121" },
            { neutrons: 72, mass: 123, name: "آنتیموان-123" },
            { neutrons: 73, mass: 124, name: "آنتیموان-124" },
            { neutrons: 74, mass: 125, name: "آنتیموان-125" }
        ]
    },
    52: {
        name: "تلوریم", symbol: "Te", mass: 127.60, requiredNeutrons: 76, requiredElectrons: 52, image: "../css/assets/elements/Te.png", type: "شبه فلز", state: "جامد",
        isotopes: [
            { neutrons: 76, mass: 128, name: "تلوریم-128" },
            { neutrons: 74, mass: 126, name: "تلوریم-126" },
            { neutrons: 75, mass: 127, name: "تلوریم-127" },
            { neutrons: 77, mass: 129, name: "تلوریم-129" },
            { neutrons: 78, mass: 130, name: "تلوریم-130" }
        ]
    },
    53: {
        name: "ید", symbol: "I", mass: 126.90, requiredNeutrons: 74, requiredElectrons: 53, image: "../css/assets/elements/I.png", type: "هالوژن", state: "جامد",
        isotopes: [
            { neutrons: 74, mass: 127, name: "ید-127" },
            { neutrons: 73, mass: 126, name: "ید-126" },
            { neutrons: 75, mass: 128, name: "ید-128" },
            { neutrons: 76, mass: 129, name: "ید-129" },
            { neutrons: 77, mass: 130, name: "ید-130" }
        ]
    },
    54: {
        name: "زنون", symbol: "Xe", mass: 131.29, requiredNeutrons: 77, requiredElectrons: 54, image: "../css/assets/elements/Xe.png", type: "گاز نجیب", state: "گاز",
        isotopes: [
            { neutrons: 77, mass: 132, name: "زنون-132" },
            { neutrons: 75, mass: 130, name: "زنون-130" },
            { neutrons: 76, mass: 131, name: "زنون-131" },
            { neutrons: 78, mass: 133, name: "زنون-133" },
            { neutrons: 79, mass: 134, name: "زنون-134" }
        ]
    },
    55: {
        name: "سزیم", symbol: "Cs", mass: 132.91, requiredNeutrons: 78, requiredElectrons: 55, image: "../css/assets/elements/Cs.png", type: "فلز قلیایی", state: "جامد",
        isotopes: [
            { neutrons: 78, mass: 133, name: "سزیم-133" },
            { neutrons: 77, mass: 132, name: "سزیم-132" },
            { neutrons: 79, mass: 134, name: "سزیم-134" },
            { neutrons: 80, mass: 135, name: "سزیم-135" },
            { neutrons: 81, mass: 136, name: "سزیم-136" }
        ]
    },
    56: {
        name: "باریم", symbol: "Ba", mass: 137.33, requiredNeutrons: 81, requiredElectrons: 56, image: "../css/assets/elements/Ba.png", type: "فلز قلیایی خاکی", state: "جامد",
        isotopes: [
            { neutrons: 81, mass: 137, name: "باریم-137" },
            { neutrons: 80, mass: 136, name: "باریم-136" },
            { neutrons: 82, mass: 138, name: "باریم-138" },
            { neutrons: 83, mass: 139, name: "باریم-139" },
            { neutrons: 84, mass: 140, name: "باریم-140" }
        ]
    },
    57: {
        name: "لانتان", symbol: "La", mass: 138.91, requiredNeutrons: 82, requiredElectrons: 57, image: "../css/assets/elements/La.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 82, mass: 139, name: "لانتان-139" },
            { neutrons: 81, mass: 138, name: "لانتان-138" },
            { neutrons: 83, mass: 140, name: "لانتان-140" },
            { neutrons: 84, mass: 141, name: "لانتان-141" },
            { neutrons: 85, mass: 142, name: "لانتان-142" }
        ]
    },
    58: {
        name: "سریم", symbol: "Ce", mass: 140.12, requiredNeutrons: 82, requiredElectrons: 58, image: "../css/assets/elements/Ce.png", type: "لانتانید", state: "جامد",
        isotopes: [
            { neutrons: 82, mass: 140, name: "سریم-140" },
            { neutrons: 80, mass: 138, name: "سریم-138" },
            { neutrons: 83, mass: 141, name: "سریم-141" },
            { neutrons: 84, mass: 142, name: "سریم-142" },
            { neutrons: 85, mass: 143, name: "سریم-143" }
        ]
    },
    59: {
        name: "پرازئودیمیم", symbol: "Pr", mass: 140.91, requiredNeutrons: 82, requiredElectrons: 59, image: "../css/assets/elements/Pr.png", type: "لانتانید", state: "جامد",
        isotopes: [
            { neutrons: 82, mass: 141, name: "پرازئودیمیم-141" },
            { neutrons: 81, mass: 140, name: "پرازئودیمیم-140" },
            { neutrons: 83, mass: 142, name: "پرازئودیمیم-142" },
            { neutrons: 84, mass: 143, name: "پرازئودیمیم-143" },
            { neutrons: 85, mass: 144, name: "پرازئودیمیم-144" }
        ]
    },
    60: {
        name: "نئودیمیم", symbol: "Nd", mass: 144.24, requiredNeutrons: 84, requiredElectrons: 60, image: "../css/assets/elements/Nd.png", type: "لانتانید", state: "جامد",
        isotopes: [
            { neutrons: 84, mass: 144, name: "نئودیمیم-144" },
            { neutrons: 83, mass: 143, name: "نئودیمیم-143" },
            { neutrons: 85, mass: 145, name: "نئودیمیم-145" },
            { neutrons: 86, mass: 146, name: "نئودیمیم-146" },
            { neutrons: 87, mass: 147, name: "نئودیمیم-147" }
        ]
    },
    61: {
        name: "پرومتیوم", symbol: "Pm", mass: 145, requiredNeutrons: 84, requiredElectrons: 61, image: "../css/assets/elements/Pm.png", type: "لانتانید", state: "جامد",
        isotopes: [
            { neutrons: 84, mass: 145, name: "پرومتیوم-145" },
            { neutrons: 83, mass: 144, name: "پرومتیوم-144" },
            { neutrons: 85, mass: 146, name: "پرومتیوم-146" },
            { neutrons: 86, mass: 147, name: "پرومتیوم-147" },
            { neutrons: 87, mass: 148, name: "پرومتیوم-148" }
        ]
    },
    62: {
        name: "ساماریم", symbol: "Sm", mass: 150.36, requiredNeutrons: 88, requiredElectrons: 62, image: "../css/assets/elements/Sm.png", type: "لانتانید", state: "جامد",
        isotopes: [
            { neutrons: 88, mass: 150, name: "ساماریم-150" },
            { neutrons: 87, mass: 149, name: "ساماریم-149" },
            { neutrons: 89, mass: 151, name: "ساماریم-151" },
            { neutrons: 90, mass: 152, name: "ساماریم-152" },
            { neutrons: 91, mass: 153, name: "ساماریم-153" }
        ]
    },
    63: {
        name: "یوروپیم", symbol: "Eu", mass: 151.96, requiredNeutrons: 89, requiredElectrons: 63, image: "../css/assets/elements/Eu.png", type: "لانتانید", state: "جامد",
        isotopes: [
            { neutrons: 89, mass: 152, name: "یوروپیم-152" },
            { neutrons: 88, mass: 151, name: "یوروپیم-151" },
            { neutrons: 90, mass: 153, name: "یوروپیم-153" },
            { neutrons: 91, mass: 154, name: "یوروپیم-154" },
            { neutrons: 92, mass: 155, name: "یوروپیم-155" }
        ]
    },
    64: {
        name: "گادولینیم", symbol: "Gd", mass: 157.25, requiredNeutrons: 93, requiredElectrons: 64, image: "../css/assets/elements/Gd.png", type: "لانتانید", state: "جامد",
        isotopes: [
            { neutrons: 93, mass: 157, name: "گادولینیم-157" },
            { neutrons: 92, mass: 156, name: "گادولینیم-156" },
            { neutrons: 94, mass: 158, name: "گادولینیم-158" },
            { neutrons: 95, mass: 159, name: "گادولینیم-159" },
            { neutrons: 96, mass: 160, name: "گادولینیم-160" }
        ]
    },
    65: {
        name: "ترابیم", symbol: "Tb", mass: 158.93, requiredNeutrons: 94, requiredElectrons: 65, image: "../css/assets/elements/Tb.png", type: "لانتانید", state: "جامد",
        isotopes: [
            { neutrons: 94, mass: 159, name: "ترابیم-159" },
            { neutrons: 93, mass: 158, name: "ترابیم-158" },
            { neutrons: 95, mass: 160, name: "ترابیم-160" },
            { neutrons: 96, mass: 161, name: "ترابیم-161" },
            { neutrons: 97, mass: 162, name: "ترابیم-162" }
        ]
    },
    66: {
        name: "دیسپروزیم", symbol: "Dy", mass: 162.50, requiredNeutrons: 97, requiredElectrons: 66, image: "../css/assets/elements/Dy.png", type: "لانتانید", state: "جامد",
        isotopes: [
            { neutrons: 97, mass: 163, name: "دیسپروزیم-163" },
            { neutrons: 96, mass: 162, name: "دیسپروزیم-162" },
            { neutrons: 98, mass: 164, name: "دیسپروزیم-164" },
            { neutrons: 99, mass: 165, name: "دیسپروزیم-165" },
            { neutrons: 100, mass: 166, name: "دیسپروزیم-166" }
        ]
    },
    67: {
        name: "هولمیم", symbol: "Ho", mass: 164.93, requiredNeutrons: 98, requiredElectrons: 67, image: "../css/assets/elements/Ho.png", type: "لانتانید", state: "جامد",
        isotopes: [
            { neutrons: 98, mass: 165, name: "هولمیم-165" },
            { neutrons: 97, mass: 164, name: "هولمیم-164" },
            { neutrons: 99, mass: 166, name: "هولمیم-166" },
            { neutrons: 100, mass: 167, name: "هولمیم-167" },
            { neutrons: 101, mass: 168, name: "هولمیم-168" }
        ]
    },
    68: {
        name: "اربیم", symbol: "Er", mass: 167.26, requiredNeutrons: 99, requiredElectrons: 68, image: "../css/assets/elements/Er.png", type: "لانتانید", state: "جامد",
        isotopes: [
            { neutrons: 99, mass: 168, name: "اربیم-168" },
            { neutrons: 98, mass: 167, name: "اربیم-167" },
            { neutrons: 100, mass: 169, name: "اربیم-169" },
            { neutrons: 101, mass: 170, name: "اربیم-170" },
            { neutrons: 102, mass: 171, name: "اربیم-171" }
        ]
    },
    69: {
        name: "تولیم", symbol: "Tm", mass: 168.93, requiredNeutrons: 100, requiredElectrons: 69, image: "../css/assets/elements/Tm.png", type: "لانتانید", state: "جامد",
        isotopes: [
            { neutrons: 100, mass: 169, name: "تولیم-169" },
            { neutrons: 99, mass: 168, name: "تولیم-168" },
            { neutrons: 101, mass: 170, name: "تولیم-170" },
            { neutrons: 102, mass: 171, name: "تولیم-171" },
            { neutrons: 103, mass: 172, name: "تولیم-172" }
        ]
    },
    70: {
        name: "ایترابیم", symbol: "Yb", mass: 173.04, requiredNeutrons: 103, requiredElectrons: 70, image: "../css/assets/elements/Yb.png", type: "لانتانید", state: "جامد",
        isotopes: [
            { neutrons: 103, mass: 173, name: "ایترابیم-173" },
            { neutrons: 102, mass: 172, name: "ایترابیم-172" },
            { neutrons: 104, mass: 174, name: "ایترابیم-174" },
            { neutrons: 105, mass: 175, name: "ایترابیم-175" },
            { neutrons: 106, mass: 176, name: "ایترابیم-176" }
        ]
    },
    71: {
        name: "لوتسیم", symbol: "Lu", mass: 174.97, requiredNeutrons: 104, requiredElectrons: 71, image: "../css/assets/elements/Lu.png", type: "لانتانید", state: "جامد",
        isotopes: [
            { neutrons: 104, mass: 175, name: "لوتسیم-175" },
            { neutrons: 103, mass: 174, name: "لوتسیم-174" },
            { neutrons: 105, mass: 176, name: "لوتسیم-176" },
            { neutrons: 106, mass: 177, name: "لوتسیم-177" },
            { neutrons: 107, mass: 178, name: "لوتسیم-178" }
        ]
    },
    72: {
        name: "هافنیوم", symbol: "Hf", mass: 178.49, requiredNeutrons: 106, requiredElectrons: 72, image: "../css/assets/elements/Hf.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 106, mass: 178, name: "هافنیوم-178" },
            { neutrons: 105, mass: 177, name: "هافنیوم-177" },
            { neutrons: 107, mass: 179, name: "هافنیوم-179" },
            { neutrons: 108, mass: 180, name: "هافنیوم-180" },
            { neutrons: 109, mass: 181, name: "هافنیوم-181" }
        ]
    },
    73: {
        name: "تانتالوم", symbol: "Ta", mass: 180.95, requiredNeutrons: 108, requiredElectrons: 73, image: "../css/assets/elements/Ta.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 108, mass: 181, name: "تانتالوم-181" },
            { neutrons: 107, mass: 180, name: "تانتالوم-180" },
            { neutrons: 109, mass: 182, name: "تانتالوم-182" },
            { neutrons: 110, mass: 183, name: "تانتالوم-183" },
            { neutrons: 111, mass: 184, name: "تانتالوم-184" }
        ]
    },
    74: {
        name: "تنگستن", symbol: "W", mass: 183.84, requiredNeutrons: 110, requiredElectrons: 74, image: "../css/assets/elements/W.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 110, mass: 184, name: "تنگستن-184" },
            { neutrons: 109, mass: 183, name: "تنگستن-183" },
            { neutrons: 111, mass: 185, name: "تنگستن-185" },
            { neutrons: 112, mass: 186, name: "تنگستن-186" },
            { neutrons: 113, mass: 187, name: "تنگستن-187" }
        ]
    },
    75: {
        name: "رنیوم", symbol: "Re", mass: 186.21, requiredNeutrons: 111, requiredElectrons: 75, image: "../css/assets/elements/Re.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 111, mass: 186, name: "رنیوم-186" },
            { neutrons: 110, mass: 185, name: "رنیوم-185" },
            { neutrons: 112, mass: 187, name: "رنیوم-187" },
            { neutrons: 113, mass: 188, name: "رنیوم-188" },
            { neutrons: 114, mass: 189, name: "رنیوم-189" }
        ]
    },
    76: {
        name: "اسمیم", symbol: "Os", mass: 190.23, requiredNeutrons: 114, requiredElectrons: 76, image: "../css/assets/elements/Os.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 114, mass: 190, name: "اسمیم-190" },
            { neutrons: 113, mass: 189, name: "اسمیم-189" },
            { neutrons: 115, mass: 191, name: "اسمیم-191" },
            { neutrons: 116, mass: 192, name: "اسمیم-192" },
            { neutrons: 117, mass: 193, name: "اسمیم-193" }
        ]
    },
    77: {
        name: "ایریدیم", symbol: "Ir", mass: 192.22, requiredNeutrons: 115, requiredElectrons: 77, image: "../css/assets/elements/Ir.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 115, mass: 192, name: "ایریدیم-192" },
            { neutrons: 114, mass: 191, name: "ایریدیم-191" },
            { neutrons: 116, mass: 193, name: "ایریدیم-193" },
            { neutrons: 117, mass: 194, name: "ایریدیم-194" },
            { neutrons: 118, mass: 195, name: "ایریدیم-195" }
        ]
    },
    78: {
        name: "پلاتین", symbol: "Pt", mass: 195.08, requiredNeutrons: 117, requiredElectrons: 78, image: "../css/assets/elements/Pt.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 117, mass: 195, name: "پلاتین-195" },
            { neutrons: 116, mass: 194, name: "پلاتین-194" },
            { neutrons: 118, mass: 196, name: "پلاتین-196" },
            { neutrons: 119, mass: 197, name: "پلاتین-197" },
            { neutrons: 120, mass: 198, name: "پلاتین-198" }
        ]
    },
    79: {
        name: "طلا", symbol: "Au", mass: 196.97, requiredNeutrons: 118, requiredElectrons: 79, image: "../css/assets/elements/Au.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 118, mass: 197, name: "طلا-197" },
            { neutrons: 117, mass: 196, name: "طلا-196" },
            { neutrons: 119, mass: 198, name: "طلا-198" },
            { neutrons: 120, mass: 199, name: "طلا-199" },
            { neutrons: 121, mass: 200, name: "طلا-200" }
        ]
    },
    80: {
        name: "جیوه", symbol: "Hg", mass: 200.59, requiredNeutrons: 121, requiredElectrons: 80, image: "../css/assets/elements/Hg.png", type: "فلز واسطه", state: "مایع",
        isotopes: [
            { neutrons: 121, mass: 201, name: "جیوه-201" },
            { neutrons: 120, mass: 200, name: "جیوه-200" },
            { neutrons: 122, mass: 202, name: "جیوه-202" },
            { neutrons: 123, mass: 203, name: "جیوه-203" },
            { neutrons: 124, mass: 204, name: "جیوه-204" }
        ]
    },
    81: {
        name: "تالیم", symbol: "Tl", mass: 204.38, requiredNeutrons: 123, requiredElectrons: 81, image: "../css/assets/elements/Tl.png", type: "فلز", state: "جامد",
        isotopes: [
            { neutrons: 123, mass: 204, name: "تالیم-204" },
            { neutrons: 122, mass: 203, name: "تالیم-203" },
            { neutrons: 124, mass: 205, name: "تالیم-205" },
            { neutrons: 125, mass: 206, name: "تالیم-206" },
            { neutrons: 126, mass: 207, name: "تالیم-207" }
        ]
    },
    82: {
        name: "سرب", symbol: "Pb", mass: 207.2, requiredNeutrons: 125, requiredElectrons: 82, image: "../css/assets/elements/Pb.png", type: "فلز", state: "جامد",
        isotopes: [
            { neutrons: 125, mass: 207, name: "سرب-207" },
            { neutrons: 124, mass: 206, name: "سرب-206" },
            { neutrons: 126, mass: 208, name: "سرب-208" },
            { neutrons: 127, mass: 209, name: "سرب-209" },
            { neutrons: 128, mass: 210, name: "سرب-210" }
        ]
    },
    83: {
        name: "بیسموت", symbol: "Bi", mass: 208.98, requiredNeutrons: 126, requiredElectrons: 83, image: "../css/assets/elements/Bi.png", type: "فلز", state: "جامد",
        isotopes: [
            { neutrons: 126, mass: 209, name: "بیسموت-209" },
            { neutrons: 125, mass: 208, name: "بیسموت-208" },
            { neutrons: 127, mass: 210, name: "بیسموت-210" },
            { neutrons: 128, mass: 211, name: "بیسموت-211" },
            { neutrons: 129, mass: 212, name: "بیسموت-212" }
        ]
    },
    84: {
        name: "پولونیم", symbol: "Po", mass: 209, requiredNeutrons: 125, requiredElectrons: 84, image: "../css/assets/elements/Po.png", type: "شبه فلز", state: "جامد",
        isotopes: [
            { neutrons: 125, mass: 209, name: "پولونیم-209" },
            { neutrons: 124, mass: 208, name: "پولونیم-208" },
            { neutrons: 126, mass: 210, name: "پولونیم-210" },
            { neutrons: 127, mass: 211, name: "پولونیم-211" },
            { neutrons: 128, mass: 212, name: "پولونیم-212" }
        ]
    },
    85: {
        name: "آستاتین", symbol: "At", mass: 210, requiredNeutrons: 125, requiredElectrons: 85, image: "../css/assets/elements/At.png", type: "هالوژن", state: "جامد",
        isotopes: [
            { neutrons: 125, mass: 210, name: "آستاتین-210" },
            { neutrons: 124, mass: 209, name: "آستاتین-209" },
            { neutrons: 126, mass: 211, name: "آستاتین-211" },
            { neutrons: 127, mass: 212, name: "آستاتین-212" },
            { neutrons: 128, mass: 213, name: "آستاتین-213" }
        ]
    },
    86: {
        name: "رادون", symbol: "Rn", mass: 222, requiredNeutrons: 136, requiredElectrons: 86, image: "../css/assets/elements/Rn.png", type: "گاز نجیب", state: "گاز",
        isotopes: [
            { neutrons: 136, mass: 222, name: "رادون-222" },
            { neutrons: 135, mass: 221, name: "رادون-221" },
            { neutrons: 137, mass: 223, name: "رادون-223" },
            { neutrons: 138, mass: 224, name: "رادون-224" },
            { neutrons: 139, mass: 225, name: "رادون-225" }
        ]
    },
    87: {
        name: "فرانسیوم", symbol: "Fr", mass: 223, requiredNeutrons: 136, requiredElectrons: 87, image: "../css/assets/elements/Fr.png", type: "فلز قلیایی", state: "جامد",
        isotopes: [
            { neutrons: 136, mass: 223, name: "فرانسیوم-223" },
            { neutrons: 135, mass: 222, name: "فرانسیوم-222" },
            { neutrons: 137, mass: 224, name: "فرانسیوم-224" },
            { neutrons: 138, mass: 225, name: "فرانسیوم-225" },
            { neutrons: 139, mass: 226, name: "فرانسیوم-226" }
        ]
    },
    88: {
        name: "رادیم", symbol: "Ra", mass: 226, requiredNeutrons: 138, requiredElectrons: 88, image: "../css/assets/elements/Ra.png", type: "فلز قلیایی خاکی", state: "جامد",
        isotopes: [
            { neutrons: 138, mass: 226, name: "رادیم-226" },
            { neutrons: 137, mass: 225, name: "رادیم-225" },
            { neutrons: 139, mass: 227, name: "رادیم-227" },
            { neutrons: 140, mass: 228, name: "رادیم-228" },
            { neutrons: 141, mass: 229, name: "رادیم-229" }
        ]
    },
    89: {
        name: "آکتینیم", symbol: "Ac", mass: 227, requiredNeutrons: 138, requiredElectrons: 89, image: "../css/assets/elements/Ac.png", type: "اکتینید", state: "جامد",
        isotopes: [
            { neutrons: 138, mass: 227, name: "آکتینیم-227" },
            { neutrons: 137, mass: 226, name: "آکتینیم-226" },
            { neutrons: 139, mass: 228, name: "آکتینیم-228" },
            { neutrons: 140, mass: 229, name: "آکتینیم-229" },
            { neutrons: 141, mass: 230, name: "آکتینیم-230" }
        ]
    },
    90: {
        name: "توریم", symbol: "Th", mass: 232.04, requiredNeutrons: 142, requiredElectrons: 90, image: "../css/assets/elements/Th.png", type: "اکتینید", state: "جامد",
        isotopes: [
            { neutrons: 142, mass: 232, name: "توریم-232" },
            { neutrons: 141, mass: 231, name: "توریم-231" },
            { neutrons: 143, mass: 233, name: "توریم-233" },
            { neutrons: 144, mass: 234, name: "توریم-234" },
            { neutrons: 145, mass: 235, name: "توریم-235" }
        ]
    },
    91: {
        name: "پروتاکتینیم", symbol: "Pa", mass: 231.04, requiredNeutrons: 140, requiredElectrons: 91, image: "../css/assets/elements/Pa.png", type: "اکتینید", state: "جامد",
        isotopes: [
            { neutrons: 140, mass: 231, name: "پروتاکتینیم-231" },
            { neutrons: 139, mass: 230, name: "پروتاکتینیم-230" },
            { neutrons: 141, mass: 232, name: "پروتاکتینیم-232" },
            { neutrons: 142, mass: 233, name: "پروتاکتینیم-233" },
            { neutrons: 143, mass: 234, name: "پروتاکتینیم-234" }
        ]
    },
    92: {
        name: "اورانیوم", symbol: "U", mass: 238.03, requiredNeutrons: 146, requiredElectrons: 92, image: "../css/assets/elements/U.png", type: "اکتینید", state: "جامد",
        isotopes: [
            { neutrons: 146, mass: 238, name: "اورانیوم-238" },
            { neutrons: 143, mass: 235, name: "اورانیوم-235" },
            { neutrons: 142, mass: 234, name: "اورانیوم-234" },
            { neutrons: 144, mass: 236, name: "اورانیوم-236" },
            { neutrons: 145, mass: 237, name: "اورانیوم-237" }
        ]
    },
    93: {
        name: "نپتونیم", symbol: "Np", mass: 237, requiredNeutrons: 144, requiredElectrons: 93, image: "../css/assets/elements/Np.png", type: "اکتینید", state: "جامد",
        isotopes: [
            { neutrons: 144, mass: 237, name: "نپتونیم-237" },
            { neutrons: 143, mass: 236, name: "نپتونیم-236" },
            { neutrons: 145, mass: 238, name: "نپتونیم-238" },
            { neutrons: 146, mass: 239, name: "نپتونیم-239" },
            { neutrons: 147, mass: 240, name: "نپتونیم-240" }
        ]
    },
    94: {
        name: "پلوتونیم", symbol: "Pu", mass: 244, requiredNeutrons: 150, requiredElectrons: 94, image: "../css/assets/elements/Pu.png", type: "اکتینید", state: "جامد",
        isotopes: [
            { neutrons: 150, mass: 244, name: "پلوتونیم-244" },
            { neutrons: 148, mass: 242, name: "پلوتونیم-242" },
            { neutrons: 149, mass: 243, name: "پلوتونیم-243" },
            { neutrons: 151, mass: 245, name: "پلوتونیم-245" },
            { neutrons: 152, mass: 246, name: "پلوتونیم-246" }
        ]
    },
    95: {
        name: "آمریکیم", symbol: "Am", mass: 243, requiredNeutrons: 148, requiredElectrons: 95, image: "../css/assets/elements/Am.png", type: "اکتینید", state: "جامد",
        isotopes: [
            { neutrons: 148, mass: 243, name: "آمریکیم-243" },
            { neutrons: 147, mass: 242, name: "آمریکیم-242" },
            { neutrons: 149, mass: 244, name: "آمریکیم-244" },
            { neutrons: 150, mass: 245, name: "آمریکیم-245" },
            { neutrons: 151, mass: 246, name: "آمریکیم-246" }
        ]
    },
    96: {
        name: "کوریوم", symbol: "Cm", mass: 247, requiredNeutrons: 151, requiredElectrons: 96, image: "../css/assets/elements/Cm.png", type: "اکتینید", state: "جامد",
        isotopes: [
            { neutrons: 151, mass: 247, name: "کوریوم-247" },
            { neutrons: 150, mass: 246, name: "کوریوم-246" },
            { neutrons: 152, mass: 248, name: "کوریوم-248" },
            { neutrons: 153, mass: 249, name: "کوریوم-249" },
            { neutrons: 154, mass: 250, name: "کوریوم-250" }
        ]
    },
    97: {
        name: "برکلیم", symbol: "Bk", mass: 247, requiredNeutrons: 150, requiredElectrons: 97, image: "../css/assets/elements/Bk.png", type: "اکتینید", state: "جامد",
        isotopes: [
            { neutrons: 150, mass: 247, name: "برکلیم-247" },
            { neutrons: 149, mass: 246, name: "برکلیم-246" },
            { neutrons: 151, mass: 248, name: "برکلیم-248" },
            { neutrons: 152, mass: 249, name: "برکلیم-249" },
            { neutrons: 153, mass: 250, name: "برکلیم-250" }
        ]
    },
    98: {
        name: "کالیفرنیم", symbol: "Cf", mass: 251, requiredNeutrons: 153, requiredElectrons: 98, image: "../css/assets/elements/Cf.png", type: "اکتینید", state: "جامد",
        isotopes: [
            { neutrons: 153, mass: 251, name: "کالیفرنیم-251" },
            { neutrons: 152, mass: 250, name: "کالیفرنیم-250" },
            { neutrons: 154, mass: 252, name: "کالیفرنیم-252" },
            { neutrons: 155, mass: 253, name: "کالیفرنیم-253" },
            { neutrons: 156, mass: 254, name: "کالیفرنیم-254" }
        ]
    },
    99: {
        name: "آینشتینیم", symbol: "Es", mass: 252, requiredNeutrons: 153, requiredElectrons: 99, image: "../css/assets/elements/Es.png", type: "اکتینید", state: "جامد",
        isotopes: [
            { neutrons: 153, mass: 252, name: "آینشتینیم-252" },
            { neutrons: 152, mass: 251, name: "آینشتینیم-251" },
            { neutrons: 154, mass: 253, name: "آینشتینیم-253" },
            { neutrons: 155, mass: 254, name: "آینشتینیم-254" },
            { neutrons: 156, mass: 255, name: "آینشتینیم-255" }
        ]
    },
    100: {
        name: "فرمیم", symbol: "Fm", mass: 257, requiredNeutrons: 157, requiredElectrons: 100, image: "../css/assets/elements/Fm.png", type: "اکتینید", state: "جامد",
        isotopes: [
            { neutrons: 157, mass: 257, name: "فرمیم-257" },
            { neutrons: 156, mass: 256, name: "فرمیم-256" },
            { neutrons: 158, mass: 258, name: "فرمیم-258" },
            { neutrons: 159, mass: 259, name: "فرمیم-259" },
            { neutrons: 160, mass: 260, name: "فرمیم-260" }
        ]
    },
    101: {
        name: "مندلیفیم", symbol: "Md", mass: 258, requiredNeutrons: 157, requiredElectrons: 101, image: "../css/assets/elements/Md.png", type: "اکتینید", state: "جامد",
        isotopes: [
            { neutrons: 157, mass: 258, name: "مندلیفیم-258" },
            { neutrons: 156, mass: 257, name: "مندلیفیم-257" },
            { neutrons: 158, mass: 259, name: "مندلیفیم-259" },
            { neutrons: 159, mass: 260, name: "مندلیفیم-260" },
            { neutrons: 160, mass: 261, name: "مندلیفیم-261" }
        ]
    },
    102: {
        name: "نوبلیم", symbol: "No", mass: 259, requiredNeutrons: 157, requiredElectrons: 102, image: "../css/assets/elements/No.png", type: "اکتینید", state: "جامد",
        isotopes: [
            { neutrons: 157, mass: 259, name: "نوبلیم-259" },
            { neutrons: 156, mass: 258, name: "نوبلیم-258" },
            { neutrons: 158, mass: 260, name: "نوبلیم-260" },
            { neutrons: 159, mass: 261, name: "نوبلیم-261" },
            { neutrons: 160, mass: 262, name: "نوبلیم-262" }
        ]
    },
    103: {
        name: "لارنسیم", symbol: "Lr", mass: 262, requiredNeutrons: 159, requiredElectrons: 103, image: "../css/assets/elements/Lr.png", type: "اکتینید", state: "جامد",
        isotopes: [
            { neutrons: 159, mass: 262, name: "لارنسیم-262" },
            { neutrons: 158, mass: 261, name: "لارنسیم-261" },
            { neutrons: 160, mass: 263, name: "لارنسیم-263" },
            { neutrons: 161, mass: 264, name: "لارنسیم-264" },
            { neutrons: 162, mass: 265, name: "لارنسیم-265" }
        ]
    },
    104: {
        name: "رادرفوردیم", symbol: "Rf", mass: 267, requiredNeutrons: 163, requiredElectrons: 104, image: "../css/assets/elements/Rf.png", type: "فلز واسطه", state: "جامد",
        isotopes: [
            { neutrons: 163, mass: 267, name: "رادرفوردیم-267" },
            { neutrons: 162, mass: 266, name: "رادرفوردیم-266" },
            { neutrons: 164, mass: 268, name: "رادرفوردیم-268" },
            { neutrons: 165, mass: 269, name: "رادرفوردیم-269" },
            { neutrons: 166, mass: 270, name: "رادرفوردیم-270" }
        ]
    },
    105: {
        name: "دوبنیم", symbol: "Db", mass: 268, requiredNeutrons: 163, requiredElectrons: 105, image: "../css/assets/elements/Db.png", type: "نامعلوم", state: "جامد",
        isotopes: [
            { neutrons: 163, mass: 268, name: "دوبنیم-268" },
            { neutrons: 162, mass: 267, name: "دوبنیم-267" },
            { neutrons: 164, mass: 269, name: "دوبنیم-269" },
            { neutrons: 165, mass: 270, name: "دوبنیم-270" },
            { neutrons: 166, mass: 271, name: "دوبنیم-271" }
        ]
    },
    106: {
        name: "سیبورگیم", symbol: "Sg", mass: 271, requiredNeutrons: 165, requiredElectrons: 106, image: "../css/assets/elements/Sg.png", type: "نامعلوم", state: "جامد",
        isotopes: [
            { neutrons: 165, mass: 271, name: "سیبورگیم-271" },
            { neutrons: 164, mass: 270, name: "سیبورگیم-270" },
            { neutrons: 166, mass: 272, name: "سیبورگیم-272" },
            { neutrons: 167, mass: 273, name: "سیبورگیم-273" },
            { neutrons: 168, mass: 274, name: "سیبورگیم-274" }
        ]
    },
    107: {
        name: "بوهریم", symbol: "Bh", mass: 270, requiredNeutrons: 163, requiredElectrons: 107, image: "../css/assets/elements/Bh.png", type: "نامعلوم", state: "جامد",
        isotopes: [
            { neutrons: 163, mass: 270, name: "بوهریم-270" },
            { neutrons: 162, mass: 269, name: "بوهریم-269" },
            { neutrons: 164, mass: 271, name: "بوهریم-271" },
            { neutrons: 165, mass: 272, name: "بوهریم-272" },
            { neutrons: 166, mass: 273, name: "بوهریم-273" }
        ]
    },
    108: {
        name: "هاسیم", symbol: "Hs", mass: 277, requiredNeutrons: 169, requiredElectrons: 108, image: "../css/assets/elements/Hs.png", type: "نامعلوم", state: "جامد",
        isotopes: [
            { neutrons: 169, mass: 277, name: "هاسیم-277" },
            { neutrons: 168, mass: 276, name: "هاسیم-276" },
            { neutrons: 170, mass: 278, name: "هاسیم-278" },
            { neutrons: 171, mass: 279, name: "هاسیم-279" },
            { neutrons: 172, mass: 280, name: "هاسیم-280" }
        ]
    },
    109: {
        name: "مایتنریم", symbol: "Mt", mass: 278, requiredNeutrons: 169, requiredElectrons: 109, image: "../css/assets/elements/Mt.png", type: "نامعلوم", state: "جامد",
        isotopes: [
            { neutrons: 169, mass: 278, name: "مایتنریم-278" },
            { neutrons: 168, mass: 277, name: "مایتنریم-277" },
            { neutrons: 170, mass: 279, name: "مایتنریم-279" },
            { neutrons: 171, mass: 280, name: "مایتنریم-280" },
            { neutrons: 172, mass: 281, name: "مایتنریم-281" }
        ]
    },
    110: {
        name: "دارمشتادیم", symbol: "Ds", mass: 281, requiredNeutrons: 171, requiredElectrons: 110, image: "../css/assets/elements/Ds.png", type: "نامعلوم", state: "جامد",
        isotopes: [
            { neutrons: 171, mass: 281, name: "دارمشتادیم-281" },
            { neutrons: 170, mass: 280, name: "دارمشتادیم-280" },
            { neutrons: 172, mass: 282, name: "دارمشتادیم-282" },
            { neutrons: 173, mass: 283, name: "دارمشتادیم-283" },
            { neutrons: 174, mass: 284, name: "دارمشتادیم-284" }
        ]
    },
    111: {
        name: "رنتگنیم", symbol: "Rg", mass: 282, requiredNeutrons: 171, requiredElectrons: 111, image: "../css/assets/elements/Rg.png", type: "نامعلوم", state: "جامد",
        isotopes: [
            { neutrons: 171, mass: 282, name: "رنتگنیم-282" },
            { neutrons: 170, mass: 281, name: "رنتگنیم-281" },
            { neutrons: 172, mass: 283, name: "رنتگنیم-283" },
            { neutrons: 173, mass: 284, name: "رنتگنیم-284" },
            { neutrons: 174, mass: 285, name: "رنتگنیم-285" }
        ]
    },
    112: {
        name: "کوپرنیکیوم", symbol: "Cn", mass: 285, requiredNeutrons: 173, requiredElectrons: 112, image: "../css/assets/elements/Cn.png", type: "نامعلوم", state: "جامد",
        isotopes: [
            { neutrons: 173, mass: 285, name: "کوپرنیکیوم-285" },
            { neutrons: 172, mass: 284, name: "کوپرنیکیوم-284" },
            { neutrons: 174, mass: 286, name: "کوپرنیکیوم-286" },
            { neutrons: 175, mass: 287, name: "کوپرنیکیوم-287" },
            { neutrons: 176, mass: 288, name: "کوپرنیکیوم-288" }
        ]
    },
    113: {
        name: "نیهونیم", symbol: "Nh", mass: 286, requiredNeutrons: 173, requiredElectrons: 113, image: "../css/assets/elements/Nh.png", type: "نامعلوم", state: "جامد",
        isotopes: [
            { neutrons: 173, mass: 286, name: "نیهونیم-286" },
            { neutrons: 172, mass: 285, name: "نیهونیم-285" },
            { neutrons: 174, mass: 287, name: "نیهونیم-287" },
            { neutrons: 175, mass: 288, name: "نیهونیم-288" },
            { neutrons: 176, mass: 289, name: "نیهونیم-289" }
        ]
    },
    114: {
        name: "فلروویم", symbol: "Fl", mass: 289, requiredNeutrons: 175, requiredElectrons: 114, image: "../css/assets/elements/Fl.png", type: "نامعلوم", state: "جامد",
        isotopes: [
            { neutrons: 175, mass: 289, name: "فلروویم-289" },
            { neutrons: 174, mass: 288, name: "فلروویم-288" },
            { neutrons: 176, mass: 290, name: "فلروویم-290" },
            { neutrons: 177, mass: 291, name: "فلروویم-291" },
            { neutrons: 178, mass: 292, name: "فلروویم-292" }
        ]
    },
    115: {
        name: "موسکوویم", symbol: "Mc", mass: 290, requiredNeutrons: 175, requiredElectrons: 115, image: "../css/assets/elements/Mc.png", type: "نامعلوم", state: "جامد",
        isotopes: [
            { neutrons: 175, mass: 290, name: "موسکوویم-290" },
            { neutrons: 174, mass: 289, name: "موسکوویم-289" },
            { neutrons: 176, mass: 291, name: "موسکوویم-291" },
            { neutrons: 177, mass: 292, name: "موسکوویم-292" },
            { neutrons: 178, mass: 293, name: "موسکوویم-293" }
        ]
    },
    116: {
        name: "لیورموریوم", symbol: "Lv", mass: 293, requiredNeutrons: 177, requiredElectrons: 116, image: "../css/assets/elements/Lv.png", type: "نامعلوم", state: "جامد",
        isotopes: [
            { neutrons: 177, mass: 293, name: "لیورموریوم-293" },
            { neutrons: 176, mass: 292, name: "لیورموریوم-292" },
            { neutrons: 178, mass: 294, name: "لیورموریوم-294" },
            { neutrons: 179, mass: 295, name: "لیورموریوم-295" },
            { neutrons: 180, mass: 296, name: "لیورموریوم-296" }
        ]
    },
    117: {
        name: "تنسین", symbol: "Ts", mass: 294, requiredNeutrons: 177, requiredElectrons: 117, image: "../css/assets/elements/Ts.png", type: "نامعلوم", state: "جامد",
        isotopes: [
            { neutrons: 177, mass: 294, name: "تنسین-294" },
            { neutrons: 176, mass: 293, name: "تنسین-293" },
            { neutrons: 178, mass: 295, name: "تنسین-295" },
            { neutrons: 179, mass: 296, name: "تنسین-296" },
            { neutrons: 180, mass: 297, name: "تنسین-297" }
        ]
    },
    118: {
        name: "اوگانسون", symbol: "Og", mass: 294, requiredNeutrons: 176, requiredElectrons: 118, image: "../css/assets/elements/Og.png", type: "نامعلوم", state: "گاز", isotopes: []
    },
}

function syncSliderAndInput(sliderId, inputId, labelId) {
    const slider = document.getElementById(sliderId);
    const input = document.getElementById(inputId);
    const label = document.getElementById(labelId);

    slider.addEventListener("input", function () {
        input.value = this.value;
        label.textContent = this.value;
        updateElement(); // فراخوانی تابع updateElement بعد از تغییر اسلایدر
    });

    input.addEventListener("input", function () {
        console.log("Input input event triggered for inputId:", inputId);

        const inputValue = parseInt(this.value);
        const sliderMin = parseInt(slider.min);
        const sliderMax = parseInt(slider.max);

        console.log("Input Value:", inputValue);
        console.log("Slider Min:", sliderMin, "Slider Max:", sliderMax);

        if (!isNaN(inputValue) && inputValue >= sliderMin && inputValue <= sliderMax) {
            console.log("Input value is within slider range");
            slider.value = inputValue;
            label.textContent = inputValue;
            console.log("Slider value updated to:", slider.value);

            updateElement(); // فراخوانی تابع updateElement بعد از تغییر اینپوت
        } else {
            console.error("Input value is OUTSIDE slider range or NaN");
            // می‌توانید اینجا پیامی به کاربر نمایش دهید اگر مقدار خارج از محدوده بود
        }
    });
}

syncSliderAndInput("proton-slider", "proton-input", "proton-count");
syncSliderAndInput("neutron-slider", "neutron-input", "neutron-count");
syncSliderAndInput("electron-slider", "electron-input", "electron-count");

const protonSlider = document.getElementById("proton-slider");
const neutronSlider = document.getElementById("neutron-slider");
const electronSlider = document.getElementById("electron-slider");
const searchBox = document.getElementById("search-box");

function updateElement() {
    console.log("updateElement function called"); // برای اطمینان از فراخوانی تابع

    const protons = parseInt(protonSlider.value);
    const neutrons = parseInt(neutronSlider.value);
    const electrons = parseInt(electronSlider.value);

    console.log(`Protons: ${protons}, Neutrons: ${neutrons}, Electrons: ${electrons}`); // نمایش مقادیر ذرات

    const elementData = elements[protons]; // **بسیار مهم: بررسی کنید که elements تعریف شده و data دارد**
    console.log("elementData (before check):", elementData); // نمایش داده‌های عنصر قبل از بررسی وجود

    let elementToDisplay = null;

    if (elementData) {
        console.log("elementData FOUND for protons:", protons); // تایید اینکه elementData پیدا شد
        if (neutrons === elementData.requiredNeutrons && electrons === elementData.requiredElectrons) {
            // شرط "تعداد درست" ذرات برای عنصر اصلی برآورده شد
            elementToDisplay = elementData;
        } else if (elementData.isotopes && elementData.isotopes.length > 0) {
            // بررسی ایزوتوپ‌ها
            for (const isotope of elementData.isotopes) {
                if (neutrons === isotope.neutrons && electrons === elementData.requiredElectrons) { // **بررسی تعداد الکترون‌ها برای ایزوتوپ هم اضافه شد**
                    elementToDisplay = isotope;
                    break;
                }
            }
        }
    } else {
        console.log("elementData NOT FOUND for protons:", protons); // اطلاع اگر elementData پیدا نشد
    }

    console.log("elementToDisplay (before display):", elementToDisplay); // نمایش عنصر/ایزوتوپ قبل از نمایش

    if (elementToDisplay) {
        // اگر عنصر اصلی یا ایزوتوپ برای نمایش پیدا شد
        document.getElementById("atomic-number").innerText = protons;
        document.getElementById("isotopic-mass").innerText = (protons + neutrons).toFixed(3);
        document.getElementById("atomic-mass").innerText = elementData.mass;
        document.getElementById("element-name").innerText = `${elementToDisplay.name}`;
        document.getElementById("element-image").src = elementData.image;
        document.getElementById("chemical-symbol").innerText = elementData.symbol;
        document.getElementById("element-type").innerText = elementData.type;
        document.getElementById("Physical-state").innerText = elementData.state;
    } else {
        // شرط "تعداد درست" ذرات برآورده نشد و ایزوتوپ مطابق هم پیدا نشد، عنصر نامشخص را نمایش بده
        document.getElementById("atomic-number").innerText = "-";
        document.getElementById("isotopic-mass").innerText = "-";
        document.getElementById("atomic-mass").innerText = "-";
        document.getElementById("element-name").innerText = "عنصر نامشخص (?)";
        document.getElementById("element-image").src = "../css/assets/elements/question-mark.png";
        document.getElementById("chemical-symbol").innerText = "?";
        document.getElementById("element-type").innerText = "-";
        document.getElementById("Physical-state").innerText = "-";
    }

    drawAtomModel(protons, neutrons, electrons);
}

function drawAtomModel(protons, neutrons, electrons) {
    const atomContainer = document.getElementById("atom-model");
    atomContainer.innerHTML = "";

    const atomSize = atomContainer.clientWidth;
    const center = atomSize / 2;
    const nucleusRadius = atomSize * 0.05;

    // ایجاد لایه‌های مداری
    for (let i = 0; i < 5; i++) {
        const orbitLayer = document.createElement("div");
        orbitLayer.className = "orbit-layer";
        atomContainer.appendChild(orbitLayer);
    }

    // تولید پروتون‌ها
    for (let i = 0; i < protons; i++) {
        const angle = (i / protons) * 2 * Math.PI;
        const distance = nucleusRadius * Math.sqrt(Math.random());
        const x = center + Math.cos(angle) * distance - (atomSize * 0.012);
        const y = center + Math.sin(angle) * distance - (atomSize * 0.012);

        const proton = document.createElement("div");
        proton.className = "proton";
        proton.style.left = `${x}px`;
        proton.style.top = `${y}px`;
        atomContainer.appendChild(proton);
    }

    // تولید نوترون‌ها
    for (let i = 0; i < neutrons; i++) {
        const angle = (i / neutrons) * 2 * Math.PI;
        const distance = nucleusRadius * Math.sqrt(Math.random());
        const x = center + Math.cos(angle) * distance - (atomSize * 0.012);
        const y = center + Math.sin(angle) * distance - (atomSize * 0.012);

        const neutron = document.createElement("div");
        neutron.className = "neutron";
        neutron.style.left = `${x}px`;
        neutron.style.top = `${y}px`;
        atomContainer.appendChild(neutron);
    }

    // محاسبه تعداد الکترون‌ها در هر لایه
    const maxShells = [2, 8, 8, 18, 18, 32, 32];
    let remainingElectrons = electrons;
    const electronsPerShell = [];

    for (let shell = 0; shell < maxShells.length; shell++) {
        if (remainingElectrons <= 0) break;
        const maxInShell = maxShells[shell];
        const electronsInShell = Math.min(maxInShell, remainingElectrons);
        electronsPerShell.push(electronsInShell);
        remainingElectrons -= electronsInShell;
    }

    // رسم مدارهای الکترونی
    electronsPerShell.forEach((electronsInShell, shellIndex) => {
        if (electronsInShell === 0) return;
        const orbitRadius = (atomSize * 0.078) + (shellIndex * (atomSize * 0.068));

        // ایجاد یک کانتینر برای مدار چرخشی
        const orbitContainer = document.createElement("div");
        orbitContainer.className = "orbit-container";
        orbitContainer.style.width = `${orbitRadius * 2}px`;
        orbitContainer.style.height = `${orbitRadius * 2}px`;
        orbitContainer.style.position = "absolute";
        orbitContainer.style.top = `${center - orbitRadius}px`;
        orbitContainer.style.left = `${center - orbitRadius}px`;

        for (let i = 0; i < electronsInShell; i++) {
            const angle = (i / electronsInShell) * 2 * Math.PI;
            const x = orbitRadius + Math.cos(angle) * orbitRadius - (atomSize * 0.012);
            const y = orbitRadius + Math.sin(angle) * orbitRadius - (atomSize * 0.012);

            const electron = document.createElement("div");
            electron.className = "electron";
            electron.style.left = `${x}px`;
            electron.style.top = `${y}px`;

            orbitContainer.appendChild(electron);
        }

        atomContainer.appendChild(orbitContainer);
    });
}

function searchElement() {
    const query = searchBox.value.trim().toLowerCase();

    for (const [atomicNumber, element] of Object.entries(elements)) {
        const elementNameLower = element.name.toLowerCase();
        const elementSymbolLower = element.symbol.toLowerCase();

        if (
            atomicNumber === query ||
            elementSymbolLower === query ||  // بررسی دقیق نماد شیمیایی
            elementNameLower.startsWith(query)
        ) {
            protonSlider.value = atomicNumber;
            neutronSlider.value = element.requiredNeutrons;
            electronSlider.value = element.requiredElectrons;

            document.getElementById("proton-input").value = atomicNumber;
            document.getElementById("neutron-input").value = element.requiredNeutrons;
            document.getElementById("electron-input").value = element.requiredElectrons;

            updateElement();
            break;
        }
    }
}

protonSlider.addEventListener("input", updateElement);
neutronSlider.addEventListener("input", updateElement);
electronSlider.addEventListener("input", updateElement);
searchBox.addEventListener("input", searchElement);

updateElement();

function applyTheme(theme) {
    const isLightTheme = theme === "light";
    document.body.classList.toggle("light-theme", isLightTheme);

    const color = isLightTheme ? "#e2e2e2" : "#0f172a"; // رنگ برای حالت روز و شب
    document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
    document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", theme === "dark" ? "black-translucent" : "default");
    document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content", color);
    document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", color);
}

// اجرا هنگام بارگذاری صفحه برای اطمینان از اینکه Title Bar همیشه هماهنگ است
function loadTheme() {
    let savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);
}

// اجرا هنگام بارگذاری هر صفحه
document.addEventListener("DOMContentLoaded", loadTheme);
window.addEventListener("pageshow", function (event) {
    if (event.persisted) { // اگر صفحه از کش لود شده بود، دوباره تم را اعمال کن
        loadTheme();
    }
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../../sw.js')
        .then(() => console.log("Service Worker ثبت شد."))
        .catch(err => console.error("خطا در ثبت Service Worker:", err));
}
