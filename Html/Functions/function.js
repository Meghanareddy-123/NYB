
// FUNCTION: Block of code to do some task and return some values.

// i function declaration
// ii function expression

// function declaration

// console.log("function")
var a=10
function hello(){
    console.log("function")  
    var a= 10
    var b = 20
    console.log(a+b);
    console.log(a);
    console.log(b);

   return "this is function"
}
hello() //function calling

var val = hello();
console.log(val)

console.log(hello())

// function exprestion
// 1.named function
// 2.ananomous function
// 3.Arrow function


// Named function

var hello= function hello(){
    
    console.log("Named function")
    var a= 30 
    var b = 40
    // console.log(a+b);
    console.log(a);
    console.log(b);
}
hello()

// Annamous function

var a=function (){

   console.log("Annamous function")

    var a= 100
    var b = 200
    // console.log(a+b);
    console.log(a);
    console.log(b);
}
a()

// Arrow function

var B=()=> {
    console.log("Arrow function")

    var a= 1000
    var b = 2000
    console.log(a);
    console.log(b);
}

B()