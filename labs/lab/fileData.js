const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path)
{
    /*
        A function that, given a path, returns a promise (implied by an async function) 
        resolving to a string containing the contents of a file 
    */

    // if no path -> throw 
    if(!path){
        throw "path not provided.";
    } else {
        if(typeof path !== "string"){
            throw "path is not a string"
        }
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
    if(!path){
        throw "path not provided.";
    } else {
        // check type
        if(typeof path !== "string"){
            throw "path is not a string"
        }
    }

    // if no text -> throw
    if(!text){
        throw "text not provided.";
    } else {
        // check type
        if(typeof text !== "string"){
            throw "text is not a string"
        }
    }

    // if errors during file write, pass the error to the rejection callback
    await fs.writeFileAsync(path, text);

    return true;
}

async function saveJSONToFile(path, obj){
    /* 
        A function that, given a path and JS Object, converts the obj to a JSON 
        string and writes to the file specified by path 
    */

    if(typeof obj !== "object"){
        throw "obj is not an object"
    }

    let string = JSON.stringify(obj, null, 4);

    await saveStringToFile(path, string);

    return true;
}

/* 
getFileAsString("./test1.txt").then(v => console.log("test1:", v)).catch(e => console.log("test1:", e));
//getFileAsJSON("./package-lock.json").then(v => console.log(v)).catch(e => console.log(e));

const to_write_string = "this is a string \n to write \n \t hello";
const to_write_object = {
    param1: 10,
    param2:5,
    name: "jcb"
}

saveStringToFile("./test3.txt", to_write_string).then(
    v => console.log("Test 3 successful?: ", v)
);

saveJSONToFile("./test4.json", to_write_string).then(
    v => console.log("Test 4 successful?: ", v)
).catch(e => console.log("Test 4 successful?: ", e));
*/

module.exports = {
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
}
