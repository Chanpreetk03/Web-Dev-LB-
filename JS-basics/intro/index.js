console.log("blah")

let a=10;
console.log(a);

{
    var x=10;
    let y=4;
    console.log('x=',x);
    console.log('y=',y);

}
// console.log('x=',x);
// console.log('y=',y);

{
    const con=4;
    // con=7;
    console.log(con);
}
// console.log(con)
a="name";
console.log(a);

let num=10;
console.log(num);
console.log(num++);
console.log(++num);
console.log(num--);
console.log(--num);

let num1=5;
let num2=10;
let ans1=(++num1)*(--num2);
let ans2=(num1++)*(--num2);
let ans3=(num1++)*(num2--);
let ans4=(++num1)*(num2--);

console.log(ans1,ans2,ans3,ans4);

let number=2;
switch(number){
    case 1:console.log('A');
    break;
    case 2:console.log('B');
    break;
    default:console.log('C');
}

for(let i=0 ; i<5 ;i++){
    console.log(i);
}