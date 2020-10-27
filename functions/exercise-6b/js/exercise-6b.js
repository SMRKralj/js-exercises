/*
 To the previous sum function, add validation to control whether any of the parameters are not a number, 
 display an alert clarifying that one of the parameters fails, and return the NaN value as a result.
 */

var numOne = parseFloat(prompt("ingrese el 1º número:"));
var numTwo = parseFloat(prompt("ingrese el 2º número:"));
var result = sum(numOne, numTwo);
console.log("The result is " + result);


function sum(numOne, numTwo) {
    if ((typeof numOne == "number") || (typeof numTwo == "number")) {
        alert("One or both parameters have an error");
        return NaN;
    } else {
        return numOne + numTwo;
    }
}