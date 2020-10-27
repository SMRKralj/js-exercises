/*
 Create a validate integer function that receives a number as a parameter and true if it is an integer.
 */

var num = parseFloat(prompt("Ingrese un número:"));

var result = validateInteger(num);
console.log(result);


function validateInteger(num) {
    if (num % 1 === 0) {
        alert(true);
        return true;
    } else {
        alert(false);
    }
}