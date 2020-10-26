/*
To the sum function of exercise 6b) add a call that validates that the numbers are integers. 
In case there are decimals display an alert with the error and return the converted number to integer (rounded).
 */

var numOne = parseFloat(prompt("ingrese el 1º número:"));
var numTwo = parseFloat(prompt("ingrese el 2º número:"));
var result = sum(numOne, numTwo);
console.log("The result is " + result);


function sum(num1, num2) {
    if (isNaN(num1) || (isNaN(num2))) {
        alert("One or both parameters have an error");
        return NaN;
    }
    var x = validateInteger(num1);
    var y = validateInteger(num2);
    return x + y;

}

function validateInteger(num) {
    if (!(Number.isInteger(num))) {
        alert("It's not an integer number")
        return Math.round(num);
    }
}