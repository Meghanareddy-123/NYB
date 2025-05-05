
// ARRAY METHOD

// 1.MAP to return array
// 2.FILTER to return array
// 3.REDUCE to return single value
// 4.EVARY to return true or false all values
// 5.SOME  to return true or false any values
// 6.SET to return new set

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

// Set():does not allow duplicate values in the set

var s= new Set()
s.add(1)
s.add(2)
s.add(1)
s.add(3)
s.add(4)
s.add(5)
s.add(6)
console.log(s)

// delete() to delete iteam in the set
s.delete(6)
console.log(s)

// size() to check size of the set
console.log(s.size)
console.log(s.length)

//  has() to check the iteam in the set or not
console.log(s.has(0)) 
console.log(s.has(4))

// clear() it remove all iteam in tha set 
console.log (s.clear())



// How to remove duplicate value in the array?

var arr=[1,2,2,3,3,4,5,6,7,7]
console.log(arr)
var arrset=new Set(arr)
console.log(arrset)

// to convert set to array
var arrset=[new Set(arr)];
console.log(arrset)

var arrset=[...new Set(arr)]
console.log(arrset)

// it remove duplicate iteams by using push,inclues,indexoff
function hello(){
var newarr=[];
for (i of arr){
    if(newarr.includes(i)) {
        continue;
    }
    else{
        newarr.push(i);
    }
}
    return newarr ;
}
hello()
console.log(hello(arr))


// flatting of 

var arr=[10,20,30,"hii",undefined,[4,5,6[55,8,9[80,30,39[1,2,4,5],[1,2,3,][2.4,7]]]]]
console.log(arr)
console.log(arr.flat(2))