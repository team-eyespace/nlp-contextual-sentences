import 'dart:convert';

var jsonString = '''
  [
    {"score": 40},
    {"score": 80}
  ]
''';

var finalJson = ''' [

{"vehicles" : {

  "car": "a car",
        "bus": "a big bus",
        "truck": "a big truck",
        "train": "a train",
        "bicycle": "a bicycle",
        "bike": "a bike"
}}]

''';

void main() {

  // var scores = jsonDecode(jsonString);
  
  // for(var key in scores) {

  //   print(key['score']);

  // }

  var testScores = jsonDecode(finalJson);
  print(testScores[0]['vehicles']);

}
