//Traditional function
function sayHello(){
    console.log("Hello World")
}

//Anonymous function
let greeating = function(){ 
    console.log("Hallo Welt")
}


//lamnda functions
let lambdaFunction = ()=>{
    console.log("Hallo Lambda")
}

//Functions with return

//Traditional function add
function add (a ,b){

    return a+b
}

// functions with lambda + return

const mult = (a,b)=> a*b

console.log(mult(2,3))

function getRandomNumber(){

    return Math.random()

}

//console.log(getRandomNumber());

const randomNumber = () => Math.random();
console.log(randomNumber());


