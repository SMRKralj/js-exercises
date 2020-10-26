/*
 Create an "Age" variable that contains an integer between 0 and 100 and displays the following alert messages:
 "Baby" if the age is less than 2 years
 "Child" if the age is between 2 and 12 years old
 "Teen" if the age is between 13 and 19 years old
 "Young" if the age is between 20 and 30 years old
 "Adult" between 31 and 60 years old
 "Older Adult" between the age of 61 and 75
 "Elder" if you are over 75
*/
var age = Math.floor(Math.random() * 101);

//to verificate var age
console.log(age);

if (age < 2) {
    alert("Baby");
} else if ((age >= 2) && (age <= 12)) {
    alert("Child");
} else if ((age >= 13) && (age <= 19)) {
    alert("Teen");
} else if ((age >= 20) && (age <= 30)) {
    alert("Young");
} else if ((age >= 31) && (age <= 60)) {
    alert("Adult");
} else if ((age >= 61) && (age <= 75)) {
    alert("Older Adult");
} else { alert("Elder"); }