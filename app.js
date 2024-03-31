// 88.................................
// This function rounds a decimal number to the nearest whole number
function roundToNearestInteger(num) {
    return Math.round(num); // Rounds the number
}
// Example: Rounding a decimal
console.log(roundToNearestInteger(5.6)); // Outputs: 6
console.log(roundToNearestInteger(2.3)); // Outputs: 2
// This shows how the function rounds numbers either up or down.
// 89.................................
// This function changes a string into a number
function convertStringToNumber(str) {
    return parseFloat(str); // Converts the string to a number
}
// Example: Turning a numeric string into a real number
console.log(convertStringToNumber("222.10")); // Outputs: 222.1
console.log(convertStringToNumber("100")); // Outputs: 100
// We're taking strings that look like numbers and turning them into actual numbers.
// 90..........................................
// This function checks if a value is Not a Number (NaN)
function isValueNaN(value) {
    return isNaN(value); // Checks and returns true if the value is NaN, false otherwise
}
// Examples: Checking different values
console.log(isValueNaN("hi")); // Outputs: true, because "hello" isn't a number
console.log(isValueNaN(555)); // Outputs: false, because 123 is a number
// This way, we can guard against unexpected non-numeric values in our calculations or inputs.
