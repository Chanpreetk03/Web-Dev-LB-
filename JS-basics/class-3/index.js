Math.max(5 , 6, 7);
let a="abc";
let b=new String("def");

b.includes("de");
b.toLowerCase();

let msg="this is my first message to index";
let words=msg.split(" ");
console.log(words)

let msg2="this is my first message to index";

let msg3=`TO jnsskkjavghv
nmdsjmdskksdla`

let date=new Date();

console.log(date);

let date2=new Date('March 13 2003 06:20')

console.log(date2)

let numbers=[1,3,5,7];

console.log(numbers);

//inserting at end

numbers.push(9);
console.log(numbers);

//at begin

numbers.unshift(8);
console.log(numbers);

//in middle

numbers.splice(2,0,5,6,'a');
console.log(numbers);

//searching

console.log(numbers.indexOf(5));
console.log(numbers.indexOf('b'));

console.log(numbers.includes(4));

let courses=[
    {no:1,name:'love'},
    {no:2 , name:'babbar'}
];
console.log(courses);

//find reference types

// let course=courses.find(function(course){
//     return course.name=='love'
// })

// console.log(course);

//making the above function more readable

// let course=courses.find((course)=>{
//     return course.name=='love'
// })

//this one is just for arrow function with 1 argument

let course=courses.find(course=> course.name=='love');


//removing

//end
numbers.pop();
console.log(numbers)

//begin
numbers.shift();
console.log(numbers);

//middle
numbers.splice(2,1);

numbers=[];
let numbers2=numbers;

numbers.length=0;

//combining

let first=[1,2,3];
let sec=[4,5,6];

let combined=first.concat(sec);
console.log(combined);
let combined2=sec.concat(first);
console.log(combined2);

//slicing

let sliced=combined.slice(2,4);
console.log(sliced);

//combining using spread operator

let fir=[1,2,3,4];
let second=[5,6,7,8];

let comb=[...fir,...second];
console.log(comb);

let another=[...comb];

//iteration
//for of loop
for (const it of another) {
    console.log(it);
}

//for each loop

//joining arrays

let joined=numbers.join(',');
console.log(joined);

//split the joined
let messag="this is new";
let parts=messag.split(" ");
console.log(parts);

let joined2=parts.join("_");
console.log(joined2);

let arr=[4,5,9,2,3,1];
arr.sort();
console.log(arr);

arr.reverse()

//filtering

// let filtered=arr.filter(function(value){
//     return value>=4;
// });

let filtered=arr.filter(value => value>=4);
console.log(filtered);

//mapping

let newArr=[7,8,9,10,11];
let items=newArr.map(value=>{"student_no:"+value;
});

console.log(items);

