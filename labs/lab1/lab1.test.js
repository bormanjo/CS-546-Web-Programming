/*
CS 546 WS
John-Craig Borman - "I pledge my honor that I have abided by the Stevens Honor System"
Lab 1
9-1-2018
*/

const lab1 = require("./lab1");

// questionOne tests:
console.log(lab1.questionOne([]));              // Empty array, should be 0
console.log(lab1.questionOne(["a", "b", "c"])); // non-numbers, should be 0
console.log(lab1.questionOne([1, 2, 3]));       // should output 14
console.log(lab1.questionOne([-1, -2, -3]));    // should still be 14
console.log(lab1.questionOne(["a", 5, "c"]));   // one number, should be 25

// questionTwo tests:
console.log(lab1.questionTwo(7)); // should output 13 
console.log(lab1.questionTwo("a")); // should output 0
console.log(lab1.questionTwo(0)); // should output 0 
console.log(lab1.questionTwo(-1)); // should output 0
console.log(lab1.questionTwo(11)); // should output 89

// questionThree tests:
console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere.")); 
// should output 196
console.log(lab1.questionThree("abcdefghijklmnopqrstuvwxyz")); // should be 5
console.log(lab1.questionThree("101010101")); // should be 0
console.log(lab1.questionThree("aaaaaaaaa")); // should be 9
console.log(lab1.questionThree("aeiou"));     // should be 5

// questionFour tests
console.log(lab1.questionFour(10)); // should output 3628800 
console.log(lab1.questionFour(-1)); // should output NaN 
console.log(lab1.questionFour(0)); // should output 1 
console.log(lab1.questionFour(1)); // should output 1 
console.log(lab1.questionFour("a")); // should output NaN 