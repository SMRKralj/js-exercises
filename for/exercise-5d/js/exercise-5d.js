/*
 Create an empty array with a for loop of 10 repetitions fill the array 
 with the repeating number, i.e. at the end of the execution of the for loop 
 there should be 10 elements within the array, from the number 0 to the number 9. 
 Display by the browser console the final array (use console.log).
*/
var numbers = [];
for (let i = 0; i < 10; i++) {
    numbers[i] = i;
}
console.log(numbers.toString());