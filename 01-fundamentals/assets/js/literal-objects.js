let character ={
    name : 'Jonathan',
    codeName : 'JM',
    isStudent : true,
    age: 30,
    coords : {
        lat: 34.034,
        lng: -118.70 
    }, 
    
    studyStuffs : ['Laptop' , 'Ipad' , 'Books' , 'Iphone'],

    addres: {
        zip : '10800 , 54245' , 
        ubication:  'Malibu, California'
    }

}

console.log(character)
console.log('Name: ' ,  character.name);
console.log('Name: ' ,  character['name']);
console.log('Age: ' ,  character.age);

console.log('Coors: ' ,  character.coords);
console.log('lat: ' ,  character.coords.lat);

console.log('Last Study Stuff: ' ,  character.studyStuffs[character.studyStuffs.length -1]);

const x = 'isStudent'
console.log('isStudent: ' ,character[x] )

/* More Details*/

delete character.age // Removes the "age" property from the character object

//console.log(character)

const entriesEven = Object.entries(character)
character.bestanden = true;

console.log(entriesEven)


Object.freeze(character) //freezes new attributes

const propierty = Object.getOwnPropertyNames(character) // Gets all property names of the character object
const values = Object.values(character) // Gets all values of the character object

console.log( values)