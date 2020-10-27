/*
 Create a string variable with at least 10 characters and generate a new string 
 with the first uppercase letter and the others lowercase. Save the result to a 
 new variable (use substring, toUpperCase, toLowerCase, and the + operator).
 */
var str = "yOU CHANGE YOUR LIFE BY CHANGING YOUR HEART";
var upperLowStr = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
console.log(upperLowStr);