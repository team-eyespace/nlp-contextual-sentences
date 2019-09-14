/*
    Overview 
    
    Sample Tags: Yellow(Color), Tree(Object), Man(Description)

    Current Sentence: Thre is yellow, tree, man in front of you. 

    Goal Sentence: There is a man and a tree in front of you and some of the primary colors include yellow.

    Concrete Example: 
        There is tree, road, man in front of you. 


    Normalization 
    Grammar

    Pluralization 


*/



const nlp = require('compromise')

let doc = nlp('a bottle of beer on the wall.')
doc.nouns(0).toPlural()

console.log(doc.out('text'))


