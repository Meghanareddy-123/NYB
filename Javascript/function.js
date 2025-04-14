
// hoisting
// sum()

// function sum(){
//     console.log("1")
// }
// sum()
// function expression/////

// sum(); sum is a not a function
// named function
// var sum=function hello (){
//     console.log("hii")
// }
//  sum();

// Scope
// Accessibility and life time of the variable
// var let const


var a=10
var b=20

// var A
// let A
// const a
// var functioal scope
// let Block scope
// Const block scope
// let A=10
// let B=30

function sum(){
    a=20
    A=5
    // console.log(a+b)
    // console.log(A+B)
    // console.log(A,B) 
    {
       let A=1
       let B=2
       const c=3
        var k=10
        console.log(A+B)
        console.log(k)
        console.log(c)
    }   
}
// console.log(A,B)
// console.log(a,b)
// console.log(k)
sum()
console.log(a,b)
// console.log(A,B)
// console.log(k)
// console.log(c)

console.log(g)
// let g=20 Cannot access 'g' before initialization
// var g=20 undefine