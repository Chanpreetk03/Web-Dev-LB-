// document.addEventListener('click',function(){
//     console.log(" i click");
// });

function eventFunc(){
    console.log("click clack");
}

document.addEventListener('click' , eventFunc);

// document.removeEventListener('click' , function(){
//     console.log("hi");
// })
// the above one wont work

document.removeEventListener('click' , eventFunc);
//this will