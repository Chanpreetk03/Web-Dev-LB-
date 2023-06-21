// document.addEventListener('click',function(){
//     console.log(" i click");
// });

const { document } = require('postcss')

function eventFunc() {
	console.log('click clack')
}

document.addEventListener('click', eventFunc)

// document.removeEventListener('click' , function(){
//     console.log("hi");
// })
// the above one wont work

document.removeEventListener('click', eventFunc)
//this will

//addEventListner using

const content = document.querySelector('#wrapper')
content.addEventListener('click', function (event) {
	console.log(event)
})

let links = document.querySelectorAll('a')
let thirdLink = links[2]

//here we stop the default action prevention
thirdLink.addEventListener('click', function (event) {
	event.preventDefault()
	console.log('maza aaya')
})

// let myDiv=document.createElement('div');
// for(let i=1 ; i<101 ; i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='this is para' + i;

//     newElement.addEventListener('click' , function(event){
//         console.log('i have clicked on para');
//     });
//     myDiv.appendChild(newElement);
// }

// document.appendChild(myDiv);

// better way:

// function paraStatus(event){
//     console.log('i have clicked on para');
// }

// let myDiv=document.createElement('div');
// for(let i=1 ; i<101 ; i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='this is para' + i;

//     newElement.addEventListener('click' ,paraStatus);
//     myDiv.appendChild(newElement);
// }

// document.appendChild(myDiv);

// more better way:

function paraStatus(event) {
	if (event.target.nodeName === 'P') {
		console.log('i have clicked on para')
	}
}

let myDiv = document.createElement('div')

myDiv.addEventListener('click', paraStatus)
for (let i = 1; i < 101; i++) {
	let newElement = document.createElement('p')
	newElement.textContent = 'this is para' + i

	myDiv.appendChild(newElement)
}

document.appendChild(myDiv)
