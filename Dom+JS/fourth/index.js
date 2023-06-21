// synchronous code

// console.log("line 1");

// function sync(){
//     console.log("first");
// }

// sync();
// console.log("second");

//async
// setTimeout(function () {
// 	console.log('third')
// }, 3000)

// function sync() {
// 	console.log('first')
// }

// sync()
// console.log('second')

// // let myProm=new Promise(function(resolve,reject){
// //     console.log('i am inside promise');
// //     resolve(1998);
// // });

// // console.log('first');

// let myProm = new Promise(function (resolve, reject) {
// 	setTimeout(function () {
// 		console.log('inside promise')
// 	}, 5000)
// 	reject(2223)
// 	//reject("new err")
// })

// myProm.then(((value) => console.log(value)),((error) => console.log(error)))

// console.log('first')


let wada1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("set time out 1 start");
    },2000);
    resolve(true);
})

wada1.then(()=>{
    let wada2=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("set time out 2 start");
        },3000); 
        resolve("wada 2");
    })
    return wada2;
}).then((value)=>{console.log(value)});

