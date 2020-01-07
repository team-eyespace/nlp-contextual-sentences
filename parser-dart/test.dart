import 'dart:convert';

var jsonString =
  [
    {"score": 40},
    {"score": 80}
  ];

var scores = jsonDecode(jsonString);
assert(scores is List);

var firstScore = scores[0];
assert(firstScore is Map);
assert(firstScore['score'] == 40);