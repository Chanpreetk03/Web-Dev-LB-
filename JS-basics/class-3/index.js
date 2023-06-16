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