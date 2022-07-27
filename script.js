
let singularObject = {
    singularPerson: ['He ','It ','She ', 'The Queen ', 'Your dog ', 'The absurdly fast thief ', 'My hope ', 'That kid ', 'Matthew ', 'Bhrena ', 'Murillo ', 'Gandalf ', 'The concierge at our building ', 'My mum ', 'The long train '],
    singularVerb: [
        'does ',    'loves ',
        'says ',    'watches ',
        'changes ', 'talks ',
        'leads ',   'enjoys ',
        'has ',     'rests ',
        'stops ',   'starts ',
        'works ',   'sleeps ',
        'plays ',   'cries ',
        'destroys ', 'sings ',
        'jumps '
      ]
}
let pluralObject = {
    pluralPerson: ['I ','You ','We ','They ', 'The President and his best fried ', 'Our friends ', 'People from all around the world ', 'Our family ', 'Your friends ', 'The crowd ', 'The Beatles ', 
    singularObject.singularPerson[Math.floor(Math.random() * singularObject.singularPerson.length)] + 'and the entire Ghana population '
],

    pluralVerb: ['do ', 'love ', 'say ', 'watch ', 'change ', 'talk ', 'lead ', 'enjoy ', 'have ', 'rest ', 'stop ', 'start ', 'work ', 'sleep ', 'play ', 'cry ', 'travel to ', 'destroy ', 'sing ']

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
'inside the old school', 'with the brave dog',
'near our friend bycicle', 'with my wardrobe', 
'inside every single New York flat', 
'literally all the time', 'tirelessly on the top of the Eiffel Tower in Paris',
'in London', 'while swimming in the Amazon river', 'my toaster',
'his face', 'our 42" TV', 'on BBC 2', 'while making a loud noise',
'all the guitars', 'a new record', '1 million pounds', 'in a funny way while looking at the mirror',
'my dad singing', singularObject.singularPerson[Math.floor(Math.random() * singularObject.singularPerson.length)],

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
