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
function goBack() {
    window.location.href = "../";
}

document.getElementById("search-box").addEventListener("blur", function () {
    this.value = "";
});

const elements = {
    1: {
        "name": "Hydrogen",
        "symbol": "H",
        "mass": 1.008,
        "requiredNeutrons": 0,
        "requiredElectrons": 1,
        "image": "css/assets/elements/H.png",
        "type": "Nonmetal",
        "state": "Gas",
        "isotopes": [
            { "neutrons": 0, "mass": 1, "name": "Hydrogen-1" },
            { "neutrons": 1, "mass": 2, "name": "Deuterium" },
            { "neutrons": 2, "mass": 3, "name": "Tritium" },
            { "neutrons": 3, "mass": 4, "name": "Hydrogen-4" },
            { "neutrons": 4, "mass": 5, "name": "Hydrogen-5" },
            { "neutrons": 5, "mass": 6, "name": "Hydrogen-6" },
            { "neutrons": 6, "mass": 7, "name": "Hydrogen-7" }
        ]
    },
    2: {
        "name": "Helium",
        "symbol": "He",
        "mass": 4.0026,
        "requiredNeutrons": 2,
        "requiredElectrons": 2,
        "image": "css/assets/elements/He.png",
        "type": "Noble Gas",
        "state": "Gas",
        "isotopes": [
            { "neutrons": 2, "mass": 4, "name": "Helium-4" },
            { "neutrons": 1, "mass": 3, "name": "Helium-3" },
            { "neutrons": 3, "mass": 5, "name": "Helium-5" },
            { "neutrons": 4, "mass": 6, "name": "Helium-6" },
            { "neutrons": 5, "mass": 7, "name": "Helium-7" },
            { "neutrons": 6, "mass": 8, "name": "Helium-8" }
        ]
    },
    3: {
        "name": "Lithium",
        "symbol": "Li",
        "mass": 6.94,
        "requiredNeutrons": 4,
        "requiredElectrons": 3,
        "image": "css/assets/elements/Li.png",
        "type": "Alkali Metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 3, "mass": 6, "name": "Lithium-6" },
            { "neutrons": 4, "mass": 7, "name": "Lithium-7" },
            { "neutrons": 5, "mass": 8, "name": "Lithium-8" },
            { "neutrons": 6, "mass": 9, "name": "Lithium-9" },
            { "neutrons": 7, "mass": 10, "name": "Lithium-10" }
        ]
    },
    4: {
        "name": "Beryllium",
        "symbol": "Be",
        "mass": 9.0122,
        "requiredNeutrons": 5,
        "requiredElectrons": 4,
        "image": "css/assets/elements/Be.png",
        "type": "Alkaline Earth Metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 5, "mass": 9, "name": "Beryllium-9" },
            { "neutrons": 6, "mass": 10, "name": "Beryllium-10" },
            { "neutrons": 7, "mass": 11, "name": "Beryllium-11" },
            { "neutrons": 8, "mass": 12, "name": "Beryllium-12" },
            { "neutrons": 9, "mass": 13, "name": "Beryllium-13" },
            { "neutrons": 10, "mass": 14, "name": "Beryllium-14" }
        ]
    },
    5: {
        "name": "Boron",
        "symbol": "B",
        "mass": 10.81,
        "requiredNeutrons": 6,
        "requiredElectrons": 5,
        "image": "css/assets/elements/B.png",
        "type": "Metalloid",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 5, "mass": 10, "name": "Boron-10" },
            { "neutrons": 6, "mass": 11, "name": "Boron-11" },
            { "neutrons": 7, "mass": 12, "name": "Boron-12" },
            { "neutrons": 8, "mass": 13, "name": "Boron-13" },
            { "neutrons": 9, "mass": 14, "name": "Boron-14" },
            { "neutrons": 10, "mass": 15, "name": "Boron-15" },
            { "neutrons": 11, "mass": 16, "name": "Boron-16" },
            { "neutrons": 12, "mass": 17, "name": "Boron-17" }
        ]
    },
    6: {
        "name": "Carbon",
        "symbol": "C",
        "mass": 12.011,
        "requiredNeutrons": 6,
        "requiredElectrons": 6,
        "image": "css/assets/elements/C.png",
        "type": "Nonmetal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 6, "mass": 12, "name": "Carbon-12" },
            { "neutrons": 7, "mass": 13, "name": "Carbon-13" },
            { "neutrons": 8, "mass": 14, "name": "Carbon-14" },
            { "neutrons": 9, "mass": 15, "name": "Carbon-15" },
            { "neutrons": 10, "mass": 16, "name": "Carbon-16" }
        ]
    },
    7: {
        "name": "Nitrogen",
        "symbol": "N",
        "mass": 14.007,
        "requiredNeutrons": 7,
        "requiredElectrons": 7,
        "image": "css/assets/elements/N.png",
        "type": "Nonmetal",
        "state": "Gas",
        "isotopes": [
            { "neutrons": 7, "mass": 14, "name": "Nitrogen-14" },
            { "neutrons": 8, "mass": 15, "name": "Nitrogen-15" },
            { "neutrons": 9, "mass": 16, "name": "Nitrogen-16" },
            { "neutrons": 10, "mass": 17, "name": "Nitrogen-17" },
            { "neutrons": 11, "mass": 18, "name": "Nitrogen-18" },
            { "neutrons": 12, "mass": 19, "name": "Nitrogen-19" },
            { "neutrons": 13, "mass": 20, "name": "Nitrogen-20" },
            { "neutrons": 14, "mass": 21, "name": "Nitrogen-21" },
            { "neutrons": 15, "mass": 22, "name": "Nitrogen-22" },
            { "neutrons": 16, "mass": 23, "name": "Nitrogen-23" },
            { "neutrons": 17, "mass": 24, "name": "Nitrogen-24" }
        ]
    },
    8: {
        "name": "Oxygen",
        "symbol": "O",
        "mass": 15.999,
        "requiredNeutrons": 8,
        "requiredElectrons": 8,
        "image": "css/assets/elements/O.png",
        "type": "Nonmetal",
        "state": "Gas",
        "isotopes": [
            { "neutrons": 8, "mass": 16, "name": "Oxygen-16" },
            { "neutrons": 9, "mass": 17, "name": "Oxygen-17" },
            { "neutrons": 10, "mass": 18, "name": "Oxygen-18" },
            { "neutrons": 11, "mass": 19, "name": "Oxygen-19" },
            { "neutrons": 12, "mass": 20, "name": "Oxygen-20" },
            { "neutrons": 13, "mass": 21, "name": "Oxygen-21" },
            { "neutrons": 14, "mass": 22, "name": "Oxygen-22" },
            { "neutrons": 15, "mass": 23, "name": "Oxygen-23" },
            { "neutrons": 16, "mass": 24, "name": "Oxygen-24" }
        ]
    },
    9: {
        "name": "Fluorine",
        "symbol": "F",
        "mass": 18.998,
        "requiredNeutrons": 10,
        "requiredElectrons": 9,
        "image": "css/assets/elements/F.png",
        "type": "Halogen",
        "state": "Gas",
        "isotopes": [
            { "neutrons": 10, "mass": 19, "name": "Fluorine-19" },
            { "neutrons": 9, "mass": 18, "name": "Fluorine-18" },
            { "neutrons": 8, "mass": 17, "name": "Fluorine-17" },
            { "neutrons": 7, "mass": 16, "name": "Fluorine-16" },
            { "neutrons": 6, "mass": 15, "name": "Fluorine-15" },
            { "neutrons": 5, "mass": 14, "name": "Fluorine-14" },
            { "neutrons": 4, "mass": 13, "name": "Fluorine-13" }
        ]
    },
    10: {
        "name": "Neon",
        "symbol": "Ne",
        "mass": 20.180,
        "requiredNeutrons": 10,
        "requiredElectrons": 10,
        "image": "css/assets/elements/Ne.png",
        "type": "Noble Gas",
        "state": "Gas",
        "isotopes": [
            { "neutrons": 10, "mass": 20, "name": "Neon-20" },
            { "neutrons": 11, "mass": 21, "name": "Neon-21" },
            { "neutrons": 12, "mass": 22, "name": "Neon-22" },
            { "neutrons": 13, "mass": 23, "name": "Neon-23" },
            { "neutrons": 14, "mass": 24, "name": "Neon-24" },
            { "neutrons": 15, "mass": 25, "name": "Neon-25" },
            { "neutrons": 16, "mass": 26, "name": "Neon-26" },
            { "neutrons": 17, "mass": 27, "name": "Neon-27" },
            { "neutrons": 18, "mass": 28, "name": "Neon-28" },
            { "neutrons": 19, "mass": 29, "name": "Neon-29" },
            { "neutrons": 20, "mass": 30, "name": "Neon-30" }
        ]
    },
    11: {
        "name": "Sodium",
        "symbol": "Na",
        "mass": 22.990,
        "requiredNeutrons": 12,
        "requiredElectrons": 11,
        "image": "css/assets/elements/Na.png",
        "type": "Alkali Metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 12, "mass": 23, "name": "Sodium-23" },
            { "neutrons": 11, "mass": 22, "name": "Sodium-22" },
            { "neutrons": 13, "mass": 24, "name": "Sodium-24" },
            { "neutrons": 14, "mass": 25, "name": "Sodium-25" },
            { "neutrons": 15, "mass": 26, "name": "Sodium-26" },
            { "neutrons": 16, "mass": 27, "name": "Sodium-27" },
            { "neutrons": 17, "mass": 28, "name": "Sodium-28" },
            { "neutrons": 18, "mass": 29, "name": "Sodium-29" },
            { "neutrons": 19, "mass": 30, "name": "Sodium-30" }
        ]
    },
    12: {
        "name": "Magnesium",
        "symbol": "Mg",
        "mass": 24.305,
        "requiredNeutrons": 12,
        "requiredElectrons": 12,
        "image": "css/assets/elements/Mg.png",
        "type": "Alkaline Earth Metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 12, "mass": 24, "name": "Magnesium-24" },
            { "neutrons": 13, "mass": 25, "name": "Magnesium-25" },
            { "neutrons": 14, "mass": 26, "name": "Magnesium-26" },
            { "neutrons": 15, "mass": 27, "name": "Magnesium-27" },
            { "neutrons": 16, "mass": 28, "name": "Magnesium-28" },
            { "neutrons": 17, "mass": 29, "name": "Magnesium-29" },
            { "neutrons": 18, "mass": 30, "name": "Magnesium-30" }
        ]
    },
    13: {
        "name": "Aluminum",
        "symbol": "Al",
        "mass": 26.982,
        "requiredNeutrons": 14,
        "requiredElectrons": 13,
        "image": "css/assets/elements/Al.png",
        "type": "Metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 14, "mass": 27, "name": "Aluminum-27" },
            { "neutrons": 13, "mass": 26, "name": "Aluminum-26" },
            { "neutrons": 15, "mass": 28, "name": "Aluminum-28" },
            { "neutrons": 16, "mass": 29, "name": "Aluminum-29" },
            { "neutrons": 17, "mass": 30, "name": "Aluminum-30" },
            { "neutrons": 18, "mass": 31, "name": "Aluminum-31" },
            { "neutrons": 19, "mass": 32, "name": "Aluminum-32" }
        ]
    },
    14: {
        "name": "Silicon",
        "symbol": "Si",
        "mass": 28.085,
        "requiredNeutrons": 14,
        "requiredElectrons": 14,
        "image": "css/assets/elements/Si.png",
        "type": "Metalloid",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 14, "mass": 28, "name": "Silicon-28" },
            { "neutrons": 15, "mass": 29, "name": "Silicon-29" },
            { "neutrons": 16, "mass": 30, "name": "Silicon-30" },
            { "neutrons": 17, "mass": 31, "name": "Silicon-31" },
            { "neutrons": 18, "mass": 32, "name": "Silicon-32" },
            { "neutrons": 19, "mass": 33, "name": "Silicon-33" },
            { "neutrons": 20, "mass": 34, "name": "Silicon-34" }
        ]
    },
    15: {
        "name": "Phosphorus",
        "symbol": "P",
        "mass": 30.974,
        "requiredNeutrons": 16,
        "requiredElectrons": 15,
        "image": "css/assets/elements/P.png",
        "type": "Nonmetal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 16, "mass": 31, "name": "Phosphorus-31" },
            { "neutrons": 15, "mass": 30, "name": "Phosphorus-30" },
            { "neutrons": 17, "mass": 32, "name": "Phosphorus-32" },
            { "neutrons": 18, "mass": 33, "name": "Phosphorus-33" },
            { "neutrons": 19, "mass": 34, "name": "Phosphorus-34" },
            { "neutrons": 20, "mass": 35, "name": "Phosphorus-35" },
            { "neutrons": 21, "mass": 36, "name": "Phosphorus-36" }
        ]
    },
    16: {
        "name": "Sulfur",
        "symbol": "S",
        "mass": 32.06,
        "requiredNeutrons": 16,
        "requiredElectrons": 16,
        "image": "css/assets/elements/S.png",
        "type": "Nonmetal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 16, "mass": 32, "name": "Sulfur-32" },
            { "neutrons": 17, "mass": 33, "name": "Sulfur-33" },
            { "neutrons": 18, "mass": 34, "name": "Sulfur-34" },
            { "neutrons": 19, "mass": 35, "name": "Sulfur-35" },
            { "neutrons": 20, "mass": 36, "name": "Sulfur-36" },
            { "neutrons": 21, "mass": 37, "name": "Sulfur-37" },
            { "neutrons": 22, "mass": 38, "name": "Sulfur-38" }
        ]
    },
    17: {
        "name": "Chlorine",
        "symbol": "Cl",
        "mass": 35.45,
        "requiredNeutrons": 18,
        "requiredElectrons": 17,
        "image": "css/assets/elements/Cl.png",
        "type": "Halogen",
        "state": "Gas",
        "isotopes": [
            { "neutrons": 18, "mass": 35, "name": "Chlorine-35" },
            { "neutrons": 20, "mass": 37, "name": "Chlorine-37" },
            { "neutrons": 19, "mass": 36, "name": "Chlorine-36" },
            { "neutrons": 21, "mass": 38, "name": "Chlorine-38" },
            { "neutrons": 22, "mass": 39, "name": "Chlorine-39" },
            { "neutrons": 23, "mass": 40, "name": "Chlorine-40" }
        ]
    },
    18: {
        "name": "Argon",
        "symbol": "Ar",
        "mass": 39.948,
        "requiredNeutrons": 22,
        "requiredElectrons": 18,
        "image": "css/assets/elements/Ar.png",
        "type": "Noble gas",
        "state": "Gas",
        "isotopes": [
            { "neutrons": 22, "mass": 40, "name": "Argon-40" },
            { "neutrons": 20, "mass": 38, "name": "Argon-38" },
            { "neutrons": 21, "mass": 39, "name": "Argon-39" },
            { "neutrons": 23, "mass": 41, "name": "Argon-41" },
            { "neutrons": 24, "mass": 42, "name": "Argon-42" },
            { "neutrons": 25, "mass": 43, "name": "Argon-43" }
        ]
    },
    19: {
        "name": "Potassium",
        "symbol": "K",
        "mass": 39.098,
        "requiredNeutrons": 20,
        "requiredElectrons": 19,
        "image": "css/assets/elements/K.png",
        "type": "Alkali metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 20, "mass": 39, "name": "Potassium-39" },
            { "neutrons": 21, "mass": 40, "name": "Potassium-40" },
            { "neutrons": 22, "mass": 41, "name": "Potassium-41" },
            { "neutrons": 23, "mass": 42, "name": "Potassium-42" },
            { "neutrons": 24, "mass": 43, "name": "Potassium-43" },
            { "neutrons": 25, "mass": 44, "name": "Potassium-44" }
        ]
    },
    20: {
        "name": "Calcium",
        "symbol": "Ca",
        "mass": 40.078,
        "requiredNeutrons": 20,
        "requiredElectrons": 20,
        "image": "css/assets/elements/Ca.png",
        "type": "Alkaline earth metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 20, "mass": 40, "name": "Calcium-40" },
            { "neutrons": 21, "mass": 41, "name": "Calcium-41" },
            { "neutrons": 22, "mass": 42, "name": "Calcium-42" },
            { "neutrons": 23, "mass": 43, "name": "Calcium-43" },
            { "neutrons": 24, "mass": 44, "name": "Calcium-44" },
            { "neutrons": 25, "mass": 45, "name": "Calcium-45" },
            { "neutrons": 26, "mass": 46, "name": "Calcium-46" }
        ]
    },
    21: {
        "name": "Scandium",
        "symbol": "Sc",
        "mass": 44.956,
        "requiredNeutrons": 24,
        "requiredElectrons": 21,
        "image": "css/assets/elements/Sc.png",
        "type": "Transition metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 24, "mass": 45, "name": "Scandium-45" },
            { "neutrons": 23, "mass": 44, "name": "Scandium-44" },
            { "neutrons": 25, "mass": 46, "name": "Scandium-46" },
            { "neutrons": 26, "mass": 47, "name": "Scandium-47" },
            { "neutrons": 27, "mass": 48, "name": "Scandium-48" },
            { "neutrons": 28, "mass": 49, "name": "Scandium-49" }
        ]
    },
    22: {
        "name": "Titanium",
        "symbol": "Ti",
        "mass": 47.867,
        "requiredNeutrons": 26,
        "requiredElectrons": 22,
        "image": "css/assets/elements/Ti.png",
        "type": "Transition metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 26, "mass": 48, "name": "Titanium-48" },
            { "neutrons": 25, "mass": 47, "name": "Titanium-47" },
            { "neutrons": 27, "mass": 49, "name": "Titanium-49" },
            { "neutrons": 28, "mass": 50, "name": "Titanium-50" },
            { "neutrons": 29, "mass": 51, "name": "Titanium-51" },
            { "neutrons": 30, "mass": 52, "name": "Titanium-52" }
        ]
    },
    23: {
        "name": "Vanadium",
        "symbol": "V",
        "mass": 50.942,
        "requiredNeutrons": 28,
        "requiredElectrons": 23,
        "image": "css/assets/elements/V.png",
        "type": "Transition metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 28, "mass": 51, "name": "Vanadium-51" },
            { "neutrons": 27, "mass": 50, "name": "Vanadium-50" },
            { "neutrons": 29, "mass": 52, "name": "Vanadium-52" },
            { "neutrons": 30, "mass": 53, "name": "Vanadium-53" },
            { "neutrons": 31, "mass": 54, "name": "Vanadium-54" },
            { "neutrons": 32, "mass": 55, "name": "Vanadium-55" }
        ]
    },
    24: {
        "name": "Chromium",
        "symbol": "Cr",
        "mass": 51.996,
        "requiredNeutrons": 28,
        "requiredElectrons": 24,
        "image": "css/assets/elements/Cr.png",
        "type": "Transition metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 28, "mass": 52, "name": "Chromium-52" },
            { "neutrons": 27, "mass": 51, "name": "Chromium-51" },
            { "neutrons": 29, "mass": 53, "name": "Chromium-53" },
            { "neutrons": 30, "mass": 54, "name": "Chromium-54" },
            { "neutrons": 31, "mass": 55, "name": "Chromium-55" },
            { "neutrons": 32, "mass": 56, "name": "Chromium-56" }
        ]
    },
    25: {
        "name": "Manganese",
        "symbol": "Mn",
        "mass": 54.938,
        "requiredNeutrons": 30,
        "requiredElectrons": 25,
        "image": "css/assets/elements/Mn.png",
        "type": "Transition metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 30, "mass": 55, "name": "Manganese-55" },
            { "neutrons": 29, "mass": 54, "name": "Manganese-54" },
            { "neutrons": 31, "mass": 56, "name": "Manganese-56" },
            { "neutrons": 32, "mass": 57, "name": "Manganese-57" },
            { "neutrons": 33, "mass": 58, "name": "Manganese-58" },
            { "neutrons": 34, "mass": 59, "name": "Manganese-59" }
        ]
    },
    26: {
        name: "Iron", symbol: "Fe", mass: 55.845, requiredNeutrons: 30, requiredElectrons: 26, image: "css/assets/elements/Fe.png", type: "transition metal", state: "solid",
        isotopes: [
            { neutrons: 28, mass: 54, name: "Iron-54" },
            { neutrons: 30, mass: 56, name: "Iron-56" },
            { neutrons: 31, mass: 57, name: "Iron-57" },
            { neutrons: 32, mass: 58, name: "Iron-58" },
            { neutrons: 33, mass: 59, name: "Iron-59" },
            { neutrons: 34, mass: 60, name: "Iron-60" }
        ]
    },
    27: {
        name: "Cobalt", symbol: "Co", mass: 58.933, requiredNeutrons: 32, requiredElectrons: 27, image: "css/assets/elements/Co.png", type: "transition metal", state: "solid",
        isotopes: [
            { neutrons: 32, mass: 59, name: "Cobalt-59" },
            { neutrons: 33, mass: 60, name: "Cobalt-60" },
            { neutrons: 34, mass: 61, name: "Cobalt-61" },
            { neutrons: 35, mass: 62, name: "Cobalt-62" },
            { neutrons: 36, mass: 63, name: "Cobalt-63" },
            { neutrons: 37, mass: 64, name: "Cobalt-64" }
        ]
    },
    28: {
        name: "Nickel", symbol: "Ni", mass: 58.693, requiredNeutrons: 31, requiredElectrons: 28, image: "css/assets/elements/Ni.png", type: "transition metal", state: "solid",
        isotopes: [
            { neutrons: 30, mass: 58, name: "Nickel-58" },
            { neutrons: 31, mass: 59, name: "Nickel-59" },
            { neutrons: 32, mass: 60, name: "Nickel-60" },
            { neutrons: 33, mass: 61, name: "Nickel-61" },
            { neutrons: 34, mass: 62, name: "Nickel-62" },
            { neutrons: 35, mass: 63, name: "Nickel-63" }
        ]
    },
    29: {
        name: "Copper", symbol: "Cu", mass: 63.546, requiredNeutrons: 34, requiredElectrons: 29, image: "css/assets/elements/Cu.png", type: "transition metal", state: "solid",
        isotopes: [
            { neutrons: 34, mass: 63, name: "Copper-63" },
            { neutrons: 35, mass: 64, name: "Copper-64" },
            { neutrons: 36, mass: 65, name: "Copper-65" },
            { neutrons: 37, mass: 66, name: "Copper-66" },
            { neutrons: 38, mass: 67, name: "Copper-67" },
            { neutrons: 39, mass: 68, name: "Copper-68" }
        ]
    },
    30: {
        name: "Zinc", symbol: "Zn", mass: 65.38, requiredNeutrons: 35, requiredElectrons: 30, image: "css/assets/elements/Zn.png", type: "transition metal", state: "solid",
        isotopes: [
            { neutrons: 34, mass: 64, name: "Zinc-64" },
            { neutrons: 35, mass: 65, name: "Zinc-65" },
            { neutrons: 36, mass: 66, name: "Zinc-66" },
            { neutrons: 37, mass: 67, name: "Zinc-67" },
            { neutrons: 38, mass: 68, name: "Zinc-68" },
            { neutrons: 39, mass: 69, name: "Zinc-69" }
        ]
    },
    31: {
        name: "Gallium", symbol: "Ga", mass: 69.723, requiredNeutrons: 39, requiredElectrons: 31, image: "css/assets/elements/Ga.png", type: "metal", state: "solid",
        isotopes: [
            { neutrons: 38, mass: 69, name: "Gallium-69" },
            { neutrons: 39, mass: 70, name: "Gallium-70" },
            { neutrons: 40, mass: 71, name: "Gallium-71" },
            { neutrons: 41, mass: 72, name: "Gallium-72" },
            { neutrons: 42, mass: 73, name: "Gallium-73" },
            { neutrons: 43, mass: 74, name: "Gallium-74" }
        ]
    },
    32: {
        name: "Germanium", symbol: "Ge", mass: 72.63, requiredNeutrons: 41, requiredElectrons: 32, image: "css/assets/elements/Ge.png", type: "metalloid", state: "solid",
        isotopes: [
            { neutrons: 40, mass: 72, name: "Germanium-72" },
            { neutrons: 41, mass: 73, name: "Germanium-73" },
            { neutrons: 42, mass: 74, name: "Germanium-74" },
            { neutrons: 43, mass: 75, name: "Germanium-75" },
            { neutrons: 44, mass: 76, name: "Germanium-76" },
            { neutrons: 45, mass: 77, name: "Germanium-77" }
        ]
    },
    33: {
        name: "Arsenic", symbol: "As", mass: 74.922, requiredNeutrons: 42, requiredElectrons: 33, image: "css/assets/elements/As.png", type: "metalloid", state: "solid",
        isotopes: [
            { neutrons: 42, mass: 75, name: "Arsenic-75" },
            { neutrons: 43, mass: 76, name: "Arsenic-76" },
            { neutrons: 44, mass: 77, name: "Arsenic-77" },
            { neutrons: 45, mass: 78, name: "Arsenic-78" },
            { neutrons: 46, mass: 79, name: "Arsenic-79" },
            { neutrons: 47, mass: 80, name: "Arsenic-80" }
        ]
    },
    34: {
        name: "Selenium", symbol: "Se", mass: 78.971, requiredNeutrons: 45, requiredElectrons: 34, image: "css/assets/elements/Se.png", type: "nonmetal", state: "solid",
        isotopes: [
            { neutrons: 44, mass: 78, name: "Selenium-78" },
            { neutrons: 45, mass: 79, name: "Selenium-79" },
            { neutrons: 46, mass: 80, name: "Selenium-80" },
            { neutrons: 47, mass: 81, name: "Selenium-81" },
            { neutrons: 48, mass: 82, name: "Selenium-82" },
            { neutrons: 49, mass: 83, name: "Selenium-83" }
        ]
    },
    35: {
        name: "Bromine", symbol: "Br", mass: 79.904, requiredNeutrons: 45, requiredElectrons: 35, image: "css/assets/elements/Br.png", type: "halogen", state: "liquid",
        isotopes: [
            { neutrons: 44, mass: 79, name: "Bromine-79" },
            { neutrons: 45, mass: 80, name: "Bromine-80" },
            { neutrons: 46, mass: 81, name: "Bromine-81" },
            { neutrons: 47, mass: 82, name: "Bromine-82" },
            { neutrons: 48, mass: 83, name: "Bromine-83" },
            { neutrons: 49, mass: 84, name: "Bromine-84" }
        ]
    },
    36: {
        name: "Krypton", symbol: "Kr", mass: 83.798, requiredNeutrons: 48, requiredElectrons: 36, image: "css/assets/elements/Kr.png", type: "Noble gas", state: "Gas",
        isotopes: [
            { neutrons: 48, mass: 84, name: "Krypton-84" },
            { neutrons: 47, mass: 83, name: "Krypton-83" },
            { neutrons: 46, mass: 82, name: "Krypton-82" },
            { neutrons: 49, mass: 85, name: "Krypton-85" },
            { neutrons: 50, mass: 86, name: "Krypton-86" }
        ]
    },
    37: {
        name: "Rubidium", symbol: "Rb", mass: 85.468, requiredNeutrons: 48, requiredElectrons: 37, image: "css/assets/elements/Rb.png", type: "Alkali metal", state: "Solid",
        isotopes: [
            { neutrons: 48, mass: 85, name: "Rubidium-85" },
            { neutrons: 50, mass: 87, name: "Rubidium-87" }
        ]
    },
    38: {
        name: "Strontium", symbol: "Sr", mass: 87.62, requiredNeutrons: 50, requiredElectrons: 38, image: "css/assets/elements/Sr.png", type: "Alkaline earth metal", state: "Solid",
        isotopes: [
            { neutrons: 50, mass: 88, name: "Strontium-88" },
            { neutrons: 48, mass: 86, name: "Strontium-86" },
            { neutrons: 49, mass: 87, name: "Strontium-87" },
            { neutrons: 51, mass: 89, name: "Strontium-89" },
            { neutrons: 52, mass: 90, name: "Strontium-90" }
        ]
    },
    39: {
        name: "Yttrium", symbol: "Y", mass: 88.906, requiredNeutrons: 50, requiredElectrons: 39, image: "css/assets/elements/Y.png", type: "Transition metal", state: "Solid",
        isotopes: [
            { neutrons: 50, mass: 89, name: "Yttrium-89" },
            { neutrons: 51, mass: 90, name: "Yttrium-90" },
            { neutrons: 52, mass: 91, name: "Yttrium-91" },
            { neutrons: 53, mass: 92, name: "Yttrium-92" },
            { neutrons: 54, mass: 93, name: "Yttrium-93" }
        ]
    },
    40: {
        name: "Zirconium", symbol: "Zr", mass: 91.224, requiredNeutrons: 51, requiredElectrons: 40, image: "css/assets/elements/Zr.png", type: "Transition metal", state: "Solid",
        isotopes: [
            { neutrons: 51, mass: 91, name: "Zirconium-91" },
            { neutrons: 50, mass: 90, name: "Zirconium-90" },
            { neutrons: 52, mass: 92, name: "Zirconium-92" },
            { neutrons: 53, mass: 93, name: "Zirconium-93" },
            { neutrons: 54, mass: 94, name: "Zirconium-94" },
            { neutrons: 55, mass: 95, name: "Zirconium-95" }
        ]
    },
    41: {
        name: "Niobium", symbol: "Nb", mass: 92.906, requiredNeutrons: 52, requiredElectrons: 41, image: "css/assets/elements/Nb.png", type: "Transition metal", state: "Solid",
        isotopes: [
            { neutrons: 52, mass: 93, name: "Niobium-93" },
            { neutrons: 53, mass: 94, name: "Niobium-94" },
            { neutrons: 54, mass: 95, name: "Niobium-95" },
            { neutrons: 55, mass: 96, name: "Niobium-96" },
            { neutrons: 56, mass: 97, name: "Niobium-97" }
        ]
    },
    42: {
        name: "Molybdenum", symbol: "Mo", mass: 95.95, requiredNeutrons: 54, requiredElectrons: 42, image: "css/assets/elements/Mo.png", type: "Transition metal", state: "Solid",
        isotopes: [
            { neutrons: 54, mass: 96, name: "Molybdenum-96" },
            { neutrons: 52, mass: 94, name: "Molybdenum-94" },
            { neutrons: 53, mass: 95, name: "Molybdenum-95" },
            { neutrons: 55, mass: 97, name: "Molybdenum-97" },
            { neutrons: 56, mass: 98, name: "Molybdenum-98" },
            { neutrons: 57, mass: 99, name: "Molybdenum-99" },
            { neutrons: 58, mass: 100, name: "Molybdenum-100" }
        ]
    },
    43: {
        name: "Technetium", symbol: "Tc", mass: 98, requiredNeutrons: 55, requiredElectrons: 43, image: "css/assets/elements/Tc.png", type: "Transition metal", state: "Solid",
        isotopes: [
            { neutrons: 55, mass: 98, name: "Technetium-98" },
            { neutrons: 54, mass: 97, name: "Technetium-97" },
            { neutrons: 56, mass: 99, name: "Technetium-99" },
            { neutrons: 57, mass: 100, name: "Technetium-100" },
            { neutrons: 58, mass: 101, name: "Technetium-101" }
        ]
    },
    44: {
        name: "Ruthenium", symbol: "Ru", mass: 101.07, requiredNeutrons: 57, requiredElectrons: 44, image: "css/assets/elements/Ru.png", type: "Transition metal", state: "Solid",
        isotopes: [
            { neutrons: 57, mass: 101, name: "Ruthenium-101" },
            { neutrons: 56, mass: 100, name: "Ruthenium-100" },
            { neutrons: 58, mass: 102, name: "Ruthenium-102" },
            { neutrons: 59, mass: 103, name: "Ruthenium-103" },
            { neutrons: 60, mass: 104, name: "Ruthenium-104" }
        ]
    },
    45: {
        name: "Rhodium", symbol: "Rh", mass: 102.91, requiredNeutrons: 58, requiredElectrons: 45, image: "css/assets/elements/Rh.png", type: "Transition metal", state: "Solid",
        isotopes: [
            { neutrons: 58, mass: 103, name: "Rhodium-103" },
            { neutrons: 57, mass: 102, name: "Rhodium-102" },
            { neutrons: 59, mass: 104, name: "Rhodium-104" },
            { neutrons: 60, mass: 105, name: "Rhodium-105" },
            { neutrons: 61, mass: 106, name: "Rhodium-106" }
        ]
    },
    46: {
        name: "Palladium", symbol: "Pd", mass: 106.42, requiredNeutrons: 60, requiredElectrons: 46, image: "css/assets/elements/Pd.png", type: "Transition Metal", state: "Solid",
        isotopes: [
            { neutrons: 60, mass: 106, name: "Palladium-106" },
            { neutrons: 58, mass: 104, name: "Palladium-104" },
            { neutrons: 59, mass: 105, name: "Palladium-105" },
            { neutrons: 61, mass: 107, name: "Palladium-107" },
            { neutrons: 62, mass: 108, name: "Palladium-108" }
        ]
    },
    47: {
        name: "Silver", symbol: "Ag", mass: 107.87, requiredNeutrons: 61, requiredElectrons: 47, image: "css/assets/elements/Ag.png", type: "Transition Metal", state: "Solid",
        isotopes: [
            { neutrons: 61, mass: 108, name: "Silver-108" },
            { neutrons: 60, mass: 107, name: "Silver-107" },
            { neutrons: 62, mass: 109, name: "Silver-109" },
            { neutrons: 63, mass: 110, name: "Silver-110" },
            { neutrons: 64, mass: 111, name: "Silver-111" }
        ]
    },
    48: {
        name: "Cadmium", symbol: "Cd", mass: 112.41, requiredNeutrons: 64, requiredElectrons: 48, image: "css/assets/elements/Cd.png", type: "Transition Metal", state: "Solid",
        isotopes: [
            { neutrons: 64, mass: 112, name: "Cadmium-112" },
            { neutrons: 62, mass: 110, name: "Cadmium-110" },
            { neutrons: 63, mass: 111, name: "Cadmium-111" },
            { neutrons: 65, mass: 113, name: "Cadmium-113" },
            { neutrons: 66, mass: 114, name: "Cadmium-114" }
        ]
    },
    49: {
        name: "Indium", symbol: "In", mass: 114.82, requiredNeutrons: 66, requiredElectrons: 49, image: "css/assets/elements/In.png", type: "Metal", state: "Solid",
        isotopes: [
            { neutrons: 66, mass: 115, name: "Indium-115" },
            { neutrons: 65, mass: 114, name: "Indium-114" },
            { neutrons: 67, mass: 116, name: "Indium-116" },
            { neutrons: 68, mass: 117, name: "Indium-117" },
            { neutrons: 69, mass: 118, name: "Indium-118" }
        ]
    },
    50: {
        "name": "Tin",
        "symbol": "Sn",
        "mass": 118.71,
        "requiredNeutrons": 69,
        "requiredElectrons": 50,
        "image": "css/assets/elements/Sn.png",
        "type": "Post-transition metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 48, "mass": 98, "name": "Tin-98" },
            { "neutrons": 49, "mass": 99, "name": "Tin-99" },
            { "neutrons": 50, "mass": 100, "name": "Tin-100" },
            { "neutrons": 51, "mass": 101, "name": "Tin-101" },
            { "neutrons": 52, "mass": 102, "name": "Tin-102" },
            { "neutrons": 53, "mass": 103, "name": "Tin-103" },
            { "neutrons": 54, "mass": 104, "name": "Tin-104" },
            { "neutrons": 55, "mass": 105, "name": "Tin-105" },
            { "neutrons": 56, "mass": 106, "name": "Tin-106" },
            { "neutrons": 57, "mass": 107, "name": "Tin-107" },
            { "neutrons": 58, "mass": 108, "name": "Tin-108" },
            { "neutrons": 59, "mass": 109, "name": "Tin-109" },
            { "neutrons": 60, "mass": 110, "name": "Tin-110" },
            { "neutrons": 61, "mass": 111, "name": "Tin-111" },
            { "neutrons": 62, "mass": 112, "name": "Tin-112" },
            { "neutrons": 63, "mass": 113, "name": "Tin-113" },
            { "neutrons": 64, "mass": 114, "name": "Tin-114" },
            { "neutrons": 65, "mass": 115, "name": "Tin-115" },
            { "neutrons": 66, "mass": 116, "name": "Tin-116" },
            { "neutrons": 67, "mass": 117, "name": "Tin-117" },
            { "neutrons": 68, "mass": 118, "name": "Tin-118" },
            { "neutrons": 69, "mass": 119, "name": "Tin-119" },
            { "neutrons": 70, "mass": 120, "name": "Tin-120" },
            { "neutrons": 71, "mass": 121, "name": "Tin-121" },
            { "neutrons": 72, "mass": 122, "name": "Tin-122" },
            { "neutrons": 73, "mass": 123, "name": "Tin-123" },
            { "neutrons": 74, "mass": 124, "name": "Tin-124" },
            { "neutrons": 75, "mass": 125, "name": "Tin-125" },
            { "neutrons": 76, "mass": 126, "name": "Tin-126" },
            { "neutrons": 77, "mass": 127, "name": "Tin-127" },
            { "neutrons": 78, "mass": 128, "name": "Tin-128" },
            { "neutrons": 79, "mass": 129, "name": "Tin-129" },
            { "neutrons": 80, "mass": 130, "name": "Tin-130" },
            { "neutrons": 81, "mass": 131, "name": "Tin-131" },
            { "neutrons": 82, "mass": 132, "name": "Tin-132" },
            { "neutrons": 83, "mass": 133, "name": "Tin-133" },
            { "neutrons": 84, "mass": 134, "name": "Tin-134" },
            { "neutrons": 85, "mass": 135, "name": "Tin-135" },
            { "neutrons": 86, "mass": 136, "name": "Tin-136" },
            { "neutrons": 87, "mass": 137, "name": "Tin-137" }
        ]
    },
    51: {
        name: "Antimony", symbol: "Sb", mass: 121.76, requiredNeutrons: 71, requiredElectrons: 51, image: "css/assets/elements/Sb.png", type: "Metalloid", state: "Solid",
        isotopes: [
            { neutrons: 71, mass: 122, name: "Antimony-122" },
            { neutrons: 70, mass: 121, name: "Antimony-121" },
            { neutrons: 72, mass: 123, name: "Antimony-123" },
            { neutrons: 73, mass: 124, name: "Antimony-124" },
            { neutrons: 74, mass: 125, name: "Antimony-125" }
        ]
    },
    52: {
        name: "Tellurium", symbol: "Te", mass: 127.60, requiredNeutrons: 76, requiredElectrons: 52, image: "css/assets/elements/Te.png", type: "Metalloid", state: "Solid",
        isotopes: [
            { neutrons: 76, mass: 128, name: "Tellurium-128" },
            { neutrons: 74, mass: 126, name: "Tellurium-126" },
            { neutrons: 75, mass: 127, name: "Tellurium-127" },
            { neutrons: 77, mass: 129, name: "Tellurium-129" },
            { neutrons: 78, mass: 130, name: "Tellurium-130" }
        ]
    },
    53: {
        name: "Iodine", symbol: "I", mass: 126.90, requiredNeutrons: 74, requiredElectrons: 53, image: "css/assets/elements/I.png", type: "Halogen", state: "Solid",
        isotopes: [
            { neutrons: 74, mass: 127, name: "Iodine-127" },
            { neutrons: 73, mass: 126, name: "Iodine-126" },
            { neutrons: 75, mass: 128, name: "Iodine-128" },
            { neutrons: 76, mass: 129, name: "Iodine-129" },
            { neutrons: 77, mass: 130, name: "Iodine-130" }
        ]
    },
    54: {
        name: "Xenon", symbol: "Xe", mass: 131.29, requiredNeutrons: 77, requiredElectrons: 54, image: "css/assets/elements/Xe.png", type: "Noble Gas", state: "Gas",
        isotopes: [
            { neutrons: 77, mass: 132, name: "Xenon-132" },
            { neutrons: 75, mass: 130, name: "Xenon-130" },
            { neutrons: 76, mass: 131, name: "Xenon-131" },
            { neutrons: 78, mass: 133, name: "Xenon-133" },
            { neutrons: 79, mass: 134, name: "Xenon-134" }
        ]
    },
    55: {
        name: "Cesium", symbol: "Cs", mass: 132.91, requiredNeutrons: 78, requiredElectrons: 55, image: "css/assets/elements/Cs.png", type: "Alkali Metal", state: "Solid",
        isotopes: [
            { neutrons: 78, mass: 133, name: "Cesium-133" },
            { neutrons: 77, mass: 132, name: "Cesium-132" },
            { neutrons: 79, mass: 134, name: "Cesium-134" },
            { neutrons: 80, mass: 135, name: "Cesium-135" },
            { neutrons: 81, mass: 136, name: "Cesium-136" }
        ]
    },
    56: {
        name: "Barium", symbol: "Ba", mass: 137.33, requiredNeutrons: 81, requiredElectrons: 56, image: "css/assets/elements/Ba.png", type: "Alkaline Earth Metal", state: "Solid",
        isotopes: [
            { neutrons: 81, mass: 137, name: "Barium-137" },
            { neutrons: 80, mass: 136, name: "Barium-136" },
            { neutrons: 82, mass: 138, name: "Barium-138" },
            { neutrons: 83, mass: 139, name: "Barium-139" },
            { neutrons: 84, mass: 140, name: "Barium-140" }
        ]
    },
    57: {
        name: "Lanthanum", symbol: "La", mass: 138.91, requiredNeutrons: 82, requiredElectrons: 57, image: "css/assets/elements/La.png", type: "Transition Metal", state: "Solid",
        isotopes: [
            { neutrons: 82, mass: 139, name: "Lanthanum-139" },
            { neutrons: 81, mass: 138, name: "Lanthanum-138" },
            { neutrons: 83, mass: 140, name: "Lanthanum-140" },
            { neutrons: 84, mass: 141, name: "Lanthanum-141" },
            { neutrons: 85, mass: 142, name: "Lanthanum-142" }
        ]
    },
    58: {
        name: "Cerium", symbol: "Ce", mass: 140.12, requiredNeutrons: 82, requiredElectrons: 58, image: "css/assets/elements/Ce.png", type: "Lanthanide", state: "Solid",
        isotopes: [
            { neutrons: 82, mass: 140, name: "Cerium-140" },
            { neutrons: 80, mass: 138, name: "Cerium-138" },
            { neutrons: 83, mass: 141, name: "Cerium-141" },
            { neutrons: 84, mass: 142, name: "Cerium-142" },
            { neutrons: 85, mass: 143, name: "Cerium-143" }
        ]
    },
    59: {
        name: "Praseodymium", symbol: "Pr", mass: 140.91, requiredNeutrons: 82, requiredElectrons: 59, image: "css/assets/elements/Pr.png", type: "Lanthanide", state: "Solid",
        isotopes: [
            { neutrons: 82, mass: 141, name: "Praseodymium-141" },
            { neutrons: 81, mass: 140, name: "Praseodymium-140" },
            { neutrons: 83, mass: 142, name: "Praseodymium-142" },
            { neutrons: 84, mass: 143, name: "Praseodymium-143" },
            { neutrons: 85, mass: 144, name: "Praseodymium-144" }
        ]
    },
    60: {
        name: "Neodymium", symbol: "Nd", mass: 144.24, requiredNeutrons: 84, requiredElectrons: 60, image: "css/assets/elements/Nd.png", type: "Lanthanide", state: "Solid",
        isotopes: [
            { neutrons: 84, mass: 144, name: "Neodymium-144" },
            { neutrons: 83, mass: 143, name: "Neodymium-143" },
            { neutrons: 85, mass: 145, name: "Neodymium-145" },
            { neutrons: 86, mass: 146, name: "Neodymium-146" },
            { neutrons: 87, mass: 147, name: "Neodymium-147" }
        ]
    },
    61: {
        name: "Promethium", symbol: "Pm", mass: 145, requiredNeutrons: 84, requiredElectrons: 61, image: "css/assets/elements/Pm.png", type: "Lanthanide", state: "Solid",
        isotopes: [
            { neutrons: 84, mass: 145, name: "Promethium-145" },
            { neutrons: 83, mass: 144, name: "Promethium-144" },
            { neutrons: 85, mass: 146, name: "Promethium-146" },
            { neutrons: 86, mass: 147, name: "Promethium-147" },
            { neutrons: 87, mass: 148, name: "Promethium-148" }
        ]
    },
    62: {
        name: "Samarium", symbol: "Sm", mass: 150.36, requiredNeutrons: 88, requiredElectrons: 62, image: "css/assets/elements/Sm.png", type: "Lanthanide", state: "Solid",
        isotopes: [
            { neutrons: 88, mass: 150, name: "Samarium-150" },
            { neutrons: 87, mass: 149, name: "Samarium-149" },
            { neutrons: 89, mass: 151, name: "Samarium-151" },
            { neutrons: 90, mass: 152, name: "Samarium-152" },
            { neutrons: 91, mass: 153, name: "Samarium-153" }
        ]
    },
    63: {
        name: "Europium", symbol: "Eu", mass: 151.96, requiredNeutrons: 89, requiredElectrons: 63, image: "css/assets/elements/Eu.png", type: "Lanthanide", state: "Solid",
        isotopes: [
            { neutrons: 89, mass: 152, name: "Europium-152" },
            { neutrons: 88, mass: 151, name: "Europium-151" },
            { neutrons: 90, mass: 153, name: "Europium-153" },
            { neutrons: 91, mass: 154, name: "Europium-154" },
            { neutrons: 92, mass: 155, name: "Europium-155" }
        ]
    },
    64: {
        name: "Gadolinium", symbol: "Gd", mass: 157.25, requiredNeutrons: 93, requiredElectrons: 64, image: "css/assets/elements/Gd.png", type: "Lanthanide", state: "Solid",
        isotopes: [
            { neutrons: 93, mass: 157, name: "Gadolinium-157" },
            { neutrons: 92, mass: 156, name: "Gadolinium-156" },
            { neutrons: 94, mass: 158, name: "Gadolinium-158" },
            { neutrons: 95, mass: 159, name: "Gadolinium-159" },
            { neutrons: 96, mass: 160, name: "Gadolinium-160" }
        ]
    },
    65: {
        name: "Terbium", symbol: "Tb", mass: 158.93, requiredNeutrons: 94, requiredElectrons: 65, image: "css/assets/elements/Tb.png", type: "Lanthanide", state: "Solid",
        isotopes: [
            { neutrons: 94, mass: 159, name: "Terbium-159" },
            { neutrons: 93, mass: 158, name: "Terbium-158" },
            { neutrons: 95, mass: 160, name: "Terbium-160" },
            { neutrons: 96, mass: 161, name: "Terbium-161" },
            { neutrons: 97, mass: 162, name: "Terbium-162" }
        ]
    },
    66: {
        "name": "Dysprosium",
        "symbol": "Dy",
        "mass": 162.50,
        "requiredNeutrons": 97,
        "requiredElectrons": 66,
        "image": "css/assets/elements/Dy.png",
        "type": "Lanthanide",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 97, "mass": 163, "name": "Dysprosium-163" },
            { "neutrons": 96, "mass": 162, "name": "Dysprosium-162" },
            { "neutrons": 98, "mass": 164, "name": "Dysprosium-164" },
            { "neutrons": 99, "mass": 165, "name": "Dysprosium-165" },
            { "neutrons": 100, "mass": 166, "name": "Dysprosium-166" }
        ]
    },
    67: {
        "name": "Holmium",
        "symbol": "Ho",
        "mass": 164.93,
        "requiredNeutrons": 98,
        "requiredElectrons": 67,
        "image": "css/assets/elements/Ho.png",
        "type": "Lanthanide",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 98, "mass": 165, "name": "Holmium-165" },
            { "neutrons": 97, "mass": 164, "name": "Holmium-164" },
            { "neutrons": 99, "mass": 166, "name": "Holmium-166" },
            { "neutrons": 100, "mass": 167, "name": "Holmium-167" },
            { "neutrons": 101, "mass": 168, "name": "Holmium-168" }
        ]
    },
    68: {
        "name": "Erbium",
        "symbol": "Er",
        "mass": 167.26,
        "requiredNeutrons": 99,
        "requiredElectrons": 68,
        "image": "css/assets/elements/Er.png",
        "type": "Lanthanide",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 99, "mass": 168, "name": "Erbium-168" },
            { "neutrons": 98, "mass": 167, "name": "Erbium-167" },
            { "neutrons": 100, "mass": 169, "name": "Erbium-169" },
            { "neutrons": 101, "mass": 170, "name": "Erbium-170" },
            { "neutrons": 102, "mass": 171, "name": "Erbium-171" }
        ]
    },
    69: {
        "name": "Thulium",
        "symbol": "Tm",
        "mass": 168.93,
        "requiredNeutrons": 100,
        "requiredElectrons": 69,
        "image": "css/assets/elements/Tm.png",
        "type": "Lanthanide",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 100, "mass": 169, "name": "Thulium-169" },
            { "neutrons": 99, "mass": 168, "name": "Thulium-168" },
            { "neutrons": 101, "mass": 170, "name": "Thulium-170" },
            { "neutrons": 102, "mass": 171, "name": "Thulium-171" },
            { "neutrons": 103, "mass": 172, "name": "Thulium-172" }
        ]
    },
    70: {
        "name": "Ytterbium",
        "symbol": "Yb",
        "mass": 173.04,
        "requiredNeutrons": 103,
        "requiredElectrons": 70,
        "image": "css/assets/elements/Yb.png",
        "type": "Lanthanide",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 103, "mass": 173, "name": "Ytterbium-173" },
            { "neutrons": 102, "mass": 172, "name": "Ytterbium-172" },
            { "neutrons": 104, "mass": 174, "name": "Ytterbium-174" },
            { "neutrons": 105, "mass": 175, "name": "Ytterbium-175" },
            { "neutrons": 106, "mass": 176, "name": "Ytterbium-176" }
        ]
    },
    71: {
        "name": "Lutetium",
        "symbol": "Lu",
        "mass": 174.97,
        "requiredNeutrons": 104,
        "requiredElectrons": 71,
        "image": "css/assets/elements/Lu.png",
        "type": "Lanthanide",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 104, "mass": 175, "name": "Lutetium-175" },
            { "neutrons": 103, "mass": 174, "name": "Lutetium-174" },
            { "neutrons": 105, "mass": 176, "name": "Lutetium-176" },
            { "neutrons": 106, "mass": 177, "name": "Lutetium-177" },
            { "neutrons": 107, "mass": 178, "name": "Lutetium-178" }
        ]
    },
    72: {
        "name": "Hafnium",
        "symbol": "Hf",
        "mass": 178.49,
        "requiredNeutrons": 106,
        "requiredElectrons": 72,
        "image": "css/assets/elements/Hf.png",
        "type": "Transition Metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 106, "mass": 178, "name": "Hafnium-178" },
            { "neutrons": 105, "mass": 177, "name": "Hafnium-177" },
            { "neutrons": 107, "mass": 179, "name": "Hafnium-179" },
            { "neutrons": 108, "mass": 180, "name": "Hafnium-180" },
            { "neutrons": 109, "mass": 181, "name": "Hafnium-181" }
        ]
    },
    73: {
        "name": "Tantalum",
        "symbol": "Ta",
        "mass": 180.95,
        "requiredNeutrons": 108,
        "requiredElectrons": 73,
        "image": "css/assets/elements/Ta.png",
        "type": "Transition Metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 108, "mass": 181, "name": "Tantalum-181" },
            { "neutrons": 107, "mass": 180, "name": "Tantalum-180" },
            { "neutrons": 109, "mass": 182, "name": "Tantalum-182" },
            { "neutrons": 110, "mass": 183, "name": "Tantalum-183" },
            { "neutrons": 111, "mass": 184, "name": "Tantalum-184" }
        ]
    },
    74: {
        "name": "Tungsten",
        "symbol": "W",
        "mass": 183.84,
        "requiredNeutrons": 110,
        "requiredElectrons": 74,
        "image": "css/assets/elements/W.png",
        "type": "Transition Metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 110, "mass": 184, "name": "Tungsten-184" },
            { "neutrons": 109, "mass": 183, "name": "Tungsten-183" },
            { "neutrons": 111, "mass": 185, "name": "Tungsten-185" },
            { "neutrons": 112, "mass": 186, "name": "Tungsten-186" },
            { "neutrons": 113, "mass": 187, "name": "Tungsten-187" }
        ]
    },
    75: {
        "name": "Rhenium",
        "symbol": "Re",
        "mass": 186.21,
        "requiredNeutrons": 111,
        "requiredElectrons": 75,
        "image": "css/assets/elements/Re.png",
        "type": "Transition Metal",
        "state": "Solid",
        "isotopes": [
            { "neutrons": 111, "mass": 186, "name": "Rhenium-186" },
            { "neutrons": 110, "mass": 185, "name": "Rhenium-185" },
            { "neutrons": 112, "mass": 187, "name": "Rhenium-187" },
            { "neutrons": 113, "mass": 188, "name": "Rhenium-188" },
            { "neutrons": 114, "mass": 189, "name": "Rhenium-189" }
        ]
    },
    76: {
        name: "Osmium", symbol: "Os", mass: 190.23, requiredNeutrons: 114, requiredElectrons: 76, image: "css/assets/elements/Os.png", type: "Transition Metal", state: "Solid",
        isotopes: [
            { neutrons: 114, mass: 190, name: "Osmium-190" },
            { neutrons: 113, mass: 189, name: "Osmium-189" },
            { neutrons: 115, mass: 191, name: "Osmium-191" },
            { neutrons: 116, mass: 192, name: "Osmium-192" },
            { neutrons: 117, mass: 193, name: "Osmium-193" }
        ]
    },
    77: {
        name: "Iridium", symbol: "Ir", mass: 192.22, requiredNeutrons: 115, requiredElectrons: 77, image: "css/assets/elements/Ir.png", type: "Transition Metal", state: "Solid",
        isotopes: [
            { neutrons: 115, mass: 192, name: "Iridium-192" },
            { neutrons: 114, mass: 191, name: "Iridium-191" },
            { neutrons: 116, mass: 193, name: "Iridium-193" },
            { neutrons: 117, mass: 194, name: "Iridium-194" },
            { neutrons: 118, mass: 195, name: "Iridium-195" }
        ]
    },
    78: {
        name: "Platinum", symbol: "Pt", mass: 195.08, requiredNeutrons: 117, requiredElectrons: 78, image: "css/assets/elements/Pt.png", type: "Transition Metal", state: "Solid",
        isotopes: [
            { neutrons: 117, mass: 195, name: "Platinum-195" },
            { neutrons: 116, mass: 194, name: "Platinum-194" },
            { neutrons: 118, mass: 196, name: "Platinum-196" },
            { neutrons: 119, mass: 197, name: "Platinum-197" },
            { neutrons: 120, mass: 198, name: "Platinum-198" }
        ]
    },
    79: {
        name: "Gold", symbol: "Au", mass: 196.97, requiredNeutrons: 118, requiredElectrons: 79, image: "css/assets/elements/Au.png", type: "Transition Metal", state: "Solid",
        isotopes: [
            { neutrons: 118, mass: 197, name: "Gold-197" },
            { neutrons: 117, mass: 196, name: "Gold-196" },
            { neutrons: 119, mass: 198, name: "Gold-198" },
            { neutrons: 120, mass: 199, name: "Gold-199" },
            { neutrons: 121, mass: 200, name: "Gold-200" }
        ]
    },
    80: {
        name: "Mercury", symbol: "Hg", mass: 200.59, requiredNeutrons: 121, requiredElectrons: 80, image: "css/assets/elements/Hg.png", type: "Transition Metal", state: "Liquid",
        isotopes: [
            { neutrons: 121, mass: 201, name: "Mercury-201" },
            { neutrons: 120, mass: 200, name: "Mercury-200" },
            { neutrons: 122, mass: 202, name: "Mercury-202" },
            { neutrons: 123, mass: 203, name: "Mercury-203" },
            { neutrons: 124, mass: 204, name: "Mercury-204" }
        ]
    },
    81: {
        name: "Thallium", symbol: "Tl", mass: 204.38, requiredNeutrons: 123, requiredElectrons: 81, image: "css/assets/elements/Tl.png", type: "Metal", state: "Solid",
        isotopes: [
            { neutrons: 123, mass: 204, name: "Thallium-204" },
            { neutrons: 122, mass: 203, name: "Thallium-203" },
            { neutrons: 124, mass: 205, name: "Thallium-205" },
            { neutrons: 125, mass: 206, name: "Thallium-206" },
            { neutrons: 126, mass: 207, name: "Thallium-207" }
        ]
    },
    82: {
        name: "Lead", symbol: "Pb", mass: 207.2, requiredNeutrons: 125, requiredElectrons: 82, image: "css/assets/elements/Pb.png", type: "Metal", state: "Solid",
        isotopes: [
            { neutrons: 125, mass: 207, name: "Lead-207" },
            { neutrons: 124, mass: 206, name: "Lead-206" },
            { neutrons: 126, mass: 208, name: "Lead-208" },
            { neutrons: 127, mass: 209, name: "Lead-209" },
            { neutrons: 128, mass: 210, name: "Lead-210" }
        ]
    },
    83: {
        name: "Bismuth", symbol: "Bi", mass: 208.98, requiredNeutrons: 126, requiredElectrons: 83, image: "css/assets/elements/Bi.png", type: "Metal", state: "Solid",
        isotopes: [
            { neutrons: 126, mass: 209, name: "Bismuth-209" },
            { neutrons: 125, mass: 208, name: "Bismuth-208" },
            { neutrons: 127, mass: 210, name: "Bismuth-210" },
            { neutrons: 128, mass: 211, name: "Bismuth-211" },
            { neutrons: 129, mass: 212, name: "Bismuth-212" }
        ]
    },
    84: {
        name: "Polonium", symbol: "Po", mass: 209, requiredNeutrons: 125, requiredElectrons: 84, image: "css/assets/elements/Po.png", type: "Metalloid", state: "Solid",
        isotopes: [
            { neutrons: 125, mass: 209, name: "Polonium-209" },
            { neutrons: 124, mass: 208, name: "Polonium-208" },
            { neutrons: 126, mass: 210, name: "Polonium-210" },
            { neutrons: 127, mass: 211, name: "Polonium-211" },
            { neutrons: 128, mass: 212, name: "Polonium-212" }
        ]
    },
    85: {
        name: "Astatine", symbol: "At", mass: 210, requiredNeutrons: 125, requiredElectrons: 85, image: "css/assets/elements/At.png", type: "Halogen", state: "Solid",
        isotopes: [
            { neutrons: 125, mass: 210, name: "Astatine-210" },
            { neutrons: 124, mass: 209, name: "Astatine-209" },
            { neutrons: 126, mass: 211, name: "Astatine-211" },
            { neutrons: 127, mass: 212, name: "Astatine-212" },
            { neutrons: 128, mass: 213, name: "Astatine-213" }
        ]
    },
    86: {
        name: "Radon", symbol: "Rn", mass: 222, requiredNeutrons: 136, requiredElectrons: 86, image: "css/assets/elements/Rn.png", type: "Noble gas", state: "Gas",
        isotopes: [
            { neutrons: 136, mass: 222, name: "Radon-222" },
            { neutrons: 135, mass: 221, name: "Radon-221" },
            { neutrons: 137, mass: 223, name: "Radon-223" },
            { neutrons: 138, mass: 224, name: "Radon-224" },
            { neutrons: 139, mass: 225, name: "Radon-225" }
        ]
    },
    87: {
        name: "Francium", symbol: "Fr", mass: 223, requiredNeutrons: 136, requiredElectrons: 87, image: "css/assets/elements/Fr.png", type: "Alkali metal", state: "Solid",
        isotopes: [
            { neutrons: 136, mass: 223, name: "Francium-223" },
            { neutrons: 135, mass: 222, name: "Francium-222" },
            { neutrons: 137, mass: 224, name: "Francium-224" },
            { neutrons: 138, mass: 225, name: "Francium-225" },
            { neutrons: 139, mass: 226, name: "Francium-226" }
        ]
    },
    88: {
        name: "Radium", symbol: "Ra", mass: 226, requiredNeutrons: 138, requiredElectrons: 88, image: "css/assets/elements/Ra.png", type: "Alkaline earth metal", state: "Solid",
        isotopes: [
            { neutrons: 138, mass: 226, name: "Radium-226" },
            { neutrons: 137, mass: 225, name: "Radium-225" },
            { neutrons: 139, mass: 227, name: "Radium-227" },
            { neutrons: 140, mass: 228, name: "Radium-228" },
            { neutrons: 141, mass: 229, name: "Radium-229" }
        ]
    },
    89: {
        name: "Actinium", symbol: "Ac", mass: 227, requiredNeutrons: 138, requiredElectrons: 89, image: "css/assets/elements/Ac.png", type: "Actinide", state: "Solid",
        isotopes: [
            { neutrons: 138, mass: 227, name: "Actinium-227" },
            { neutrons: 137, mass: 226, name: "Actinium-226" },
            { neutrons: 139, mass: 228, name: "Actinium-228" },
            { neutrons: 140, mass: 229, name: "Actinium-229" },
            { neutrons: 141, mass: 230, name: "Actinium-230" }
        ]
    },
    90: {
        name: "Thorium", symbol: "Th", mass: 232.04, requiredNeutrons: 142, requiredElectrons: 90, image: "css/assets/elements/Th.png", type: "Actinide", state: "Solid",
        isotopes: [
            { neutrons: 142, mass: 232, name: "Thorium-232" },
            { neutrons: 141, mass: 231, name: "Thorium-231" },
            { neutrons: 143, mass: 233, name: "Thorium-233" },
            { neutrons: 144, mass: 234, name: "Thorium-234" },
            { neutrons: 145, mass: 235, name: "Thorium-235" }
        ]
    },
    91: {
        name: "Protactinium", symbol: "Pa", mass: 231.04, requiredNeutrons: 140, requiredElectrons: 91, image: "css/assets/elements/Pa.png", type: "Actinide", state: "Solid",
        isotopes: [
            { neutrons: 140, mass: 231, name: "Protactinium-231" },
            { neutrons: 139, mass: 230, name: "Protactinium-230" },
            { neutrons: 141, mass: 232, name: "Protactinium-232" },
            { neutrons: 142, mass: 233, name: "Protactinium-233" },
            { neutrons: 143, mass: 234, name: "Protactinium-234" }
        ]
    },
    92: {
        name: "Uranium", symbol: "U", mass: 238.03, requiredNeutrons: 146, requiredElectrons: 92, image: "css/assets/elements/U.png", type: "Actinide", state: "Solid",
        isotopes: [
            { neutrons: 146, mass: 238, name: "Uranium-238" },
            { neutrons: 143, mass: 235, name: "Uranium-235" },
            { neutrons: 142, mass: 234, name: "Uranium-234" },
            { neutrons: 144, mass: 236, name: "Uranium-236" },
            { neutrons: 145, mass: 237, name: "Uranium-237" }
        ]
    },
    93: {
        name: "Neptunium", symbol: "Np", mass: 237, requiredNeutrons: 144, requiredElectrons: 93, image: "css/assets/elements/Np.png", type: "Actinide", state: "Solid",
        isotopes: [
            { neutrons: 144, mass: 237, name: "Neptunium-237" },
            { neutrons: 143, mass: 236, name: "Neptunium-236" },
            { neutrons: 145, mass: 238, name: "Neptunium-238" },
            { neutrons: 146, mass: 239, name: "Neptunium-239" },
            { neutrons: 147, mass: 240, name: "Neptunium-240" }
        ]
    },
    94: {
        name: "Plutonium", symbol: "Pu", mass: 244, requiredNeutrons: 150, requiredElectrons: 94, image: "css/assets/elements/Pu.png", type: "Actinide", state: "Solid",
        isotopes: [
            { neutrons: 150, mass: 244, name: "Plutonium-244" },
            { neutrons: 148, mass: 242, name: "Plutonium-242" },
            { neutrons: 149, mass: 243, name: "Plutonium-243" },
            { neutrons: 151, mass: 245, name: "Plutonium-245" },
            { neutrons: 152, mass: 246, name: "Plutonium-246" }
        ]
    },
    95: {
        name: "Americium", symbol: "Am", mass: 243, requiredNeutrons: 148, requiredElectrons: 95, image: "css/assets/elements/Am.png", type: "Actinide", state: "Solid",
        isotopes: [
            { neutrons: 148, mass: 243, name: "Americium-243" },
            { neutrons: 147, mass: 242, name: "Americium-242" },
            { neutrons: 149, mass: 244, name: "Americium-244" },
            { neutrons: 150, mass: 245, name: "Americium-245" },
            { neutrons: 151, mass: 246, name: "Americium-246" }
        ]
    },
    96: {
        name: "Curium", symbol: "Cm", mass: 247, requiredNeutrons: 151, requiredElectrons: 96, image: "css/assets/elements/Cm.png", type: "Actinide", state: "Solid",
        isotopes: [
            { neutrons: 151, mass: 247, name: "Curium-247" },
            { neutrons: 150, mass: 246, name: "Curium-246" },
            { neutrons: 152, mass: 248, name: "Curium-248" },
            { neutrons: 153, mass: 249, name: "Curium-249" },
            { neutrons: 154, mass: 250, name: "Curium-250" }
        ]
    },
    97: {
        name: "Berkelium", symbol: "Bk", mass: 247, requiredNeutrons: 150, requiredElectrons: 97, image: "css/assets/elements/Bk.png", type: "Actinide", state: "Solid",
        isotopes: [
            { neutrons: 150, mass: 247, name: "Berkelium-247" },
            { neutrons: 149, mass: 246, name: "Berkelium-246" },
            { neutrons: 151, mass: 248, name: "Berkelium-248" },
            { neutrons: 152, mass: 249, name: "Berkelium-249" },
            { neutrons: 153, mass: 250, name: "Berkelium-250" }
        ]
    },
    98: {
        name: "Californium", symbol: "Cf", mass: 251, requiredNeutrons: 153, requiredElectrons: 98, image: "css/assets/elements/Cf.png", type: "Actinide", state: "Solid",
        isotopes: [
            { neutrons: 153, mass: 251, name: "Californium-251" },
            { neutrons: 152, mass: 250, name: "Californium-250" },
            { neutrons: 154, mass: 252, name: "Californium-252" },
            { neutrons: 155, mass: 253, name: "Californium-253" },
            { neutrons: 156, mass: 254, name: "Californium-254" }
        ]
    },
    99: {
        name: "Einsteinium", symbol: "Es", mass: 252, requiredNeutrons: 153, requiredElectrons: 99, image: "css/assets/elements/Es.png", type: "Actinide", state: "Solid",
        isotopes: [
            { neutrons: 153, mass: 252, name: "Einsteinium-252" },
            { neutrons: 152, mass: 251, name: "Einsteinium-251" },
            { neutrons: 154, mass: 253, name: "Einsteinium-253" },
            { neutrons: 155, mass: 254, name: "Einsteinium-254" },
            { neutrons: 156, mass: 255, name: "Einsteinium-255" }
        ]
    },
    100: {
        name: "Fermium", symbol: "Fm", mass: 257, requiredNeutrons: 157, requiredElectrons: 100, image: "css/assets/elements/Fm.png", type: "Actinide", state: "Solid",
        isotopes: [
            { neutrons: 157, mass: 257, name: "Fermium-257" },
            { neutrons: 156, mass: 256, name: "Fermium-256" },
            { neutrons: 158, mass: 258, name: "Fermium-258" },
            { neutrons: 159, mass: 259, name: "Fermium-259" },
            { neutrons: 160, mass: 260, name: "Fermium-260" }
        ]
    },
    101: {
        name: "Mendelevium", symbol: "Md", mass: 258, requiredNeutrons: 157, requiredElectrons: 101, image: "css/assets/elements/Md.png", type: "Actinide", state: "Solid",
        isotopes: [
            { neutrons: 157, mass: 258, name: "Mendelevium-258" },
            { neutrons: 156, mass: 257, name: "Mendelevium-257" },
            { neutrons: 158, mass: 259, name: "Mendelevium-259" },
            { neutrons: 159, mass: 260, name: "Mendelevium-260" },
            { neutrons: 160, mass: 261, name: "Mendelevium-261" }
        ]
    },
    102: {
        name: "Nobelium", symbol: "No", mass: 259, requiredNeutrons: 157, requiredElectrons: 102, image: "css/assets/elements/No.png", type: "Actinide", state: "Solid",
        isotopes: [
            { neutrons: 157, mass: 259, name: "Nobelium-259" },
            { neutrons: 156, mass: 258, name: "Nobelium-258" },
            { neutrons: 158, mass: 260, name: "Nobelium-260" },
            { neutrons: 159, mass: 261, name: "Nobelium-261" },
            { neutrons: 160, mass: 262, name: "Nobelium-262" }
        ]
    },
    103: {
        name: "Lawrencium", symbol: "Lr", mass: 262, requiredNeutrons: 159, requiredElectrons: 103, image: "css/assets/elements/Lr.png", type: "Actinide", state: "Solid",
        isotopes: [
            { neutrons: 159, mass: 262, name: "Lawrencium-262" },
            { neutrons: 158, mass: 261, name: "Lawrencium-261" },
            { neutrons: 160, mass: 263, name: "Lawrencium-263" },
            { neutrons: 161, mass: 264, name: "Lawrencium-264" },
            { neutrons: 162, mass: 265, name: "Lawrencium-265" }
        ]
    },
    104: {
        name: "Rutherfordium", symbol: "Rf", mass: 267, requiredNeutrons: 163, requiredElectrons: 104, image: "css/assets/elements/Rf.png", type: "Transition metal", state: "Solid",
        isotopes: [
            { neutrons: 163, mass: 267, name: "Rutherfordium-267" },
            { neutrons: 162, mass: 266, name: "Rutherfordium-266" },
            { neutrons: 164, mass: 268, name: "Rutherfordium-268" },
            { neutrons: 165, mass: 269, name: "Rutherfordium-269" },
            { neutrons: 166, mass: 270, name: "Rutherfordium-270" }
        ]
    },
    105: {
        name: "Dubnium", symbol: "Db", mass: 268, requiredNeutrons: 163, requiredElectrons: 105, image: "css/assets/elements/Db.png", type: "Unknown", state: "Solid",
        isotopes: [
            { neutrons: 163, mass: 268, name: "Dubnium-268" },
            { neutrons: 162, mass: 267, name: "Dubnium-267" },
            { neutrons: 164, mass: 269, name: "Dubnium-269" },
            { neutrons: 165, mass: 270, name: "Dubnium-270" },
            { neutrons: 166, mass: 271, name: "Dubnium-271" }
        ]
    },
    106: {
        name: "Seaborgium", symbol: "Sg", mass: 271, requiredNeutrons: 165, requiredElectrons: 106, image: "css/assets/elements/Sg.png", type: "Unknown", state: "Solid",
        isotopes: [
            { neutrons: 165, mass: 271, name: "Seaborgium-271" },
            { neutrons: 164, mass: 270, name: "Seaborgium-270" },
            { neutrons: 166, mass: 272, name: "Seaborgium-272" },
            { neutrons: 167, mass: 273, name: "Seaborgium-273" },
            { neutrons: 168, mass: 274, name: "Seaborgium-274" }
        ]
    },
    107: {
        name: "Bohrium", symbol: "Bh", mass: 270, requiredNeutrons: 163, requiredElectrons: 107, image: "css/assets/elements/Bh.png", type: "Unknown", state: "Solid",
        isotopes: [
            { neutrons: 163, mass: 270, name: "Bohrium-270" },
            { neutrons: 162, mass: 269, name: "Bohrium-269" },
            { neutrons: 164, mass: 271, name: "Bohrium-271" },
            { neutrons: 165, mass: 272, name: "Bohrium-272" },
            { neutrons: 166, mass: 273, name: "Bohrium-273" }
        ]
    },
    108: {
        name: "Hassium", symbol: "Hs", mass: 277, requiredNeutrons: 169, requiredElectrons: 108, image: "css/assets/elements/Hs.png", type: "Unknown", state: "Solid",
        isotopes: [
            { neutrons: 169, mass: 277, name: "Hassium-277" },
            { neutrons: 168, mass: 276, name: "Hassium-276" },
            { neutrons: 170, mass: 278, name: "Hassium-278" },
            { neutrons: 171, mass: 279, name: "Hassium-279" },
            { neutrons: 172, mass: 280, name: "Hassium-280" }
        ]
    },
    109: {
        name: "Meitnerium", symbol: "Mt", mass: 278, requiredNeutrons: 169, requiredElectrons: 109, image: "css/assets/elements/Mt.png", type: "Unknown", state: "Solid",
        isotopes: [
            { neutrons: 169, mass: 278, name: "Meitnerium-278" },
            { neutrons: 168, mass: 277, name: "Meitnerium-277" },
            { neutrons: 170, mass: 279, name: "Meitnerium-279" },
            { neutrons: 171, mass: 280, name: "Meitnerium-280" },
            { neutrons: 172, mass: 281, name: "Meitnerium-281" }
        ]
    },
    110: {
        name: "Darmstadtium", symbol: "Ds", mass: 281, requiredNeutrons: 171, requiredElectrons: 110, image: "css/assets/elements/Ds.png", type: "Unknown", state: "Solid",
        isotopes: [
            { neutrons: 171, mass: 281, name: "Darmstadtium-281" },
            { neutrons: 170, mass: 280, name: "Darmstadtium-280" },
            { neutrons: 172, mass: 282, name: "Darmstadtium-282" },
            { neutrons: 173, mass: 283, name: "Darmstadtium-283" },
            { neutrons: 174, mass: 284, name: "Darmstadtium-284" }
        ]
    },
    111: {
        name: "Roentgenium", symbol: "Rg", mass: 282, requiredNeutrons: 171, requiredElectrons: 111, image: "css/assets/elements/Rg.png", type: "Unknown", state: "Solid",
        isotopes: [
            { neutrons: 171, mass: 282, name: "Roentgenium-282" },
            { neutrons: 170, mass: 281, name: "Roentgenium-281" },
            { neutrons: 172, mass: 283, name: "Roentgenium-283" },
            { neutrons: 173, mass: 284, name: "Roentgenium-284" },
            { neutrons: 174, mass: 285, name: "Roentgenium-285" }
        ]
    },
    112: {
        name: "Copernicium", symbol: "Cn", mass: 285, requiredNeutrons: 173, requiredElectrons: 112, image: "css/assets/elements/Cn.png", type: "Unknown", state: "Solid",
        isotopes: [
            { neutrons: 173, mass: 285, name: "Copernicium-285" },
            { neutrons: 172, mass: 284, name: "Copernicium-284" },
            { neutrons: 174, mass: 286, name: "Copernicium-286" },
            { neutrons: 175, mass: 287, name: "Copernicium-287" },
            { neutrons: 176, mass: 288, name: "Copernicium-288" }
        ]
    },
    113: {
        name: "Nihonium", symbol: "Nh", mass: 286, requiredNeutrons: 173, requiredElectrons: 113, image: "css/assets/elements/Nh.png", type: "Unknown", state: "Solid",
        isotopes: [
            { neutrons: 173, mass: 286, name: "Nihonium-286" },
            { neutrons: 172, mass: 285, name: "Nihonium-285" },
            { neutrons: 174, mass: 287, name: "Nihonium-287" },
            { neutrons: 175, mass: 288, name: "Nihonium-288" },
            { neutrons: 176, mass: 289, name: "Nihonium-289" }
        ]
    },
    114: {
        name: "Flerovium", symbol: "Fl", mass: 289, requiredNeutrons: 175, requiredElectrons: 114, image: "css/assets/elements/Fl.png", type: "Unknown", state: "Solid",
        isotopes: [
            { neutrons: 175, mass: 289, name: "Flerovium-289" },
            { neutrons: 174, mass: 288, name: "Flerovium-288" },
            { neutrons: 176, mass: 290, name: "Flerovium-290" },
            { neutrons: 177, mass: 291, name: "Flerovium-291" },
            { neutrons: 178, mass: 292, name: "Flerovium-292" }
        ]
    },
    115: {
        name: "Moscovium", symbol: "Mc", mass: 290, requiredNeutrons: 175, requiredElectrons: 115, image: "css/assets/elements/Mc.png", type: "Unknown", state: "Solid",
        isotopes: [
            { neutrons: 175, mass: 290, name: "Moscovium-290" },
            { neutrons: 174, mass: 289, name: "Moscovium-289" },
            { neutrons: 176, mass: 291, name: "Moscovium-291" },
            { neutrons: 177, mass: 292, name: "Moscovium-292" },
            { neutrons: 178, mass: 293, name: "Moscovium-293" }
        ]
    },
    116: {
        name: "Livermorium", symbol: "Lv", mass: 293, requiredNeutrons: 177, requiredElectrons: 116, image: "css/assets/elements/Lv.png", type: "Unknown", state: "Solid",
        isotopes: [
            { neutrons: 177, mass: 293, name: "Livermorium-293" },
            { neutrons: 176, mass: 292, name: "Livermorium-292" },
            { neutrons: 178, mass: 294, name: "Livermorium-294" },
            { neutrons: 179, mass: 295, name: "Livermorium-295" },
            { neutrons: 180, mass: 296, name: "Livermorium-296" }
        ]
    },
    117: {
        name: "Tennessine", symbol: "Ts", mass: 294, requiredNeutrons: 177, requiredElectrons: 117, image: "css/assets/elements/Ts.png", type: "Unknown", state: "Solid",
        isotopes: [
            { neutrons: 177, mass: 294, name: "Tennessine-294" },
            { neutrons: 176, mass: 293, name: "Tennessine-293" },
            { neutrons: 178, mass: 295, name: "Tennessine-295" },
            { neutrons: 179, mass: 296, name: "Tennessine-296" },
            { neutrons: 180, mass: 297, name: "Tennessine-297" }
        ]
    },
    118: {
        name: "Oganesson", symbol: "Og", mass: 294, requiredNeutrons: 176, requiredElectrons: 118, image: "css/assets/elements/Og.png", type: "Unknown", state: "Gas", isotopes: []
    },
}

