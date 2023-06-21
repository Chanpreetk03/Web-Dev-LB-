// synchronous code

// console.log("line 1");

// function sync(){
//     console.log("first");
// }

// sync();
// console.log("second");

//async
setTimeout(function(){
    console.log("third");
},3000)

function sync(){
    console.log("first");
}

sync();
console.log("second");