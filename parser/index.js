const cov = require('./cov')

// Three String Variables startString, finalString and endString

let startStrings = ["There is ", "The app sees ", "You are looking at "]

// **Check whether random end string will cause a directional issue

let endStrings = [" near you.", " in front of you.", " alongside you."]


let sampleTags = ["caR", "baby", "man", "woman", "bottle", "house", "truck"]
master();


function master() {

    let returnValue = ""
    let csoStart = "Looks like you are outdoors. We see "
    let houseObj = "Looks like you are indoors. We see "
    let isOutside = false

    //Vehicle Classifier
    if (vehicleClassifier() == false) {

        console.log("no vehicles found")

    } else {

        returnValue = returnValue + randomString(startStrings) + vehicleClassifier() + randomString(endStrings)
        console.log("constructed vehciles succesfully")
        isOutside = true

    }

    //Person Classifier
    if (personClassifier() == false) {

        console.log("no persons found")

    } else {

        returnValue = returnValue + randomString(startStrings) + personClassifier() + randomString(endStrings)
        console.log("constructed persons succesfully")

    }


    //House Objects Classifier
    if (houseObjectsClassifier() == false) {

        console.log("no houseObjects found")

    } else {
        
        if(isOutside) {

            returnValue = returnValue + randomString(startStrings) + houseObjectsClassifier() + randomString(endStrings)
            console.log("constructed houseObjects succesfully")


        } else {

            returnValue = returnValue + houseObj + houseObjectsClassifier() + randomString(endStrings)
            console.log("constructed houseObjects succesfully")

        }
        

    }


    //CSO Classifier
    if (csoClassifier() == false) {

        console.log("no CSO found")

    } else {

        if(isOutside) {

            returnValue = returnValue + randomString(startStrings) + csoClassifier() + randomString(endStrings)
            console.log("constructed houseObjects succesfully")


        } else {

            returnValue = returnValue + csoStart + csoClassifier() + randomString(endStrings)
            console.log("constructed houseObjects succesfully")

        }


    }

    console.log(returnValue)

}

function vehicleClassifier() {
    let finalString = ""
    let curTags = [];
    let vehicleCount = 0;

    for (let tag in sampleTags) {

        let curTag = sampleTags[tag];
        curTag = curTag.toLowerCase();

        if (cov.vehicles[curTag] != undefined) {

            curTags.push(curTag);
            vehicleCount++;

        }

    }

    /*
        - Check for Vehicle count 
        - Trim the string for unwanted whitespace
        - Substring the final string to remove a comma before the final tag is added
    */

    if (vehicleCount >= 3) {

        for (let i = 0; i < vehicleCount - 1; i++) {

            let curTag = curTags[i]
            finalString = finalString + cov.vehicles[curTag] + ", "


        }

        finalString = finalString.trim();

        finalString = finalString.substring(0, finalString.length - 1)

        finalString = finalString + " and " + cov.vehicles[curTags[vehicleCount - 1]]

        finalString = finalString + " " + cov.vehicles.default;
    } else if (vehicleCount == 0) {

        return false

    } else {

        if (vehicleCount == 2) {

            let curTag1 = curTags[0]

            let curTag2 = curTags[1]


            finalString = finalString + cov.vehicles[curTag1] + " and " + cov.vehicles[curTag2]

            finalString = finalString.trim()


        } else {

            let curTag = curTags[0]

            finalString = finalString + cov.vehicles[curTag]

            finalString = finalString.trim()


        }



    }
    return finalString
}




//Person Classifier 
function personClassifier() {
    let finalString = ""
    let perTags = [];
    let personCount = 0;

    //Master Loop for checking all types of COV objects
    for (let tag in sampleTags) {

        let perTag = sampleTags[tag];
        perTag = perTag.toLowerCase();

        if (cov.LivingBeings[perTag] != undefined) {

            perTags.push(perTag);
            personCount++;

        }
    }

    if (personCount == 0) {

        return false;

    } else if (personCount == 1) {

        finalString = cov.LivingBeings[perTags[0]]

    } else {

        for (let i = 0; i < personCount - 1; i++) {

            let perTag = perTags[i]
            finalString = finalString + cov.LivingBeings[perTag] + ", "


        }

        finalString = finalString.trim();

        finalString = finalString.substring(0, finalString.length - 1)

        finalString = finalString + " and " + cov.LivingBeings[perTags[personCount - 1]]

    }

    return finalString
}



// House Objects Classifier
function houseObjectsClassifier() {
    let finalString = ""
    let houseTags = [];
    let houseCount = 0;

    //Master Loop for checking all types of COV objects
    for (let tag in sampleTags) {

        let houseTag = sampleTags[tag];
        houseTag = houseTag.toLowerCase();

        if (cov.houseObjects[houseTag] != undefined) {

            houseTags.push(houseTag);
            houseCount++;

        }
    }

    if (houseCount == 0) {

        return false;

    } else if (houseCount == 1) {

        finalString = finalString + cov.houseObjects[houseTags[0]]

    } else {

        for (let i = 0; i < houseCount - 1; i++) {

            let perTag = houseTags[i]
            finalString = finalString + cov.houseObjects[perTag] + ", "


        }

        finalString = finalString.trim();

        finalString = finalString.substring(0, finalString.length - 1)

        finalString = finalString + " and " + cov.houseObjects[houseTags[houseCount - 1]]

    }

    return finalString
}


//CSO Classifier
function csoClassifier() {
    let finalString = ""
    let csoTags = [];
    let csoCount = 0;

    //Master Loop for checking all types of COV objects
    for (let tag in sampleTags) {

        let houseTag = sampleTags[tag];
        houseTag = houseTag.toLowerCase();

        if (cov.CSO[houseTag] != undefined) {

            csoTags.push(houseTag);
            csoCount++;

        }
    }

    if (csoCount == 0) {

        return false;

    } else if (csoCount == 1) {

        finalString = finalString + cov.CSO[csoTags[0]]

    } else {

        for (let i = 0; i < csoCount - 1; i++) {

            let perTag = csoTags[i]
            finalString = finalString + cov.CSO[perTag] + ", "


        }

        finalString = finalString.trim()

        finalString = finalString.substring(0, finalString.length - 1)

        finalString = finalString + " and " + cov.CSO[csoTags[csoCount - 1]]

    }

    return finalString
}




// Helper Functions

function randomString(inputStringData) {

    let rand = Math.floor((Math.random() * 3));

    return inputStringData[rand];

}