function syncSliderAndInput(sliderId, inputId, labelId) {
    const slider = document.getElementById(sliderId);
    const input = document.getElementById(inputId);
    const label = document.getElementById(labelId);

    slider.addEventListener("input", function () {
        input.value = this.value;
        label.textContent = this.value;
        updateElement();
    });

    input.addEventListener("input", function () {
        console.log("Input input event triggered for inputId:", inputId);

        let inputValue = parseInt(this.value);
        const sliderMin = parseInt(slider.min);
        const sliderMax = parseInt(slider.max);

        console.log("Input Value:", inputValue);
        console.log("Slider Min:", sliderMin, "Slider Max:", sliderMax);

        if (isNaN(inputValue) || inputValue < sliderMin) {
            inputValue = sliderMin;
        } else if (inputValue > sliderMax) {
            inputValue = sliderMax;
        }

        input.value = inputValue;
        slider.value = inputValue;
        label.textContent = inputValue;

        console.log("Slider & Input value updated to:", inputValue);

        updateElement();
    });

    input.addEventListener("click", function () {
        this.select();
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
    console.log("updateElement function called");

    const protons = parseInt(protonSlider.value);
    const neutrons = parseInt(neutronSlider.value);
    const electrons = parseInt(electronSlider.value);

    console.log(`Protons: ${protons}, Neutrons: ${neutrons}, Electrons: ${electrons}`);

    const elementData = elements[protons];
    console.log("elementData (before check):", elementData);

    let elementToDisplay = null;

    if (elementData) {
        console.log("elementData FOUND for protons:", protons);
        if (neutrons === elementData.requiredNeutrons && electrons === elementData.requiredElectrons) {
            elementToDisplay = elementData;
        } else if (elementData.isotopes && elementData.isotopes.length > 0) {
            for (const isotope of elementData.isotopes) {
                if (neutrons === isotope.neutrons && electrons === elementData.requiredElectrons) {
                    elementToDisplay = isotope;
                    break;
                }
            }
        }
    } else {
        console.log("elementData NOT FOUND for protons:", protons);
    }

    console.log("elementToDisplay (before display):", elementToDisplay);

    if (elementToDisplay) {
        document.getElementById("atomic-number").innerText = protons;
        document.getElementById("isotopic-mass").innerText = (protons + neutrons).toFixed(3);
        document.getElementById("atomic-mass").innerText = elementData.mass;
        document.getElementById("element-name").innerText = `${elementToDisplay.name}`;
        document.getElementById("element-image").src = elementData.image;
        document.getElementById("chemical-symbol").innerText = elementData.symbol;
        document.getElementById("element-type").innerText = elementData.type;
        document.getElementById("Physical-state").innerText = elementData.state;
    } else {
        document.getElementById("atomic-number").innerText = "-";
        document.getElementById("isotopic-mass").innerText = "-";
        document.getElementById("atomic-mass").innerText = "-";
        document.getElementById("element-name").innerText = "Unknown Atom (?)";
        document.getElementById("element-image").src = "css/assets/elements/question-mark.png";
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

    for (let i = 0; i < 5; i++) {
        const orbitLayer = document.createElement("div");
        orbitLayer.className = "orbit-layer";
        atomContainer.appendChild(orbitLayer);
    }

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

    electronsPerShell.forEach((electronsInShell, shellIndex) => {
        if (electronsInShell === 0) return;
        const orbitRadius = (atomSize * 0.078) + (shellIndex * (atomSize * 0.068));

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

    let found = false;

    for (const [atomicNumber, element] of Object.entries(elements)) {
        const elementNameLower = element.name.toLowerCase();
        const elementSymbolLower = element.symbol.toLowerCase();

        if (
            query === atomicNumber ||
            elementSymbolLower === query ||
            elementNameLower.startsWith(query)
        ) {
            protonSlider.value = atomicNumber;
            neutronSlider.value = element.requiredNeutrons;
            electronSlider.value = element.requiredElectrons;

            document.getElementById("proton-input").value = atomicNumber;
            document.getElementById("neutron-input").value = element.requiredNeutrons;
            document.getElementById("electron-input").value = element.requiredElectrons;

            updateElement();
            found = true;
            break;
        }
    }

    if (!found) {
        document.getElementById("atomic-number").innerText = "-";
        document.getElementById("isotopic-mass").innerText = "-";
        document.getElementById("atomic-mass").innerText = "-";
        document.getElementById("element-name").innerText = "عنصر نامشخص (?)";
        document.getElementById("element-image").src = "css/assets/elements/question-mark.png";
        document.getElementById("chemical-symbol").innerText = "?";
        document.getElementById("element-type").innerText = "-";
        document.getElementById("Physical-state").innerText = "-";
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