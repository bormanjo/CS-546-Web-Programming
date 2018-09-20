/*
CS 546 WS
John-Craig Borman - "I pledge my honor that I have abided by the Stevens Honor System"
Lab 1
9-1-2018
*/

const questionOne = function questionOne(arr) {
    // Calculates the sum of squares of all numbers in arr and returns the result
    if(!Array.isArray(arr)) {return 0}

    if(arr.length === 0){return 0}
    
    return arr.reduce( (sum, element) => {
        if(isFinite(element)){
            return sum + (Math.pow(element, 2))
        } else {
            return sum
        }
    }, 0) // set initial value to 0
}

const questionTwo = function questionTwo(num) { 
    // Calculates the fibonacci sequence according to the index number provided
    const fib = function fib(n){
        if( n <= 1){
            return n
        } else {
            return fib(n - 1) + fib(n - 2)
        }
    }

    if(!isFinite(num) || num < 0){
        return 0
    } else {
        return fib(num)
    }
}

const questionThree = function questionThree(text) {
    // Calculates and returns the number of vowe;s in the provided string
    
    const vowels = ["a", "e", "i", "o", "u"]
    let counts = [0, 0, 0, 0, 0]

    counts = vowels.map( x => {
        return text.split(x).length - 1
    })

    return counts.reduce( (sum, x) => sum + x, 0)
}

const questionFour = function questionFour(num) {
    // Calculates and returns the factiorial of 'num'

    const factiorial = function factiorial(n){
        if(n <= 1){
            return 1
        } else {
            return n * factiorial(n - 1)
        }
    }

    if(isNaN(num) || num < 0) {return NaN}

    return factiorial(num)
}

module.exports = {
    firstName: "John-Craig", 
    lastName: "Borman", 
    studentId: "10402229",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};