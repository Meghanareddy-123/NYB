
// String methods(12/06/20205)

// a.length
// b.touppercase
// C.tolowercase
// d.trim


// length
var a='Meghana Reddy'
console.log(a.length)

// Check if a string is empty

var input = "";

if (input.length === 0) {
  console.log("The string is empty.");
} 
else {
  console.log("The string is not empty.");
}

// touppercase,tolowercase()

let Name='Lithesha Reddy'
let name1='MEGHANa'
console.log(Name.toUpperCase())
console.log(name1.toUpperCase())
console.log(Name.toLowerCase())
console.log(name1.toLowerCase())


// Write a function that takes a string as input and returns the string converted entirely to uppercase.
function uppercase(){
    var a='Aeroplane'
    console.log(a.toUpperCase())
    console.log(a.toLowerCase())
}
uppercase()

// Given an array of names, write a program to create a new array where all names are in uppercase.
// var c=['mango','banana','pinepple','gova']
// console.log(c.toUpperCase())

var c = ['mango', 'banana', 'pineapple', 'guava'];
var upperC = [];

for (var i = 0; i < c.length; i++) {
  upperC.push(c[i].toUpperCase());
}

console.log(upperC);


// remove white spaces in 3 ways
// trim:it remove both side whitespaces ,charecters
// trimstart
// trimEnd

var string='       @  hello  @    '
console.log(string.trim())

var str=' java script yyyyyy '
console.log(str.trimStart());

var str = '     java script yyyyyy';
console.log(str.trimEnd());

// SPLIT METHOD

let flowers='Rose,sunflower,jasmine'
flow=flowers.split(",")
console.log(flow)

// slice
// Extract a specific part of  string by using slice method

var a="Hello good morning wellcome to javascript "
// Slice (startingindex,endingindex)
console.log(a.slice(0,4))
console.log(a.slice(4,15))
console.log(a.slice(0,-5))
console.log(a.slice(0,-20))
console.log(a.slice(11,a.length))
console.log(a.slice(20,5))

// SUBSTRING
// doesnot accepting nagitive values
const S="Hello world"
console.log(a.substring(2,8))
console.log(S.substring(-1,0))//to return empty string
console.log(a.slice(5,0))

// INCLUDES
// checking substring in existing string
// srartwith,endwith

var f='apple banana orange'
console.log(f.includes("m"))
console.log(f.includes('p'))
console.log(f.startsWith("apple"))
console.log(f.endsWith("apple")) 

// INDEXOFF 
// it return Boolean values
console.log(f.indexOf("o"))
console.log(f.indexOf("a"))
console.log(f.indexOf("n"))
// lastindex
console.log(f.lastIndexOf("n"))
console.log(f.lastIndexOf("a"))

// REPEAT: It repeat multiple times

var d='hii'
for (i=0;i<3;i++){
    console.log(d)
}
// by using repeat method print multiple times in string
console.log(d.repeat(3))

// Replace
const n="Hello this is js class "
console.log(n)
console.log(n.replace("js","java script"))

// Concat()
// adding new string by using concat
var g="hello"
var g2="world"
console.log(g+g2)
// by using concat method
console.log(g.concat(g2))
console.log(g.concat("meghana"))


