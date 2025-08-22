let inputEl = document.querySelector("#input-el")
let buttonEl = document.querySelector("#button-el")
let lengthEl = document.querySelector("#meter-feet")
let volumeEl = document.querySelector("#liters-gallons")
let massEl = document.querySelector("#kilograms-pounds")
let inputValue = ""

buttonEl.addEventListener('click', function () {
    inputValue = inputEl.value
    let liter = (inputValue * 0.264).toFixed(3)
    let gallon = (inputValue * 3.785).toFixed(3)
    let feet = (inputValue * 3.281).toFixed(3)
    let meter = (inputValue * 0.304).toFixed(3)
    let kilo = (inputValue * 2.204).toFixed(3)
    let pound = (inputValue * 0.453).toFixed(3)

    lengthEl.textContent = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meter} meters`
    volumeEl.textContent = `${inputValue} liters = ${liter} gallons | ${inputValue} gallons = ${gallon} liters`
    massEl.textContent = `${inputValue} kilos = ${kilo} pounds | ${inputValue} pounds = ${pound} kilos`
})