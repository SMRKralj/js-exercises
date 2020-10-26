/*
 Create a variable of type string with at least 2 long words 
 (10 characters and some space between the middle). 
 Use the methods in the previous exercises to generate a new string that has the first letter of both 
 uppercase words and the other lowercase letters (use indexOf, substring, toUpperCase, toLowerCase, 
 and the + operator).
 */
var str = "eMBARRASSED aCCOMMODATION"
var upperLowerStr = str.substring(0, 1).toUpperCase() + str.substring(1, str.indexOf(" ")).toLowerCase() + " " + str.substring(str.indexOf(" ") + 1, str.indexOf(" ") + 2).toUpperCase() + str.substring(str.indexOf(" ") + 2).toLowerCase();
console.log(upperLowerStr);