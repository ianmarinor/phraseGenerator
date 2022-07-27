let pluralObject = {
    pluralPerson: ['I ','You ','We ','They ', 'The President and his best fried ', 'Our friends ', 'People from all around the world ', 'Our family ', 'Your friends ', 'The crowd '],

    pluralVerb: ['do ', 'love ', 'say ', 'watch ', 'change ', 'talk ', 'lead ', 'enjoy ', 'have ', 'rest ', 'stop ', 'start ', 'work ', 'sleep ', 'play ', 'cry ', 'travel to ' ]

}

let singularObject = {
    singularPerson: ['He ','It ','She ', 'The Queen ', 'Your dog ', 'The absurdly fast thief ', 'My hope ', 'That kid ', 'Matthew ', 'Bhrena ', 'Murillo ', 'Gandalf ', 'The concierge at our building '],
    singularVerb: [
        'does ',    'loves ',
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
'while looking very angry', 'as John laughs', 
'as soon as possible', 'as they days go by',
'inside the old school', 'with his brave dog',
'near our friend bycicle', 'with my wardrobe', 
'inside every single New York flat', 
'literally all the time', 'tirelessly on the top of the Eiffel Tower in Paris',
'in London'
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



var singularPersonRNG = singularObject.singularPerson[Math.floor(Math.random() * singularObject.singularPerson.length)]
var singularVerbRNG = singularObject.singularVerb[Math.floor(Math.random() * singularObject.singularVerb.length)]

var pluralPersonRNG = pluralObject.pluralPerson[Math.floor(Math.random() * pluralObject.pluralPerson.length)]
var pluralVerbRNG = pluralObject.pluralVerb[Math.floor(Math.random() * pluralObject.pluralVerb.length)]

var nounArrayRNG = nounArray[Math.floor(Math.random() * nounArray.length)]






function generatePhrase(){
    
    if (objectType === singularObject){
        console.log(singularPersonRNG + singularVerbRNG + nounArrayRNG + '.')
    } else {
        console.log(pluralPersonRNG + pluralVerbRNG + nounArrayRNG + '.')
    }
    
}

generatePhrase()
