const globalVar = 'Function statement'

let func1 = nameOfFunction(globalVar, 'rest parameter val 1', 'rest parameter val2'); //direct calling of function

//function statement (function declaration)
function nameOfFunction( ...otherParameters){
    //body of function
    nameOfFunction2();
    // console.log(`this is a ${functionType}`)
    // console.log('this in a function', this)
    // console.log(arguments)
    console.log(otherParameters)
    return 'function type updated'
}

//function statement
function nameOfFunction2(){
    //body of function
    let functionType2 = 'Function declaration'
    // console.log(`this.is a ${functionType2}`)
    // console.log('this is from nameOfFunction2', globalVar)
    //this = window
}
// let func2 = nameOfFunction('Function decalaration')
// console.log('this is func1', func1)

let obj = {
    name: 'muhammed',
    role: 'developer',
    getUser: function(available, time){
        // console.log('this in a method', this)
        return `${this.name} is a ${this.role}, is he ${available} ${time}`
    }
}

let obj2 = {
    name: 'john',
    role: 'analyst',
    category: 'staff',
}

console.log(obj.getUser.call(obj2, false, 'today'));
// console.log('this in the global script', this)


//function expression syntax
const funcExpression = function(){
    console.log('this is a function expression')
}

funcExpression(); //hoisting is the difference between function expressions and function statements

//arrow function syntax
const arrowFunc = () =>{
    console.log('this is an arrow function')
}

arrowFunc() //the this keyword in arrow function is lexical




