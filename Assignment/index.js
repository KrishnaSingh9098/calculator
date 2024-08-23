// class  -- 25/01/2023


//let btn =document.querySelector('button')
// function fun1(){
//     console.log('hello')
// }





// 2nd method //




// BigInt.onclick=function(){
//     ocnsole.log('hiii')
// }

//  3rd method //





//      INPUT EVENT LISTNER


// let inp=document.querySelector('input')
// inp.addEventListener('input',(e)=>{
//     console.log(e.target.value);
//     // console.log('hello')
// })




//      



// let inp=document.querySelector('input')
// let p=document.querySelector('p')
// inp.addEventListener('input',(e)=>{
//     p.innerText=e.target.value
//     // console.log('hello')
// })



//    on class task  25/01/2024   //

// Select input element
const titleEl = document.getElementById('title');

// select list element
const listEl = document.getElementById('list');

// select button element
const addButtonEl = document.getElementById('add-button');

// adding "click" event listener on button element
addButtonEl.addEventListener('click', function() {

  // getting the value of the input field
  const titleText = titleEl.value;
  
  // creating and 'li' element and adding inner text
  const li = document.createElement('li');
  li.innerText = titleText;

  // add the newly created li element to the list
  listEl.appendChild(li);

  // clear the input field after adding li to the list
  titleEl.value = '';



})






