/*
 Create a string variable with at least 10 characters and generate 
 a new string with the last 3 characters by saving the result to a new variable (use substring).
 */
var str = "Try to be a rainbow in someone's cloud";
var subString = str.substring(str.length, str.length - 3);
console.log(subString);