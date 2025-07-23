// Defines an arrow function that creates an object with name and lastname properties
const createPerson = (name, lastname) => ({ name, lastname });

// Creates a person object with name 'Jonathan' and lastname 'Mendoza'
const persona = createPerson('Jonathan', 'Mendoza');

// Logs the person object
console.log(persona);

// Defines a function that logs all arguments passed to it
function printArgument() {
    console.log(arguments);
}

// Calls printArgument with various arguments (commented out)
// printArgument(true, false, 10, "Hello", "Jonas");

// Defines an arrow function that collects age and rest of arguments into args array
const printNewArgument = (age, ...args) => {
    // Returns the args array (commented-out console.log)
    return args;
};

// Destructures the returned args array into variables
const [married, smoker, hello, name] = printNewArgument(10, true, false, "Hello", "Jonas");

// Logs the destructured variables as an object
console.log({ married, smoker, hello, name });

// Destructures lastname from createPerson and renames it to newLastname
const { lastname: newLastname } = createPerson('Jonathan', 'Mendoza');

// Logs the newLastname variable as an object
console.log({ newLastname });

// Defines an object with properties for a character
let character = {
    name: 'Jonathan', // Sets name property
    codeName: 'JM', // Sets codeName property
    isStudent: true, // Sets isStudent property
    age: 30, // Sets age property
    studyStuffs: ['Laptop', 'Ipad', 'Books', 'Iphone'] // Sets studyStuffs array
};

// Defines an arrow function that destructures and logs character properties
const printPropierty = ({ name, codeName, isStudent, age, studyStuffs }) => {
    console.log({ name }); // Logs name property
    console.log({ age }); // Logs age property
    console.log({ codeName }); // Logs codeName property
    console.log({ isStudent }); // Logs isStudent property
    console.log({ studyStuffs }); // Logs studyStuffs array
};

// Calls printPropierty with character object
printPropierty(character);