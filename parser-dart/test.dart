import 'dart:convert';

var jsonString = '''
  [
    {"score": 40},
    {"score": 80}
  ]
''';


var testJson = ''' "vehicles":[

        "car": "a car",
        "bus": "a big bus",
        "truck": "a big truck",
        "train": "a train",
        "bicycle": "a bicycle",
        "bike": "a bike",
        "motorcycle": "a motorcycle",
        "airplane": "an airplane",
        "default": "Be Careful!"

    ] ''';

void main() {

  // var scores = jsonDecode(jsonString);
  
  // for(var key in scores) {

  //   print(key['score']);

  // }

  var testScores = jsonDecode(testJson);
  print(testScores);

}
