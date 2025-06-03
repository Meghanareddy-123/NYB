

//  Promise 

// promise.all
// promise.resolve
// promise.reject
// promise.race
// promise.allSettled
// promise.any


// promises all: 

Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
    // Promise.reject(4)
])
.then(result =>{console.log(result)})

// 

// Promise.all([
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3),
//     Promise.reject(4)
// ])
// .then(result =>{console.log(result)})

// Promise.resolve
// var a=Promise.resolve(1);
// console.log(a)

// Promise.reject
// var b=Promise.reject(1);
// console.log(b)


// Promise.race

var promise = new Promise((resolve,reject) => {
   setTimeout(() => {
    resolve("Fast Promise won!");
   }, 1000); // finishes in 1 second
 });


var slow = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("slow Promise won!");
   }, 100); // finishes in 1 second
  })

// .then(data=> console.log(data))

// promise.allSettled

Promise.allSettled([
    new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(1)
     
    },1000)
}),

 new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(2)
     
    },2000)
 })
])
.then(data => console.log(data))

// promise.any

Promise.any([
    new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1)
     
    },1000)
}),

 new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(2)
     
    },1000)
 })
])
.then(data => console.log(data))
