const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const btnDiv = document.getElementById('calc-actions');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

addBtn.addEventListener('click', function(event){
  event.stopPropagation();
  event.stopImmediatePropagation();
  console.log('this is addBtn event', event)
},)

addBtn.addEventListener('click', function(event){
  console.log('this is addBtn event2', event)
},)

addBtn.addEventListener('mouseenter', function(e){
  console.log('this is a mouse hover event on addBtn', e)
})

btnDiv.addEventListener('click', function(event){
  event.stopPropagation();
  console.log('this is btnDiv event', event)
},)
