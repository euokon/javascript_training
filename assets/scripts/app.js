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


//add function
function add(){
    const enteredNumber = getUserInput();
    const prevResult = currentResult;
    currentResult = currentResult + enteredNumber;
    writeOutput('+', prevResult, enteredNumber);
}

//subtraction function
function subtract(){
    const enteredNumber = getUserInput();
    const prevResult = currentResult;
    if(enteredNumber > prevResult){
        writeOutput('-', prevResult, enteredNumber, true);
    }else{
        currentResult = currentResult - enteredNumber;
        writeOutput('-', prevResult, enteredNumber);
    }
}

//multiplication function
function multiply(){
    const enteredNumber = getUserInput();
    const prevResult = currentResult;
    currentResult = currentResult * enteredNumber;
    writeOutput('*', prevResult, enteredNumber);
}

//division function
function division(){
    const enteredNumber = getUserInput();
    const prevResult = currentResult;
    if(enteredNumber === 0){
        writeOutput(null, null, null, true)
    }else{
        currentResult = currentResult / enteredNumber;
        writeOutput('/', prevResult, enteredNumber, false);
    }
}

//addition event handler
addBtn.addEventListener('click', add);

//subtraction event handler
subtractBtn.addEventListener('click', subtract);

//multiplication event handler
multiplyBtn.addEventListener('click', multiply);

//division event handler
divideBtn.addEventListener('click', division)