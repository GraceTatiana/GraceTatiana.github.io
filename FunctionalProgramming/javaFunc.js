 "use strict";

/* 4 Define a function sum() and a function multiply() 
that sums and multiplies (respectively) all the numbers in an array of numbers*/

let sum = (arr) => arr.reduce((x, y) => x + y, 0);
let multiply = (arr) => arr.reduce((x, y) => x * y, 1);

/* 5 Define a function reverse() that computes the reversal of a string.*/
let reverse = (str) => [...str].reverse().join("");

/* 7 Write a function filterLongWords() that takes an array of words and
 an integer i and returns the array of words that are longer */

 let filterLongWords = (arrString, int) => arrString.filter(arrString.length > int);

