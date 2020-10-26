/*
 Remove an element from the beginning and end of the array (use shift and pop).
 */
var months = ["Sachary", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Covid"];
var delAtStart = months.shift();
var delAtEnd = months.pop();
console.log("The element removed at the beginning of the array is " + delAtStart + " and the element removed at the end is " + delAtEnd);