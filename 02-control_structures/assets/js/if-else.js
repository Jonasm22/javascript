
const today = new Date();
console.log(today)


let day = today.getDay();
console.log({day})

if(day === 5){
    console.log('Friday')

}else{
    console.log('today is not friday')
}


// LAB: => exercise without using if else, or switch.

const dayofweek = {

    0: 'Sunday',
    1: 'Moday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'thursday',
    5: 'Friday',
    6: 'Saturday',
}

day = 10;
console.log(dayofweek[day] || 'Nummber of day not valid.')


const daysofWk = ['Sunday', 'Moday','Tuesday','Wednesday','thursday','Friday','Saturday',]

//day = 1;
//console.log(dayofweek[day] || 'Nummber of day not valid.')