const isOlder = (a,b) => (a>b) ? a : b;

const hasSubscrition = (member) => (member) ? '2 dollars' : '10 dollars'
//console.log(isOlder(20,15));
console.log(hasSubscrition(false));


const person = false;

const areFriends = [
    'Peter',
    'Tony',
    'Mario',
    person ? 'Drinking' : 'meeting',
    (() => 'Nicky') ()
]

console.log(areFriends)

const note = 70 ;
const grade = note >= 95 ? 'A+' :
              note >= 90 ? 'A' :
              note >= 85 ? 'B+' :
              note >= 80 ? 'B' :
              note >= 75 ? 'C+' :
              note >= 70 ? 'C' : 'F';

console.log({note ,grade})

            