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

let sampleTags = ["biKe", "hello", "garbage"];

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

console.log(finalString)
console.log(vehicleCount)
