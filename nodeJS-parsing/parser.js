const cov = require('./cov')

/* 


    Endings also could be randomized

*/
//Testing for vehicles 

//Sample tags: bike, car, truck
// Three String Variables startString, finalString and endString

let startStrings = ["There is ", "The app sees ", "You are looking at "]

let endStrings = [" near you.", " in front of you.", " alongside you."]

function randomString(inputStringData) {
    
    let rand = Math.floor((Math.random() * 3));

    return inputStringData[rand];

}

let finalString = randomString(startStrings);

let sampleTags = ["biKe", "HELLO", "cAR", "motorcycle", "yeeet"];

let curTags = [];

let vehicleCount = 0;

/*
    - Convert the Input tags to Lower Case and 
    - Check whether a description for those Keys exist in the COV json
    - Check for Undefined elements
*/


for(let tag in sampleTags) {

    let curKey = sampleTags[tag];
    curKey = curKey.toLowerCase();

    if(cov.vehicles[curKey] == undefined) {

        continue;

    }

    else {

        curTags.push(curKey);
        vehicleCount++;

    }

}

/*
    - Check for Vehicle count 
    - Trim the string for unwanted whitespace
    - Substring the final string to remove a comma before the final tag is added
*/

if(vehicleCount >= 2) {

    for(let i = 0; i < vehicleCount - 1; i++) {

        let curKey = curTags[i]
        finalString = finalString + cov.vehicles[curKey] + ", "
    
    
    }
    
    finalString = finalString.trim();
    
    finalString = finalString.substring(0, finalString.length - 1)
    
    finalString = finalString + " and " + cov.vehicles[curTags[vehicleCount - 1]] + " near you."

    finalString = finalString + " " + cov.vehicles.default;
}
else {

    let curKey = curTags[vehicleCount - 1];

    finalString = finalString + cov.vehicles[curKey] + " near you."
    
    finalString = finalString.trim()

}

console.log(finalString)
console.log(vehicleCount)
