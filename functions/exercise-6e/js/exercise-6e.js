/*
 Convert the validation of exercise 6b) to a separate function and call it within the sum 
 function by proving that everything continues to work the same.
 */

var numOne = parseFloat(prompt("ingrese el 1º número:"));
var numTwo = parseFloat(prompt("ingrese el 2º número:"));
var result = sum(numOne, numTwo);
console.log("The result is " + result);


function sum(numOne, numTwo) {
    var sum = validateNumber(numOne, numTwo);
    return sum;
}

function validateNumber(num1, num2) {
    if (isNaN(numOne) || (isNaN(numTwo))) {
        alert("One or both parameters have an error");
        return NaN;
    } else {
        return numOne + numTwo;
    }
}