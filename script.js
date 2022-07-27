let pluralObject = {
    pluralPerson: ['I','You','We','They'],
    pluralVerb: ['do', 'love']

}

let singularObject = {
    singularPerson: ['He','It','She'],
    singularVerb: ['does, love']
}

let nounObject = []



// ***************
//Random Number Generator
// *************

//This will choose between singular and plural PERSONS and store inside personType
const  objectTypeRNG = Math.floor(Math.random() * 2) 
var objectType = '' 
if (objectTypeRNG === 1){
    objectType = singularObject
} else {
    objectType = pluralObject
}



const singularPersonRNG = Math.floor(Math.random() * 3)
const pluralPersonRNG = Math.floor(Math.random() * 4)
const singularVerb = Math.floor(Math.random() * 4)
const pluralVerb = Math.floor(Math.random() * 4)

const nounObjectRNG = Math.floor(Math.random() * 4)

// console.log(personObject.pluralPerson[pluralPersonRNG]);


console.log('objectType: ', objectType);
console.log();


function generatePhrase(){
    
    
    
}


