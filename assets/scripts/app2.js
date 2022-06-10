// const pTag = document.getElementById('welcome-text');
// console.log(pTag);
// const pTag2 = document.getElementsByClassName('welcome');
// console.log(pTag2)
// const pTag3 = document.querySelector('#welcome-text')
// const pTag4 = document.querySelector('.welcome')
// const pTag5 = document.querySelectorAll('.welcome')
// console.dir(pTag3)

// pTag3.innerHTML = 'welcome to this session';

// const btn = document.getElementById('click-button');

// btn.addEventListener('click', clickHanlder, true) //event-propagation

// const div = document.getElementById('div');
// const child = div.firstElementChild
// console.log(child)
// const parent = div.parentNode
// console.log(parent)
// const sibling = div.previousElementSibling
// console.log(sibling)
// const nextSibling = div.nextElementSibling
// console.log(nextSibling)

// const newPTag = document.createElement('p');
// const textContent = document.createTextNode('this is a new text')
// newPTag.appendChild(textContent)

// const firstText = document.getElementById('welcome-text');
// firstText.remove()

// div.insertBefore(newPTag, btn)

// function clickHanlder(ele){
//     ele.innerHTML = 'you clicked me';
//     btn.removeEventListener('click', clickHanlder)
// }

//event propagation
//event bubbling and event capturing

console.dir(btnDiv)
let newArr = Array.from(btnDiv.children);
newArr.forEach(element => {
    element.addEventListener('click', function(e){
        e.stopPropagation();
        console.log('clicked', e)
        console.log(e.currentTarget);
    })
});

btnDiv.addEventListener('click', function(e){
    e.stopPropagation();
    console.log(e.target.children[0].currentTarget)
})

//promise
let myPromise = new Promise(function(resolve, reject){
    //async operation that takes some time to conclude

    resolve() //incase it was a successfull operation
    reject() //when an error occurs in the async operation
})

myPromise.then().catch();
//promise can exist in 3 states
//1. Pending state - the result is undefined since async operation is still ongoing
//2. Fulfilled state - the result is data gotten from the async operation
//3. Rejected state - the result is an error object from the async operation 

let myPromise2 = new Promise(function(resolve, reject){
    let x = 4;

    if(x === 0){
        resolve('okay async resolved')
    }else{
        reject('error occured')
    }
})

myPromise2.then((data) => {console.log(data)}, (err) => {console.log(err)})