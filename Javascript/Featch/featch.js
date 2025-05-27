
// Featch()
var Apidata

fetch('https://jsonplaceholder.typicode.com/posts')

.then(d=> d.json())
.then(data=> {
    Apidata=data
    display()
}
)

.catch(error =>{
    console.log(error);
});

function display(){
    console.log(Apidata);
}

// front end -->(API)Request--->Backend
// Back end ----->(API)Response----->frontend

// Api methods

// Get()
// post()
// Put()
// Patch()
// delete()

fetch('https://jsonplaceholder.typicode.com/posts')

// .then(data => console.log(data))
// .then(data => data.json()).catch
// .then(d=> console.log(d))

// post

var user={
    name:"teja",
    location:'banglore',
    job:"It"
}
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"post",
    body: JSON.stringify(user),
    headers:{
        'content-type':'application/json'
    },
})
    // .then(Response=>Response.json())
    
   .then(data=>data.json())
   .then(d=>console.log(d))
   .catch(error=>console.log(error))


var a
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'GET'
})
.then(data=>data.json())
.then(d=> console.log(d))

// PUT
var data={
    userid:1,
    id:1,
    title:'this is updated title',
    body:'this is updated boydy information'
}
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:"put",
    body: JSON.stringify(data),
    headers:{
        'content-type':'application/json'
    },
})
    // .then(Response=>Response.json())
    
   .then(data=>data.json())
   .then(d=>console.log(d))
   .catch(error=>console.log(error))

// Patch
var data1={
    title:'this is new book'
}
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:"put",
    body: JSON.stringify(data1),
    headers:{
        'content-type':'application/json'
    },
})
   .then(data=>data.json())
   .then(d=>console.log(d))
   .catch(error=>console.log(error))

//  Delete

fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:"put",
})
.then(res=>console.log(res))
.catch(error=>console.log(error))

// Promise

// promise.all
// promise.resolve
// promise.reject
// promise.race
// promise.allSettled
// promise.any

// Promise 

Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
])
.then(result =>{console.log(result)})

// Promise_reslove

var a=Promise.resolve('Hii')

a.then((values)=>{console.log(values)})
.catch((values)=>{console.log(values)})

// promise_reject

Promise.all([
    Promise.resolve(1),
    Promise.reject(2),
    Promise.resolve(3)
])
.then(result =>{console.log(result)})
.catch((result =>{console.log(result)}))
