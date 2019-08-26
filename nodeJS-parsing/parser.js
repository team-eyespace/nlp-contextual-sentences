const cov = require('./cov')


/* 

    5 Random Starts for the sentences

        There is 
        The app sees

    Endings also could be randomized

*/
//Testing for vehicles 

//Sample tags: bike, car, truck

let finalString = 'There is ';

let sampleTags = ["bike", "truck", "hello"];

let vehicleCount = 0;

for(let tag in sampleTags) {

    let curKey = sampleTags[tag];

    if(cov.vehicles[curKey] == undefined) {

        continue;

    }

    else {

        finalString = finalString + cov.vehicles[curKey] + ", ";
        vehicleCount++;

    }
    


}

finalString = finalString.trim();

finalString = finalString.substring(0, finalString.length - 1) + " near you" + ".";


if(vehicleCount >= 2) {

    finalString = finalString + " " + cov.vehicles.default;
}

console.log(finalString)
console.log(vehicleCount)
