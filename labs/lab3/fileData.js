const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path){
    /*
        A function that, given a path, returns a promise (implied by an async function) 
        resolving to a string containing the contents of a file 
    */

    // if no path -> throw 
    if(!path){
        throw "path not provided.";
    }

    const fileContent = await fs.readFileAsync(path, "utf-8");

    return fileContent;
}

async function getFileAsJSON(path){
    /* A function that, given a path, returns a promise resolving to a JS object */
    
    const fileContent = await getFileAsString(path);

    const object = JSON.parse(fileContent);

    return object;
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

getFileAsString("./test.txt").then(v => console.log(v));
getFileAsJSON("./package-lock.json").then(v => console.log(v));

