/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number. */


function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
        
      return Number(inputString[0]) 
    }


/*Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.*/

function getGrade (s1, s2, s3) {
  // Code here
  
  const avg = (s1 + s2 + s3) / 3
  
  if(avg >= 90){
    return `A`
  }else if( (avg < 90 && avg >=80)   ){
    return `B`
  }else if( (avg < 80 && avg >=70)   ){
    return `C`
  }else if( (avg < 70 && avg >=60)   ){
    return `D`
  } else{
    return `F`
  }
  
}

/*Write a function that takes an array of numbers and returns the sum of the numbers. 
The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0. */

function sum (numbers) {
  "use strict";

if(numbers.length < 1){
  return 0
} else{
  return numbers.reduce((accum, ele)=>{
    return accum + ele
  })
}

};



