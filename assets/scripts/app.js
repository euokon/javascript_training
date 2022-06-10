//global variables/constant
const defaultVal = 0;
let currentResult = defaultVal;

//get user input value
function getUserInput(){
    return parseInt(userInput.value);
}

//write operation and result to UI
function writeOutput(operator, prevResult, calcNumb, errorMessage=null){
    let calcDistriction;
    if(errorMessage){
        calcDistriction = 'the operation could not be carried out';
    }else{
        calcDistriction = `(${prevResult} ${operator} ${calcNumb})`;
    }
    outputResult(currentResult, calcDistriction);
}



function calcResult(mode){
    if(mode !== 'add' && mode !== 'sub' && mode !== 'div' && mode !== 'mult'){
        writeOutput('', null, null, true);
        return
    }

    const enteredNumber = getUserInput();
    const prevResult = currentResult;
    let mathOperator;

    if(mode === 'add'){
        
        currentResult = currentResult + enteredNumber;
        mathOperator = '+'
    }else if(mode === 'sub'){

        if(enteredNumber > prevResult){
            writeOutput('-', prevResult, enteredNumber, true);
            return
        }else{
            currentResult = currentResult - enteredNumber;
            mathOperator = '-'
        }

    }else if(mode === 'div'){

        if(enteredNumber === 0){
            writeOutput(null, null, null, true)
            return
        }else{
            currentResult = currentResult / enteredNumber;
            mathOperator = '/'
        }

    }else if(mode === 'mult'){
        currentResult = currentResult * enteredNumber;
        mathOperator = "*"
    }
    // else{
    //     writeOutput('', prevResult, enteredNumber, true);  
    //     return 
    // }

    writeOutput(mathOperator, prevResult, enteredNumber);
}




//add function
function add(){
    calcResult('add');
}

//subtraction function
function subtract(){
    calcResult('sub');
}

//multiplication function
function multiply(){
    calcResult('mult');
}

//division function
function division(){
    calcResult('div');
}

//addition event handler
addBtn.addEventListener('click', add); //indirect calling of a function - callback function 

//subtraction event handler
subtractBtn.addEventListener('click', subtract); //this keyword points to the event that called the function

//multiplication event handler
multiplyBtn.addEventListener('click', multiply);

//division event handler
divideBtn.addEventListener('click', division)