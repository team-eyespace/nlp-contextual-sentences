let nlp = require('compromise')

var doc = nlp('London is calling')
doc.sentences().toNegative()