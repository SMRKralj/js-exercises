/*
 To the previous array convert the first letter of each word to uppercase 
 and display an alert for each modified word.
 */
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday"];
for (let i = 0; i < days.length; i++) {
    days[i] = days[i][0].toUpperCase().concat(days[i].slice(1));
    alert(days[i].toString());
}