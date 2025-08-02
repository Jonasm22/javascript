const cars = ['Ford', 'BMW','Audi','Toyota','Mazda']

let i = 0

console.warn('While')
/*
while (i< cars.length) {
    console.log(cars[i])
    i++;
    }
*/

while (cars[i]) {
    if(i === 1){
        //break;
        i++;
        continue;
    }
    console.log(cars[i]);
    i++;
}


console.warn('Do While')


let j = 0 

do {
    console.log(cars[j])
    j++
} while(cars[j]);