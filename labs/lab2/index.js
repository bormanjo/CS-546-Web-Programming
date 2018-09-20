/*
CS 546 WS
John-Craig Borman - "I pledge my honor that I have abided by the Stevens Honor System"
Lab 2
9-10-2018
*/

const geometry = require("./geometry");
const utilities = require("./utilities");

// Testing geometry.js functions

// volumeOfRectangularPrism
// Test 1
try{
    console.log(geometry.volumeOfRectangularPrism("a", 1, 1)); // should be: Error: length parameter is not a number
} catch(e) {
    console.log("Error: " + e);
}

// Test 2
try{
    console.log(geometry.volumeOfRectangularPrism(1, -1, 1)); // should be: Error: width parameter is negative
} catch(e) {
    console.log("Error: " + e);
}

// Test 3
try{
    console.log(geometry.volumeOfRectangularPrism(1, 1, Infinity)); // should be: Error: height parameter is not finite
} catch(e) {
    console.log("Error: " + e);
}

// Test 4
try{
    console.log(geometry.volumeOfRectangularPrism(1, 1, 1)); // should be 1
} catch(e) {
    console.log("Error: " + e);
}

// Test 5
try{
    console.log(geometry.volumeOfRectangularPrism(3, 4, 5)); // should be 60
} catch(e) {
    console.log("Error: " + e);
}


// surfaceAreaOfRectangularPrism
// Test 1
try{
    console.log(geometry.surfaceAreaOfRectangularPrism("a", 1, 1)); // should be: Error: length parameter is not a number
} catch(e) {
    console.log("Error: " + e);
}

// Test 2
try{
    console.log(geometry.surfaceAreaOfRectangularPrism(1, -1, 1)); // should be: Error: width parameter is negative
} catch(e) {
    console.log("Error: " + e);
}

// Test 3
try{
    console.log(geometry.surfaceAreaOfRectangularPrism(1, 1, Infinity)); // should be: Error: height parameter is not finite
} catch(e) {
    console.log("Error: " + e);
}

// Test 4
try{
    console.log(geometry.surfaceAreaOfRectangularPrism(1, 1, 1)); // should be 6
} catch(e) {
    console.log("Error: " + e);
}

// Test 5
try{
    console.log(geometry.surfaceAreaOfRectangularPrism(3, 4, 5)); // should be 94
} catch(e) {
    console.log("Error: " + e);
}

// volumeOfSphere
// Test 1
try{
    console.log(geometry.volumeOfSphere("a")); // should be: Error: radius parameter is not a number
} catch(e) {
    console.log("Error: " + e);
}

// Test 2
try{
    console.log(geometry.volumeOfSphere(-1)); // should be: Error: radius parameter is negative
} catch(e) {
    console.log("Error: " + e);
}

// Test 3
try{
    console.log(geometry.volumeOfSphere(Infinity)); // should be: Error: radius parameter is not finite
} catch(e) {
    console.log("Error: " + e);
}

// Test 4
try{
    console.log(geometry.volumeOfSphere(1)); // should be 4.18879...
} catch(e) {
    console.log("Error: " + e);
}

// Test 5
try{
    console.log(geometry.volumeOfSphere(10)); // should be 4188.790247...
} catch(e) {
    console.log("Error: " + e);
}

// surfaceAreaOfSphere
// Test 1
try{
    console.log(geometry.surfaceAreaOfSphere("a")); // should be: Error: radius parameter is not a number
} catch(e) {
    console.log("Error: " + e);
}

// Test 2
try{
    console.log(geometry.surfaceAreaOfSphere(-1)); // should be: Error: radius parameter is negative
} catch(e) {
    console.log("Error: " + e);
}

// Test 3
try{
    console.log(geometry.surfaceAreaOfSphere(Infinity)); // should be: Error: radius parameter is not finite
} catch(e) {
    console.log("Error: " + e);
}

// Test 4
try{
    console.log(geometry.surfaceAreaOfSphere(1)); // should be 12.56637
} catch(e) {
    console.log("Error: " + e);
}

// Test 5
try{
    console.log(geometry.surfaceAreaOfSphere(10)); // should be 1256.6370614...
} catch(e) {
    console.log("Error: " + e);
}

