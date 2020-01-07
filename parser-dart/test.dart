import 'dart:convert';

var jsonString = '''
  [
    {"score": 40},
    {"score": 80}
  ]
''';

void main() {

  var scores = jsonDecode(jsonString);
  
  for(var key in scores) {

    print(key['score']);

  }

}
