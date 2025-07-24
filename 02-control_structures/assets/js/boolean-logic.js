const returnsTrue = ()=>{
    console.log('returns True ')
    return true;
}

const returnsFalse = ()=>{
    console.log('returns False ')
    return false;
}

console.warn('Not or negation')
console.log(true)
console.log(!true)
console.log(!false)

console.warn('AND')

console.log(true && true)//true
console.log(true && false)//false
console.log(true && !false)//true

console.warn('OR')
console.log(true || false)//true
console.log(false || false)//false