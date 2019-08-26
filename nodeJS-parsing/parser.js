const cov = require('./cov')
const nlp = require('compromise')

/* 

    5 Random Starts for the sentences

        There is 
        The app sees

    Endings also could be randomized

*/
//Testing for vehicles 

//Sample tags: bike, car, truck
// Three String Variables startString, finalString and endString

function randomStartString() {
    
    let startStrings = ["There is ", "The app sees ", "You are looking at"]
    let rand = Math.floor((Math.random() * 3));

    return startStrings[rand];

}

let finalString = 'There is ';

let sampleTags = ["biKe", "truck", "car", "hello", "garbage"];

let curTags = [];

let vehicleCount = 0;

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

// console.log(finalString)
// console.log(vehicleCount)
