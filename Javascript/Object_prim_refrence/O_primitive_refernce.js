
// OBJECT
//  Primitiive datatype(string,number,boolean,)
// Reference datatype(arrays,functions,objects)

var a=20
var b=ass
console.log(a,b)
a=25
console.log(a,b)
b=30
console.log(a,b)
var s="megha"
var s1=s
console.log(s1,s)
s="reddy"
console.log(s1,s)

// REFERNCE DATATYPE
// 3 WAYS
// 1.Normal copy
// 2.deep copy
// 3.shallow copy

var original={
    name:'Teja',
    age:26,
    city:'banglore',

    job:{
    
        Role:'tester',
        dept:'IT',
        salary:30000,

        arr:[10,20,30,40,50]
    }
}

// original.arr[0]=100
console.log(original)
var copy=original
console.log(copy)
original.age=35
console.log(original)
console.log(copy)
copy.name="shiva"
console.log(copy)

console.log(original)

original.job.role="developer"
console.log(original)
console.log(copy)


// deep copy
var copy=JSON.parse(JSON.stringify(original))
original.dept='non it'
console.log(original)
console.log(copy)
copy.salary=35000
console.log(copy)
console.log(original)

// original.arr[0]=100
// console.log(original)

// Shallow copy-primitive(deep copy),refference(normal copy)

// var copy=Object.assign({},original)
console.log(original)
console.log(copy)
original.age=50
// original.arr[0]=100
console.log(original)

var copy={
    ...original
}
original.age=31
original.array[0]=100