// Testing utilities.js functions

// deepEquality

const badObj = 52;

const obj1 = {a: 2, b: 3};
const obj2 = {a: [1,2], b: "3, 4"};
const obj3 = {a: [1,2], b: "3, 4"};
const obj4 = {a: 2, b: 3};

const objNew = new Object();

// Test 1
try{
    console.log(utilities.deepEquality(badObj, obj1)); // should be: Error: obj1 is not an object
} catch(e) {
    console.log("Error: " + e);
}

// Test 2
try{
    console.log(utilities.deepEquality(obj1)); // should be: Error obj2 was not provided
} catch(e) {
    console.log("Error: " + e);
}

// Test 3
try{
    console.log(utilities.deepEquality(obj1, obj2)); // should be: false
} catch(e) {
    console.log("Error: " + e);
}

// Test 4
try{
    console.log(utilities.deepEquality(obj2, obj3)); // should be true
} catch(e) {
    console.log("Error: " + e);
}

// Test 5
try{
    console.log(utilities.deepEquality(objNew, objNew)); // should be true
} catch(e) {
    console.log("Error: " + e);
}

// uniqueElements

const testArr1 = [];
const testArr2 = ["a", "a", "b", "a", "b", "c"];
const testArr3 = [1, 1, 2, 2, 1, '2', 4];
const testArr4 = [4, '2', 1, 2, 2, 1, 1];

// Test 1
try{
    console.log(utilities.uniqueElements()); // should be: Error: arr was not provided
} catch(e) {
    console.log("Error: " + e);
}

// Test 2
try{
    console.log(utilities.uniqueElements(testArr1)); // should be: 0
} catch(e) {
    console.log("Error: " + e);
}

// Test 3
try{
    console.log(utilities.uniqueElements(testArr2)); // should be: 3
} catch(e) {
    console.log("Error: " + e);
}

// Test 4
try{
    console.log(utilities.uniqueElements(testArr3)); // should be 4
} catch(e) {
    console.log("Error: " + e);
}

// Test 5
try{
    console.log(utilities.uniqueElements(testArr4)); // should be 4
} catch(e) {
    console.log("Error: " + e);
}

// countOfEachCharacterInString

const test1 = "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
const test2 = "The Jets won last night, wow.";
const test3 = "Hi, is there a pie in the oven?";
const test4 = "Hello, the pie is in the oven";

// Test 1
try{
    console.log(utilities.countOfEachCharacterInString()); // should be: Error: str was not provided
} catch(e) {
    console.log("Error: " + e);
}

// Test 2
try{
    console.log(utilities.countOfEachCharacterInString(test1)); // should be: { '!': 29 }
} catch(e) {
    console.log("Error: " + e);
}

// Test 3
try{
    console.log(utilities.countOfEachCharacterInString(test2));
} catch(e) {
    console.log("Error: " + e);
}

/* Should be:
{ T: 1,
  h: 2,
  e: 2,
  ' ': 5,
  J: 1,
  t: 3,
  s: 2,
  w: 3,
  o: 2,
  n: 2,
  l: 1,
  a: 1,
  i: 1,
  g: 1,
  ',': 1,
  '.': 1 }
*/

// Test 4
try{
    console.log(utilities.countOfEachCharacterInString(test3)); // should be 4
} catch(e) {
    console.log("Error: " + e);
}

/* Should be:
{ H: 1,
  i: 4,
  ',': 1,
  ' ': 7,
  s: 1,
  t: 2,
  h: 2,
  e: 5,
  r: 1,
  a: 1,
  p: 1,
  n: 2,
  o: 1,
  v: 1,
  '?': 1 }
*/

// Test 5
try{
    console.log(utilities.countOfEachCharacterInString(test4)); // should be 4
} catch(e) {
    console.log("Error: " + e);
}

/* Should be:
{ H: 1,
  e: 5,
  l: 2,
  o: 2,
  ',': 1,
  ' ': 6,
  t: 2,
  h: 2,
  p: 1,
  i: 3,
  s: 1,
  n: 2,
  v: 1 }
*/