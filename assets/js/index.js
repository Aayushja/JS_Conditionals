/* Exercises: Level 1 

Q. Get user input using prompt (“Enter your age :”). If user is 18 or older, give feedback: 'You are old 
enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs 
to turn 18. 
o Enter your age: 30, you are old enough to drive. 
o Enter your age: 15, you are left with 3 years to drive */

/*
const age = prompt("Enter your age: ");

// check if age is greater than 18
if (age > 18) {
  console.log("you are old enough to drive.");
}
// if age is not greater than 18
else {
    console.log(`you are left with ${18 - age} years to drive`)
}
*/



/* Q. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result 
to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. 
o Enter your age: 30, you are 5 years older than me. */

/*
//let age is 25
const age = prompt("Enter your age: ");

// check if age is greater than 25
if (age > 25) {
    console.log(`you are ${age-25} years older than me`)
}

// if age is not greater than 25
else {
    console.log(`you are ${25 - age} years younger than me`)
}
*/





/* Q. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways 
o using if else 
o ternary operator. 
o let a = 4, let b = 3, 4 is greater than 3  */

/*
const a = prompt("Enter value of a: ");
const b = prompt("Enter value of b: ");

if (a > b) {
    console.log(`${a} is grater than ${b}`)
}

else {
    console.log(`${a} is smaller than ${b}`)
}
*/






/* Q. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or 
odd? 
o Enter a number: 2, 2 is an even number 
o  Enter a number: 9, 9 is an odd number.
*/

/*
const num = prompt("Enter number: ");

if (num % 2 == 0) {
    console.log(`${num} is even number`)
}

else {
    console.log(`${num} is odd number`)
}
*/




/* Exercises: Level 2 

Q. Write a code which can give grades to students according to theirs scores: 
o 80-100, A 
o 70-89, B 
o 60-69, C 
o 50-59, D 
o 0-49, F */ 

/*
var score;
score= parseInt(prompt("enter score"));
if (score>= 80)
    console.log("A");
else if(score>=70)
console.log("B");
else if(score>=60)
console.log("c");
else if(score>=50)
console.log("D");
else
console.log("F");
*/





/* Q. Check if the season is Autumn, Winter, Spring or Summer. If the user input is : 
o September, October or November, the season is Autumn. 
o December, January or February, the season is Winter. 
o March, April or May, the season is Spring 
o June, July or August, the season is Summer */
// if else if else 


const mon = prompt("Enter month: ");

if (mon === 'September' || 'October'||'November') { 
 console.log('The season is Autumn') 
} else if (mon === 'December'||'January'||'February') { 
 console.log('The season is Winter') 
} else if (mon === 'March'||'April'||'May') { 
 console.log('The season is Spring') 
} else if (mon === 'June'||' July'||'August') { 
    console.log('The season is Summer ') 
} else { 
 console.log('No season') 
}





/* Q. Check if a day is weekend day or a working day. Your script will take day as an input. 
o What is the day today? Saturday, Saturday is a weekend. 
o What is the day today? SaturDaY, Saturday is a weekend. 
o What is the day today? Friday, Friday is a working day. 
o What is the day today? FrIDAy, Friday is a working day. 
 */

/*
let dayUserInput = prompt('What is the day today ?') 
let day = dayUserInput.toLowerCase() 
switch (day) { 
 case 'monday': 
 console.log(`${day} is working day`) 
 break 
 case 'tuesday': 
 console.log(`${day} is working day`) 
 break 
 case 'wednesday': 
 console.log(`${day} is working day`) 
 break 
 case 'thursday': 
 console.log(`${day} is working day`) 
 break 
 case 'friday': 
 console.log(`${day} is working day`) 
 break 
 case 'saturday': 
 console.log(`${day} is weekend`) 
 break 
 case 'sunday': 
 console.log(`${day} is weekend`) }
 */




 /* Exercises: Level 3 

Q. Write a program which tells the number of days in a month. 
o Enter a month: January, January has 31 days. 
o Enter a month: JANUARY, January has 31 day 
o Enter a month: February, February has 28 days. 
o Enter a month: February, February has 28 days.  */

/*
let monthUserInput = prompt('Enter a month:') 
let month = monthUserInput.toLowerCase() 
switch (month) { 
 case 'january': 
 console.log(`${month} has 31 days`) 
 break 
 case 'february': 
 console.log(`${month} has 28 days`) 
 break 
 case 'march': 
 console.log(`${month} has 31 day`) 
 break 
 case 'april': 
 console.log(`${month} has 30 day`) 
 break 
 case 'may': 
 console.log(`${month} has 31 day`) 
 break 
 case '	june': 
 console.log(`${month} has 30 day`)  
 break 
 case 'july': 
 console.log(`${month} has 31 day`) 
 break 
 case 'august': 
 console.log(`${month} has 31 day`) 
 break 
 case 'september': 
 console.log(`${month} has 30 day`) 
 break 
 case 'october': 
 console.log(`${month} has 31 day`) 
 break 
 case 'november': 
 console.log(`${month} has 30 day`) 
 break 
 case 'december': 
 console.log(`${month} has 31 day`) 
 }
 */



 /* Q. Write a program which tells the number of days in a month, now consider leap year. */

/*
 let monthUserInput = prompt('Enter a month:') 
let month = monthUserInput.toLowerCase() 
switch (month) { 
 case 'january': 
 console.log(`${month} has 31 days`) 
 break 
 case 'february': 
 console.log(`${month} has 29 days`) 
 break 
 case 'march': 
 console.log(`${month} has 31 day`) 
 break 
 case 'april': 
 console.log(`${month} has 30 day`) 
 break 
 case 'may': 
 console.log(`${month} has 31 day`) 
 break 
 case '	june': 
 console.log(`${month} has 30 day`)  
 break 
 case 'july': 
 console.log(`${month} has 31 day`) 
 break 
 case 'august': 
 console.log(`${month} has 31 day`) 
 break 
 case 'september': 
 console.log(`${month} has 30 day`) 
 break 
 case 'october': 
 console.log(`${month} has 31 day`) 
 break 
 case 'november': 
 console.log(`${month} has 30 day`) 
 break 
 case 'december': 
 console.log(`${month} has 31 day`) 
 }
 */