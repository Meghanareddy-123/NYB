
// ARRAY METHOD
// 1.MAP
// 2.FILTER
// 3.REDUCE
// 4.EVARY
// 5.SOME
// 6.SET

// 1.map()
// it changes each and every element  in the array return a new array

// squere root of all numbers
 var array=[1,2,3,4,5,6,7,8]
// for(i of array){
//     console.log(i*i)
// }
// console.log(array)

// creating new array
// squere root of all numbers

var array=[1,2,3,4,5,6,7,8]
var array1=[]
for (i of array){
    array1.push(i*i)
}
console.log(array1)
console.log(array.length)

// map()
var m=array.map(i=>i*i)
console.log(m)

// filter()
// it filter tha array based on the certain conditions
// 1Q.Number GRATER THAN 10 EVEN NUBER IN THA ARRAY

var b=[1,5,8,10,20,30,40,69,90]
// for(i of b){
//     if(i>=10){
//         console.log(i)
//     }
// }

var k=b.filter(i=>i>10)
console.log(k)

// Q. To filter pasitive number in the array

var c=[-0,-2,-10,20,100,200]
for(i of c ){
    if (i>0){
        console.log(i)
    }
    // else{
    //     console.log("negitive number")
    }
var h=c.filter(i=>i>0)
console.log(h)

// to print even number in the array
for(i of array){
    if (i%2==0){
        console.log(i)
    }
}
var i=[1,2,3,4]
var s=i.filter(i=>i%2==0)
console.log(s)

// reduce()
// It reduce the complete array into single value
var m=[1,2,3,4,5,6,7,8]
var sum=0
for(i of m){
    sum+=i
}
console.log(sum)

var h=m.reduce((a,b)=>a+b,0)
console.log(h)

// to find maxmum of given array
// var m=[1,2,3,4,5,6,7,8]
// let max=m.reduce()


// every()
// it check the condition if all the elements in the the array the satrifies the codition 9it return true if not false

var a=[2,3,4,5]
function checkeven(s){
    for(i of a){
    if (i%2==0){
        return false
    }
    }
    return true
}
console.log(checkeven(a))

console.log(a.every(i=>i%2==0))

// Some() it same as evry but condition if any elament in the array

console.log(a.some(i=>i%2==0))

// Set()
var s= new set()
s.add(1)
s.add(2)
console.log(s)