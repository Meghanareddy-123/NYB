
// Errors

// SyntaxError
// refference error
// runtime error
// logical error
// NAN



// SyntaxError
// console.log(megha") 
// console.log("meghana")

// refference error
// var a=10
//  console.log(a)
//  console.log(a)

// TypeError

// var S="Hii"

// var a=S.toUpperCase()
// console.log(a)

// var r=3
// var c=r.toUpperCase()
// console.log(r)

// Handling error
// try 
// caches
// finally
// try  {
//     console.log(b)


// }
// console.log(a)
try  {
   console.log(a)
}

catch (error){

    console.log(error);
    
}


finally{
    console.log('this is finnally block')
}
console.log("this is the last lines of program")

// throw new error("error message")
// try{
//     // if (age>18){
//    throw new error("error message"); 
// }

// catch (error){
//     console.log(error)
// }

// We custmoise our errors
var age = 17

try{

 if (age<18){
   throw new Error("not eligiable to vote"); 
//    console.log(age)
}}

catch (error){
    console.log(error)
}

// option chaning
var obj={
    name:'megha',
    job:{company:'TCS',city:'banglore'},
};
console.log(obj.job)
console.log(obj.job["company"])
 console.log(obj?.["age"])

// Node js
// javascript object 
// {
//     key:value
// }
// data wii be transformed in the form of 

// etl to 
var obj={
    name:"nandu",
    role:"developer",
    city:"banglore"
}
console.log(obj)
console.log(typeof(obj))

// json
var jsonobj=JSON.stringify(obj)
console.log(jsonobj)
// convert json to normal object
var normolobj=JSON.parse(jsonobj);
console.log(normolobj)

var name="nandu"
// var obj1={
//     name:name
// }
// console.log(obj1)

var obj1=(
    name
)
console.log(obj1)