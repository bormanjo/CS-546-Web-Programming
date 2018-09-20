/*
CS 546 WS
John-Craig Borman - "I pledge my honor that I have abided by the Stevens Honor System"
Lab 2
9-10-2018
*/

const deepEquality = function deepEquality(obj1, obj2){
    // check that each object at every deep level is equivalent

    // Check that objX is provided
    if( obj1 === undefined){
        throw "obj1 was not provided"
    }

    if(obj2 === undefined){
        throw "obj2 was not provided"
    }

    // Check that objX is an object
    if(obj1 !== Object(obj1)){
        throw "obj1 is not an object"
    }

    if(obj2 !== Object(obj2)){
        throw "obj2 is not an object"
    }

    // get the arrays of keys for each object
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    // if the size of the objects do not match
    if(keys1.length !== keys2.length){
        return false; // return false, inequality is implied
    } else {
        
        // if here, then key lengths must match
        for(var i = 0; i < keys1.length; i++){

            // if the key names are different, then inequality is implied
            if(keys1[i] !== keys2[i]){
                return false;
            }

            // get the property of the matching key
            let prop1 = obj1[keys1[i]];
            let prop2 = obj2[keys2[i]];

            // if the current properties are both objects
            if(prop1 === Object(prop1) && prop2 === Object(prop2)){
                // get the deep equality of these objects

                // if not deepEqual
                if(!deepEquality(prop1, prop2)){
                    return false; // return false
                }
            } else {
                // the current properties are both *not* objects

                // if both properties are arrays
                if(Array.isArray(prop1) && Array.isArray(prop2)){
                    if(prop1.length !== prop2.length){
                        return false; // difference in array length implies inequality
                    }

                    for(var j = 0; j < prop1.length; j++){
                        if(prop1[j] !== prop2[j]){
                            return false; // array values are different
                        }
                    }
                }

                // if properties are not arrays, check for primitive equality
                if(prop1 !== prop2){
                    return false; // return false
                }
            }
        }
    }

    // return true as all object properties have been checked
    return true;

}


const uniqueElements = function uniqueElements(arr){
    // Counts the number of unique elements in the given array

    if(arr === undefined){ throw "arr was not provided"}

    if(!Array.isArray(arr)){ throw "arr is not an array"}

    // create a new unique elements array
    let u = [];

    // for each candidate element in arr
    arr.forEach(element => {

        // if u is empty, add the element
        if(u.length === 0){
            u.push(element);
        }

        // set flag to false
        let flag = false;

        // iterate through the unique elements array
        u.forEach(uElement => {

            // if the candidate element is equal to the current element
            if(uElement === element){
                flag = true; // set flag to true
            }
        })

        // if candidate element was not equal to any element in the unique elements
        if(!flag){
            u.push(element); // add the candidate element
        }
    });

    // return the length of the unique elements
    return u.length;
}


const countOfEachCharacterInString = function countOfEachCharacterInString(str){
    // Returns an object containing the unique character as a key and the value as the count of appearances in str

    if(str === undefined){ throw "str was not provided"}

    if(typeof str !== "string"){ throw "str is not a string"}

    // create a new, empty counts object
    let counts = new Object();
    
    // for each character in the string
    for(var i = 0; i < str.length; i++){

        // if the char has been registered
        if(counts.hasOwnProperty(str.charAt(i))){
           counts[str.charAt(i)] += 1; // add 1 to the count
        } else {
            counts[str.charAt(i)] = 1; // register the char 
        }
    }

    // return counts
    return counts;
}

module.exports = {
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
};

