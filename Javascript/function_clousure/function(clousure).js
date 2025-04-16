// Functions

// Redeclaration Reintilization,Clousure,IIFE

// var
// var a="hii"
// console.log(a)

// redeclaration
// var a="hello"
// console.log(a)

// reintilization
a="good afternoon"
// console.log(a)

// let
// let b="10"
// console.log(b)

// redeclaration
// let b="20"       Uncaught SyntaxError: Identifier 'b' has already been declared(redeclaration is not possible)

// reintilization
// b="30"
// console.log(b)

//                   Const
// redeclaration      not support
// reintilization     not support

// const c="thanu"
// console.log(c)

// redeclaration
// const c="megha"   
// console.log(c)   Uncaught SyntaxError: Identifier 'c' has already been declared

// reintilization
// c="Thanusha"  Uncaught SyntaxError: Identifier 'c' has already been declared


// Closure

function hii(a,b){

    console.log(a+b)
    // return a+b
}
// console.log(hii())
// hii()

function hii(a,b){
//    return function hello(){
    return a+b
   }
// }
//  console.log(hii())
// hii()
// let d=hii(10,20)
// console.log(d)
// let (hii())
// console.log(hii())

function k(a,b){
    return function C(){
        return a+b
    }
}
console.log(k(1,2))
k()

function k(a,b){
     return function C(){
        return a+b
    }
 }
var m=k()
// console.log(k(20,30))
console.log(m)

var m =function b(){
    return a+b
}
console.log(m)

// IIRFE (Immediately Innocable function expression)

var string="hello"

let s=(()=> {

    var h="hai"
    var g="hello"
    console.log(h,g)
})()