// Array
// Form,fill,at,sorting array

// from method
// convert string to array
// it is used to spilt induvual charaecter
var a="meghana"
console.log(a)
var k=Array.from(a)
console.log(k)

// at
// it return the value of that index
var b=[1,2,3,4,7,8,9]
// console.log(b.indexof(3))
console.log(b.at(2))

// fill
// it is used to fill tha array with some valu
// Syntax(value to replace,starting,ending)
console.log(b)
b.fill(0,0,1)
console.log(b)

b.fill(1,3,6)
console.log(b)

b.fill(1,1,b.length)
console.log(b)

// starting of array
// arranging item in the array in a particula ondragover(small to big or big to small)
// sort() assending order
// Reverse() decending order
// sort and reverse wii work only for single Value
var d=[1,9,8,7,20,90,49,59,67,89,96,48,60,69]
// sort()
// d.sort()
// console.log(d)

// reverse()
d.reverse
console.log(d)

// it works all iteams in the  array 
d.sort((a,b)=>a-b)
console.log(d)
d.sort((a,b)=>b-a)
console.log(d)

function