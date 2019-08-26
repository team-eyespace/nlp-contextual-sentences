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

let text = "Hello World"

text = nlp.toLowerCase();

console.log(text)
// let doc = nlp("There is a tree, road, man in front of you.").normalize().out('text')

// console.log(doc)

// let doc = nlp('a bottle of beer on the wall.')
// doc.nouns(0).toPlural()

// console.log(doc.out('text'))


