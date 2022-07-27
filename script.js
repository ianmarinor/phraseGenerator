let pluralObject = {
    pluralPerson: ['I ','You ','We ','They '],
    pluralVerb: ['do ', 'love ', 'say ', 'watch ', 'change ', 'talk ', 'lead ', 'enjoy ', 'have ', 'rest ', 'stop ', 'start ', 'work ', 'sleep ', 'play ', 'cry ' ]

}

let singularObject = {
    singularPerson: ['He ','It ','She '],
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

let nounArray = ['birds',          'space',
'apple',          'in Canada',
'in Brazil',         'TV movies',
'maths',          'programming',
'at night',       'in the afternoon',
'in the morning', 'planes',
'reading',        'running',
'inside the red car', 'outside the church',
'while looking very angry', 'as John laughs'
]



// ***************
//Random Number Generator
// *************

//This will choose between singular and plural VERBS and PERSONS and store inside objectType
const  objectTypeRNG = Math.floor(Math.random() * 2) 
var objectType = '' 
if (objectTypeRNG === 1){
    objectType = singularObject
} else {
    objectType = pluralObject
}



const singularPersonRNG = singularObject.singularPerson[Math.floor(Math.random() * 3)]
const singularVerbRNG = singularObject.singularVerb[Math.floor(Math.random() * 16)]

const pluralPersonRNG = pluralObject.pluralPerson[Math.floor(Math.random() * 4)]
const pluralVerbRNG = pluralObject.pluralVerb[Math.floor(Math.random() * 14)]

const nounArrayRNG = nounArray[Math.floor(Math.random() * 14)]






function generatePhrase(){
    
    if (objectType === singularObject){
        console.log(singularPersonRNG + singularVerbRNG + nounArrayRNG)
    } else {
        console.log(pluralPersonRNG + pluralVerbRNG + nounArrayRNG + '.')
    }
    
}

generatePhrase()
