
// Itaretors
// Generetors

// two types
// 1.value           :the current element in the sequence
// 2.Done false true :a boolean indicating if the itreator is finished

var arr=[1,2,3,4,5,6]
var a=arr[Symbol.iterator]()
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())


var greeting = "Megha!";
var  iterator = greeting[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next()) 
console.log(iterator.next()) 
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// Genaretor:it is a special function 

// normal function 
function hello(){
    return 'hii'
    return 'hello'
}
console.log(hello())

// genaretor function
function* hai(){
    yield 'hai'
    yield 'hello'
    yield 'good'
    yield 'morning'
}
var b=hai()
console.log(b.next())
console.log(b.next())
console.log(b.next())
console.log(b.next())
console.log(b.next())

// promise
// timer function
// synchronous 


// console.log("one");

// setTimeout(() => {
//     console.log("two");
// }, 1000);

// setTimeout(() => {
//     console.log("three");
// }, 2000);

// Promise.resolve().then(() => {
//     console.log("four");
// });

// console.log("five");

// Type Converstion
// implicit : converting automatically
// Explicit : manuvally converting

var a=10
var b="20"
console.log(a+b)
console.log(typeof(a))
var c=Number(b)
console.log(c)
console.log(a+b)
console.log(typeof(b))

console.log(a-b)

// Ttruthy and falsy values

// falsy values
// false,null,undefined,0,-0,NAN,
//  Ttruthy values
// true,-1,1,
if(1){
    console.log("this is if block")
}
else{
    console.log("this is else block")
}

// BOM(Bowser object model)

console.log(window.innerHeight);
console.log(window.innerWidth);
