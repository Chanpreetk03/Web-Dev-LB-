console.log("let's start");

let rectangle={
    length:1,
    breadth:2,

    draw: function () {
        console.log("draw")
    }
}
console.log(rectangle.draw());


//factory function

function createReactangle(len,bre){
    return rectangle={
        length:len,
        breadth:bre,
    
        draw: function () {
            console.log("draw");
        }
    }
    
};

let rectangleObj1=createReactangle(1,2);
let rectangleObj2=createReactangle(2,2);
let rectangleObj3=createReactangle(1,5);


//constructor function

function Reactangle(len ,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log("drawing")
    }
}

let rectObj=new Reactangle(4,6);

rectObj.color='yellow';

delete rectObj.color

//What is the constructor of Rectangle 

let ReactangleA= new Function(
    'length','breadth',
    `this.length=length;
    this.breadth=breadth
    this.draw=function(){
        console.log("draw");
    }`
);

let newRec=new ReactangleA(2,3);

newRec.length();


let a=10;

function let(a){
    a++;
}

console.log(a);