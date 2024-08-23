let input =document.getElementById("inputbox")
let buttons=document.querySelectorAll('button');

let string="";
let arr= Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'AC'){
            string = '';
            input.value =string;
        }
        else if(e.target.innerHTML  == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
        input.value = string;
        }
    })
})





//  new code but same output  // 
//let inp = document.querySelector('input')
//let btn = document.querySelectorAll('button')
// console.log(btn,"arr");

// for(let button of btn){
//     button.addEventListener('click',()=>{
//         let  text = button.innerText
//         if(text==="C"){
//             inp.value=''
//         }
//         else if(text==="="){
//             inp.value=eval(inp.value)
//         }
//         else{
//             inp.value=inp.value+text
//         }

//     })
// }
