/*
 Create a sum function that receives two numeric values and returns the result. 
 Execute the function and save the result to a variable, displaying the value 
 of that variable in the browser console.
 */
var numOne = parseFloat(prompt("ingrese el 1º número:"));
var numTwo = parseFloat(prompt("ingrese el 2º número:"));
result = sum(numOne, numTwo);
console.log("The result of sum is " + result);

function sum(num1, num2) {
    var result = num1 + num2;
    return result;
}