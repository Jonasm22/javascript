let a = 10;
let b = a;
a = 29

console.log({a,b})

let juan = {name: 'juan'};
let ana = { ...juan};
ana.name = 'ana'

console.log(juan, ana)

const changeName = (person) =>{
    person.name = 'emilio'
    return person
}

let jonas = {name: 'Jonas'};
let emilio = changeName(jonas);

console.log({jonas, emilio})

// Arrays

const fruits = ['Apple',"Grapes",'Mango']

//const anotherFruits = [...fruits]
console.time('slice')
const anotherFruits = fruits.slice();
console.timeEnd('slice')


console.time('spread')
const anotherFruits2 = [...fruits]
console.timeEnd('spread')


anotherFruits.push('avocado')

console.table({fruits, anotherFruits});