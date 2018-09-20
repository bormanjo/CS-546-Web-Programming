const bluebird = require("bluebird");
const Promise = bluebird.Promise

async function getFileAsString(path){
    /*
        A function that, given a path, returns a promise (implied by an async function) 
        resolving to a string containing the contents of a file 
    */
    
    // One or more files?

    // if no path -> throw 

    // if errors during file read, pass the error to the rejection callback
}

async function getFileAsJSON(path){
    /* A function that, given a path, returns a promise resolving to a JS object */
    
    // if no path -> throw

    // if errors during file read, pass the error to the rejection callback
}

async function saveStringToFile(path, text){
    /* 
        A function that, given a string (text) and a file path, writes the string 
        to the file specified by path. Resolves to true when completed. 
    */

    // if no path -> throw

    // if no text -> throw

    // if errors during file write, pass the error to the rejection callback
}

async function saveJSONToFile(path, obj){
    /* 
        A function that, given a path and JS Object, converts the obj to a JSON 
        string and writes to the file specified by path 
    */

    // if no path -> throw

    // if no text -> throw

     // if errors during file write, pass the error to the rejection callback
}




