/*
CS 546 WS
John-Craig Borman - "I pledge my honor that I have abided by the Stevens Honor System"
Lab 2
9-10-2018
*/

const check_num = function check_num(x){
    // Internal function for checking that a parameter 'x' is a valid geometric distance

    if(x === undefined){
        return "parameter was not provided"
    }

    // x must be a number
    if(isNaN(x)){
        return "parameter is not a number";
    }

    // x must be finite
    if(!isFinite(x)){
        return "parameter is not finite";
    }

    // x must be non-negative
    if(x < 0){
        return "parameter is negative";
    }

    // x is valid
    return "valid";
}


const volumeOfRectangularPrism = function volumeOfRectangularPrism(length, width, height){
    // Calculates the volume of a rectangular prism
    
    // Check that parameters are valid numbers
    let vars = ['length', 'width', 'height'];
    let params = [length, width, height];
    let valid = [null, null, null];
    
    let i;
    for(i = 0; i < params.length; i++){
        valid[i] = check_num(params[i]);
        if(valid[i] !== "valid"){
            throw vars[i] + " " + valid[i];
        }
    }

    return params.reduce( (accum, current) => accum * current);
}


const surfaceAreaOfRectangularPrism = function surfaceAreaOfRectangularPrism(length, width, height){
    // Calculates the surface area of a rectangular prism
    
    // Check that parameters are valid numbers
    let vars = ['length', 'width', 'height'];
    let params = [length, width, height];
    let valid = [null, null, null];
    
    let i;
    for(i = 0; i < params.length; i++){
        valid[i] = check_num(params[i]);
        if(valid[i] !== "valid"){
            throw vars[i] + " " + valid[i];
        }
    }

    // 2lw + 2lh + 2wh 
    return (2 * length * width) + (2 * length * height) + (2 * width * height);
}


const volumeOfSphere = function volumeOfSphere(radius){
    // Calculates the volume of a sphere

    // Check that parameter is a valid number
    let valid = check_num(radius);
    if(valid !== "valid"){
        throw "radius " + valid;
    }

    // (4/3) * pi * r^3
    return (4.0 / 3.0) * Math.PI * Math.pow(radius, 3) 
}


const surfaceAreaOfSphere = function surfaceAreaOfSphere(radius){
    // Calculates the surface area of a sphere

    // Check that parameter is a valid number
    let valid = check_num(radius);
    if(valid !== "valid"){
        throw "radius " + valid;
    }

    // 2 * pi * r^2
    return 4.0 * Math.PI * Math.pow(radius, 2);
}

module.exports = {
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
};