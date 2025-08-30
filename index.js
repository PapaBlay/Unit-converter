/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputArea = document.getElementById("input-area")
const convertBtn = document.getElementById("convert-btn")
let length = document.getElementById("display-length")
let volume = document.getElementById("display-volume")
let mass = document.getElementById("display-mass")

convertBtn.addEventListener("click", function() {
    if (isNaN(inputArea.value) || inputArea.value == "") {
        invalidEntry()
    }else {
        convertLength()
        convertVolume()
        convertMass()
        anotherConversion()
    }
})

function convertLength() {
    let metersToFeet = inputArea.value * 3.281
    let feetToMeters = inputArea.value / 3.281
    return length.innerHTML += `<h4 class="converted">${inputArea.value} meters = ${metersToFeet.toFixed(3)} feet | ${inputArea.value} feet = ${feetToMeters.toFixed(3)} meters</h4>`
}

function convertVolume() {
    let litresToGallons = inputArea.value * 0.264
    let gallonsToLiters = inputArea.value / 0.264
    return volume.innerHTML += `<h4 class="converted">${inputArea.value} liters = ${litresToGallons.toFixed(3)} gallons | ${inputArea.value} gallons = ${gallonsToLiters.toFixed(3)} liters</h4>`


}

function convertMass() {
    let kilosToPounds = inputArea.value * 2.204
    let poundsToKilos = inputArea.value / 2.204
    return mass.innerHTML += `<h4 class="converted">${inputArea.value} kilos = ${kilosToPounds.toFixed(3)} pounds | ${inputArea.value} pounds = ${poundsToKilos.toFixed(3)} kilos</h4>`
}

function anotherConversion() {
    length.innerHTML = '<h3>Length (Meter/Feet)</h3>'
    volume.innerHTML = '<h3>Volume (Liters/Gallons)</h3>'
    mass.innerHTML = '<h3>Mass (Kilograms/Pounds)</h3>'
    convertLength()
    convertVolume()
    convertMass()

}

function invalidEntry() {
    length.innerHTML = '<h3>Length (Meter/Feet)</h3>'
    volume.innerHTML = '<h3>Volume (Liters/Gallons)</h3>'
    mass.innerHTML = '<h3>Mass (Kilograms/Pounds)</h3>'
}
