/* 
 Create a variable called "sentence" that has an empty string, then to the array of point 
 a) loop through it with a for loop to save each word within the sentence variable. 
 At the end show a single alert with the entire string.
*/
var sentence = " ";
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
for (let i = 0; i < days.length; i++) {
    sentence += days[i].concat(" ");
}
alert(sentence);