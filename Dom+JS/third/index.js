//adding 100 paras

// CODE-1
// let t1 = performance.now()
// for (let i = 0; i < 100; i++) {
// 	let newElement = document.createElement('p')
// 	newElement.textContent = 'this is para' + i

// 	document.body.appendChild(newElement)
// }
// let t2 = performance.now()

// console.log('time taken is:', t2 - t1, ' ms')

// CODE -2
//optimized a bit
// let t3 = performance.now()
// let myDiv = document.createElement('div')

// for (let i = 0; i < 100; i++) {
// 	let element = document.createElement('p')
// 	element.textContent = 'this is para' + i

// 	myDiv.appendChild(element)
// }
// document.body.appendChild(newElement)

// let t4 = performance.now()

// console.log('time taken is:', t4 - t3, ' ms')


//USING DOCUMENT FRAGMENT

let fragment=document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
	let newElement = document.createElement('p')
	fragment.textContent = 'this is para' + i

	document.body.appendChild(fragment); 
}


function addPara(){
    let para=document.createElement("p");
    para.textContent='js is single';
    document.body.appendChild(para);
}

function appendNew(){
    let para=document.createElement("p");
    para.textContent='kya haal';
    document.body.appendChild(para);
}

addPara();
appendNew();