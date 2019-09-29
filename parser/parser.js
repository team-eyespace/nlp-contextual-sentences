const cov = require('./cov')
/* 

    Implementing similar algorithm for other types of objects in COV

*/


// Three String Variables startString, finalString and endString

let startStrings = ["There is ", "The app sees ", "You are looking at "]

// **Check whether random end string will cause a directional issue

let endStrings = [" near you.", " in front of you.", " alongside you."]


function randomString(inputStringData) {
    
    let rand = Math.floor((Math.random() * 3));

    return inputStringData[rand];

}

/*
    - Convert the Input tags to Lower Case and 
    - Check whether a description for those Keys exist in the COV json
    - Check for Undefined elements
*/

function personClassifier() {
    let finalString = randomString(startStrings);
    let perTags = [];
    let personCount = 0;

    //Master Loop for checking all types of COV objects
    for (let tag in sampleTags) {

        let perTag = sampleTags[tag];
        perTag = perTag.toLowerCase();

        if (cov.LivingBeings[perTag] == undefined) {

            //Skip Block

        }

        else {

            perTags.push(perTag);
            personCount++;

        }
    }
    
    if (personCount >= 2) {
        
        for (let i = 0; i < personCount - 1; i++) {

            let perTag = perTags[i]
            finalString = finalString + cov.LivingBeings[perTag] + ", "


        }

        finalString = finalString.trim();

        finalString = finalString.substring(0, finalString.length - 1)

        finalString = finalString + " and " + cov.LivingBeings[perTags[personCount - 1]] + randomString(endStrings)

    }

    else if (personCount = 0) {
        
        //Skip block

    }

    else {
        
        let perTag = perTags[personCount - 1];
        
        finalString = finalString + cov.LivingBeings[perTag] + randomString(endStrings)

        finalString = finalString.trim()

    }
 
    return finalString
}

function vehicleClassifier () {
    let finalString = randomString(startStrings);
    let curTags = [];
    let vehicleCount = 0;
    
    //Master Loop for checking all types of COV objects
    for(let tag in sampleTags) {

    
    
    let curTag = sampleTags[tag];
    curTag = curTag.toLowerCase();

    if(cov.vehicles[curTag] == undefined) {

        //Skip Block

    }

    else {

        curTags.push(curTag);
        vehicleCount++;

    }

}

/*
    - Check for Vehicle count 
    - Trim the string for unwanted whitespace
    - Substring the final string to remove a comma before the final tag is added
*/

    if(vehicleCount >= 3) {

        for(let i = 0; i < vehicleCount - 1; i++) {

            let curTag = curTags[i]
            finalString = finalString + cov.vehicles[curTag] + ", "
        
        
        }
        
        finalString = finalString.trim();
        
        finalString = finalString.substring(0, finalString.length - 1)
        
        finalString = finalString + " and " + cov.vehicles[curTags[vehicleCount - 1]] + randomString(endStrings)

        finalString = finalString + " " + cov.vehicles.default;
    }

    else if(vehicleCount = 0) {

        //Skip block

    }
    else {

        let curTag = curTags[vehicleCount - 1];

        finalString = finalString + cov.vehicles[curTag] + randomString(endStrings)
        
        finalString = finalString.trim()

    }

    console.log(vehicleCount);
    return finalString 
}

// Buildings Function 

function buildingClassifier() {
    let finalString = randomString(startStrings);
    let perTags = [];
    let personCount = 0;

    //Master Loop for checking all types of COV objects
    for (let tag in sampleTags) {

        let perTag = sampleTags[tag];
        perTag = perTag.toLowerCase();

        if (cov.Buildings[perTag] == undefined) {

            //Skip Block

        }

        else {

            perTags.push(perTag);
            personCount++;

        }
    }
    
    if (personCount >= 2) {
        
        for (let i = 0; i < personCount - 1; i++) {

            let perTag = perTags[i]
            finalString = finalString + cov.Buildings[perTag] + ", "


        }

        finalString = finalString.trim();

        finalString = finalString.substring(0, finalString.length - 1)

        finalString = finalString + " and " + cov.Buildings[perTags[personCount - 1]] + randomString(endStrings)

    }

    else if (personCount = 0) {
        
        //Skip block

    }

    else {
        
        let perTag = perTags[personCount - 1];
        
        finalString = finalString + cov.Buildings[perTag] + randomString(endStrings)

        finalString = finalString.trim()

    }
 
    return finalString
}


function CSOClassifier() {
    let finalString = randomString(startStrings);
    let perTags = [];
    let personCount = 0;

    //Master Loop for checking all types of COV objects
    for (let tag in sampleTags) {

        let perTag = sampleTags[tag];
        perTag = perTag.toLowerCase();

        if (cov.CSO[perTag] == undefined) {

            //Skip Block

        }

        else {

            perTags.push(perTag);
            personCount++;

        }
    }
    
    if (personCount >= 2) {
        
        for (let i = 0; i < personCount - 1; i++) {

            let perTag = perTags[i]
            finalString = finalString + cov.CSO[perTag] + ", "


        }

        finalString = finalString.trim();

        finalString = finalString.substring(0, finalString.length - 1)

        finalString = finalString + " and " + cov.CSO[perTags[personCount - 1]] + randomString(endStrings)

    }

    else if (personCount = 0) {
        
        //Skip block

    }

    else {
        
        let perTag = perTags[personCount - 1];
        
        finalString = finalString + cov.CSO[perTag] + randomString(endStrings)

        finalString = finalString.trim()

    }
 
    return finalString
}

function houseObjectsClassifier() {
    let finalString = randomString(startStrings);
    let perTags = [];
    let personCount = 0;

    //Master Loop for checking all types of COV objects
    for (let tag in sampleTags) {

        let perTag = sampleTags[tag];
        perTag = perTag.toLowerCase();

        if (cov.houseObjects[perTag] == undefined) {

            //Skip Block

        }

        else {

            perTags.push(perTag);
            personCount++;

        }
    }
    
    if (personCount >= 2) {
        
        for (let i = 0; i < personCount - 1; i++) {

            let perTag = perTags[i]
            finalString = finalString + cov.houseObjects[perTag] + ", "


        }

        finalString = finalString.trim();

        finalString = finalString.substring(0, finalString.length - 1)

        finalString = finalString + " and " + cov.houseObjects[perTags[personCount - 1]] + randomString(endStrings)

    }

    else if (personCount = 0) {
        
        //Skip block

    }

    else {
        
        let perTag = perTags[personCount - 1];
        
        finalString = finalString + cov.houseObjects[perTag] + randomString(endStrings)

        finalString = finalString.trim()

    }
 
    return finalString
}





// Master Control for Testing 


let sampleTags = ["house"];
