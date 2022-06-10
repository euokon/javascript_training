const pTag = document.getElementById('welcome-text');
console.log(pTag);
const pTag2 = document.getElementsByClassName('welcome');
console.log(pTag2)
const pTag3 = document.querySelector('#welcome-text')
const pTag4 = document.querySelector('.welcome')
const pTag5 = document.querySelectorAll('.welcome')
console.dir(pTag3)

pTag3.innerHTML = 'welcome to this session';

const btn = document.getElementById('click-button');

btn.addEventListener('click', clickHanlder, true) //event-propagation

const div = document.getElementById('div');
const child = div.firstElementChild
console.log(child)
const parent = div.parentNode
console.log(parent)
const sibling = div.previousElementSibling
console.log(sibling)
const nextSibling = div.nextElementSibling
console.log(nextSibling)

const newPTag = document.createElement('p');
const textContent = document.createTextNode('this is a new text')
newPTag.appendChild(textContent)

const firstText = document.getElementById('welcome-text');
firstText.remove()

div.insertBefore(newPTag, btn)

function clickHanlder(ele){
    ele.innerHTML = 'you clicked me';
    btn.removeEventListener('click', clickHanlder)
}

//event propagation
//event bubbling and event capturing