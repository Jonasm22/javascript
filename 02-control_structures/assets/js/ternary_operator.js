const day = 1;
const currentlyTime = 10;

let openTime;
let message;

openTime = ([0,6].includes(day)) ? 9 : 11;
/*
if(day === 0 || day === 6){
    console.log('weekend')
    openTime = 9;
} else {
    console.log('normal week');
    openTime = 11;
}
*/

/*
if(currentlyTime >= openTime){
    message = 'is open'
}else {
    message = `is closed, today we open ${openTime}`
}


 */


 message = (currentlyTime >= openTime) ? 'is open ' :  `is closed, today we open ${openTime}`

  console.log({currentlyTime,openTime, message});

  