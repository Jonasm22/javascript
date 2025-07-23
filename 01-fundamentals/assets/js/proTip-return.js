/*
function createPerson( name, lastname){
    return{ name,lastname}
}
*/

const createPerson = (name,lastname) => ({name,lastname})

const persona = createPerson('Jonathan', 'Mendoza')
console.log(persona)

function printArgument(){
    console.log(arguments)

}

function printArgument(){
    console.log(arguments)

}

//printArgument(true, false, 10,"Hello", "Jonas")

const printNewArgument= (age, ...args) =>{
    //console.log({arg})
   return args
}



const [married, smoker, hello, name ] = printNewArgument(10,true, false,"Hello", "Jonas")
console.log({married, smoker, hello, name});


const {lastname : newLastname} = createPerson('Jonathan', 'Mendoza')
console.log({newLastname});


let character ={
    name : 'Jonathan',
    codeName : 'JM',
    isStudent : true,
    age: 30,  
    studyStuffs : ['Laptop' , 'Ipad' , 'Books' , 'Iphone']

}

/*
const printPropierty = (person) =>{
    console.log(person.name);
    console.log(person.age);
    console.log(person.codeName);
    console.log(person.isStudent);
    console.log(person.studyStuffs);
}

printPropierty(character)

*/

const printPropierty = ({name, codeName, isStudent, age, studyStuffs}) =>{
    console.log({name});
    console.log({age});
    console.log({codeName});
    console.log({isStudent});
    console.log({studyStuffs});
}
printPropierty(character)