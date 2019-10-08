const cov = require('./cov')

// Three String Variables startString, finalString and endString

let startStrings = ["There is ", "The app sees ", "You are looking at "]

// **Check whether random end string will cause a directional issue

let endStrings = [" near you.", " in front of you.", " alongside you."]


let sampleTags = ["car", "truck", "yeet"]

master();
function master() {

    console.log(vehicleClassifier());

}


function vehicleClassifier () {
    let finalString = randomString(startStrings);
    let curTags = [];
    let vehicleCount = 0;
    
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

    else if(vehicleCount == 0) {

        //Skip block

        return false

    }
    else {

        if(vehicleCount == 2) {

            let curTag1 = curTags[0]

            let curTag2 = curTags[1]
        

            finalString = finalString + cov.vehicles[curTag1] + " and " + cov.vehicles[curTag2] + randomString(endStrings)
        
            finalString = finalString.trim()


        }

        else {

            let curTag = curTags[0]
        
            finalString = finalString + cov.vehicles[curTag] + randomString(endStrings)
        
            finalString = finalString.trim()


        }

        

    }

    return finalString 
}





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











// Helper Functions

function randomString(inputStringData) {
    
    let rand = Math.floor((Math.random() * 3));

    return inputStringData[rand];

}

