run();
//function declaration
function run(){
    console.log("running");
}
//function call or invoke
run();

//function assignment

// stand();  wont work because this is variable
let stand=function walk(){
    console.log("walking");
}

stand();
//walk(); wont work

let jump=stand;
jump();

function sum(a,b){
    //console.log(arguments);
    let total=0;
    for (let value of arguments) {
        total=total+value;
    }
    return total;
};

console.log(sum(1,2));

console.log(sum(1));
console.log(sum());
console.log(sum(1,2,3,4,5));
// console.log(sum('a'))

//Rest operator

function sum2(a,...args){
    console.log(args);
};
sum2(1,2,3,4,5,6);

function intrest(p,r=5,y=10){
    return p*r*y/100;
}

console.log(intrest(1000,10,5));
console.log(intrest(1000,undefined,8));

let person={
    fName:"abc",
    lName:"vfdrg",
    get full(){
        return `${person.fName} ${person.lName}`;
    }
};

// function full(){
//     return `${person.fName} ${person.lName}`;
// };

console.log(full());
