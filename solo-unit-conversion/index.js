/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const numberInput = document.getElementById("input-el");
const convertBtn = document.getElementById("header-btn");
const lengthP = document.getElementById("length");
const volumeP = document.getElementById("volume");
const massP = document.getElementById("mass");


convertBtn.addEventListener("click", function() {
     let finalNumber = numberInput.value;
     lengthP.textContent = `${finalNumber} meters = ${(finalNumber * 3.281).toFixed(3)} feet | ${finalNumber} feet = ${(finalNumber / 3.281).toFixed(3)} meters`;
     volumeP.textContent = `${finalNumber} liters = ${(finalNumber * 0.264).toFixed(3)} gallons | ${finalNumber} gallons = ${(finalNumber / 0.264).toFixed(3)} liters`;
     massP.textContent = `${finalNumber} kilos = ${(finalNumber * 2.204).toFixed(3)} pounds | ${finalNumber} kilos = ${(finalNumber / 2.204).toFixed(3)} pounds`;
     
})
