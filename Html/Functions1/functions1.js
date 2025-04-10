// FUNCTIONS
// Parameters, aruguments,Default arugument,ho,


// function declaration
function adding(a,b){
    console.log(a,b)
    console.log(a+b)
}
 adding()  

adding(1,2)

// function calling
adding(10,20)

// Default parameters

function substract(a=20,b=30){
    console.log(a,b)
    console.log(a-b)
}
// substract()
substract(5)

function substract(a=20,b=null,c=30,d=null,e=undefined){
    console.log(a,b,c,d)
    // console.log(a-b)
}

 substract() 
// output:NAN
 substract(5) 
//  OUTPUT:5,Undefind
substract(undefined,10)
substract(undefined,10 )
substract(undefined,null)
substract(undefined,10,null)
substract(undefined,10,null,undefined,null)

function adding(a,b){
    console.log(a,b)

}
adding(100,200,300,400)

// aggrugent object///
// rest parameter
// how to define rest parameter  ...restparameter
// restparameter must be last parameter in the list

// aruguments E.A.5
function adding(a,b,...c){
    console.log(a,b)
    console.log(arguments)
}
adding(100,200,300,400)

// arrow function E.A.6
// var s=(a,b, ...C) =>{
// console.log(a,b)
// console.log(arguments)
// }
// s(10,20,30,40,50,60,70,80,90)

// Hosting 
// accessing  of memory value even  before it excution
// closure

console.log(a,b)
var a= 10
var b =20
console.log(a,b)

// let var const

console.log(s,s1)
var s=1
const s1 =2
console.log(s,s1)
