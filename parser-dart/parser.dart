import 'dart:math';
import 'cov.js' as cov;

class DartParser {


var startStrings = ["There is ", "The app sees ", "You are looking at "];

var endStrings = [" near you.", " in front of you.", " alongside you."];


var sampleTags = ["caR", "baby", "man", "woman", "bottle"];



void main() {
print("hello");
}


String vehicleClassifier() {
    var finalString = "";
    var curTags = [];
    var vehicleCount = 0;

    for (var tag in sampleTags) {

        var curTag = sampleTags[tag];
        curTag = curTag.toLowerCase();

        if (cov.vehicles[curTag] != Undefined) {

            curTags.add(curTag);
            vehicleCount++;

        }

    }

    /*
        - Check for Vehicle count 
        - Trim the string for unwanted whitespace
        - Substring the final string to remove a comma before the final tag is added
    */

    if (vehicleCount >= 3) {

        for (var i = 0; i < vehicleCount - 1; i++) {

            var curTag = curTags[i];
            finalString = finalString + cov.vehicles[curTag] + ", ";


        }

        finalString = finalString.trim();

        finalString = finalString.substring(0, finalString.length - 1);

        finalString = finalString + " and " + cov.vehicles[curTags[vehicleCount - 1]];

        finalString = finalString + " " + cov.vehicles.default;
    } else if (vehicleCount == 0) {

        return "false";

    } else {

        if (vehicleCount == 2) {

            var curTag1 = curTags[0];

            var curTag2 = curTags[1];


            finalString = finalString + cov.vehicles[curTag1] + " and " + cov.vehicles[curTag2];

            finalString = finalString.trim();


        } else {

            var curTag = curTags[0];

            finalString = finalString + cov.vehicles[curTag];

            finalString = finalString.trim();


        }



    }

    return finalString;
}



//Person Classifier 
String personClassifier() {
    var finalString = "";
    var perTags = [];
    var personCount = 0;

    //Master Loop for checking all types of COV objects
    for (var tag in sampleTags) {

        var perTag = sampleTags[tag];
        perTag = perTag.toLowerCase();

        if (cov.LivingBeings[perTag] != Undefined) {

            perTags.add(perTag);
            personCount++;

        }
    }

    if (personCount == 0) {

        return "false";

    } else if (personCount == 1) {

        finalString = cov.LivingBeings[perTags[0]];

    } else {

        for (var i = 0; i < personCount - 1; i++) {

            var perTag = perTags[i];
            finalString = finalString + cov.LivingBeings[perTag] + ", ";


        }

        finalString = finalString.trim();

        finalString = finalString.substring(0, finalString.length - 1);

        finalString = finalString + " and " + cov.LivingBeings[perTags[personCount - 1]];

    }

    return finalString;
}



// House Objects Classifier
String houseObjectsClassifier() {
    var finalString = "";
    var houseTags = [];
    var houseCount = 0;

    //Master Loop for checking all types of COV objects
    for (var tag in sampleTags) {

        var houseTag = sampleTags[tag];
        houseTag = houseTag.toLowerCase();

        if (cov.houseObjects[houseTag] != Undefined) {

            houseTags.add(houseTag);
            houseCount++;

        }
    }

    if (houseCount == 0) {

        return "false";

    } else if (houseCount == 1) {

        finalString = finalString + cov.houseObjects[houseTags[0]];

    } else {

        for (var i = 0; i < houseCount - 1; i++) {

            var perTag = houseTags[i];
            finalString = finalString + cov.houseObjects[perTag] + ", ";


        }

        finalString = finalString.trim();

        finalString = finalString.substring(0, finalString.length - 1);

        finalString = finalString + " and " + cov.houseObjects[houseTags[houseCount - 1]];

    }

    return finalString;
}


//CSO Classifier
String csoClassifier() {
    var finalString = "";
    var csoTags = [];
    var csoCount = 0;

    //Master Loop for checking all types of COV objects
    for (var tag in sampleTags) {

        var houseTag = sampleTags[tag];
        houseTag = houseTag.toLowerCase();

        if (cov.CSO[houseTag] != Undefined) {

            csoTags.add(houseTag);
            csoCount++;

        }
    }

    if (csoCount == 0) {

        return "false";

    } else if (csoCount == 1) {

        finalString = finalString + cov.CSO[csoTags[0]];

    } else {

        for (var i = 0; i < csoCount - 1; i++) {

            var perTag = csoTags[i];
            finalString = finalString + cov.CSO[perTag] + ", ";


        }

        finalString = finalString.trim();

        finalString = finalString.substring(0, finalString.length - 1);

        finalString = finalString + " and " + cov.CSO[csoTags[csoCount - 1]];

    }

    return finalString;
}




// Helper Functions

String randomString(inputStringData) {
    Random random = new Random();
    var rand = random.nextInt(3);

    return inputStringData[rand];

}


}
