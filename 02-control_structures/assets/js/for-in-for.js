const persons = ['Maria' , 'Pedro', 'Lina' , 'Ximena' , 'Jonas' ]

console.warn('For-loop');


for (let index = 0; index < persons.length; index++) {
    const element = persons[index];
    console.log(element);
}

console.warn('For in-loop');

for (let i in persons) {
    const element = persons[i];
    console.log(element);
 
}


console.warn('For of-loop');

for (let person of persons) {
    console.log(person);
 
}