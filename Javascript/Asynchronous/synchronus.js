
// synchronous
// It excutes line by line 



// console.log("one")
// console.log("two")
// console.log("three")

// Asynchronous

// It excute multi thread 
console.log("one")
window.setTimeout(()=>{
    console.log("two")
},2000)
console.log("Three")


console.log("1")
window.setTimeout(()=>{
    console.log("2")
},0)
console.log("3")

// there are 3 Ways
// Callback
// Promise
// async and await

// Callback
// A function that can passed as an argument

// synchronous
// var data=fetch(" ")

// function displayData(name){
//     console.log("data the api calls",name)

// }
// displayData(data)

// asynchronous(callback)

function fetchData(hello){

    var data = "Neelam Megha"

    window.setTimeout(()=>{
      hello(data);
    },4000)
     
}



function displayData(name){
    console.log("data the api calls",name)

}
fetchData(displayData);


// example

function one(nextfunction){
    var a=10
    console.log(" first function")
    console.log(nextfunction)
    window.setTimeout(() =>{
    nextfunction();
    },2000)
    // console.log(nextfunction)
    // nextfunction()

}

function two(nextfunction){
    console.log(" second function");
    window.setTimeout(() => {
       nextfunction();
    },1000);
   



}


function three(callbackfunction){
    console.log("this is third function")
    window.setTimeout(()=>{
    callbackfunction();
    },4000)
    // callbackfunction();

}

function four(){
    console.log("this is fourth function")

}
one(()=>{two(()=>{three(four)})})


window.setTimeout(()=>{
    console.log('one');
},3000)


window.setTimeout(()=>{
    console.log('two');
},4000)