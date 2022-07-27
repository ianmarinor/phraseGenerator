let pluralObject = {
    pluralPerson: ['I','You','We','They'],
    pluralVerb: ['do ', 'love ', 'say ', 'watch ', 'change ', 'talk ', 'lead ', 'enjoy ', 'have ', 'rest ', 'stop ', 'start ', 'work ', 'sleep ' ]

}

let singularObject = {
    singularPerson: ['He','It','She'],
    singularVerb: [
        'does ',    'love ',
        'says ',    'watches ',
        'changes ', 'talks ',
        'leads ',   'enjoys ',
        'has ',     'rests ',
        'stops ',   'starts ',
        'works ',   'sleeps ',
        'plays ',   'cries '
      ]
}

let nounObject = ['birds',          'space',
'apple',          'Canada',
'Brazil',         'TV movies',
'maths',          'programming',
'at night',       'in the afternoon',
'in the morning', 'planes',
'reading',        'running']



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


