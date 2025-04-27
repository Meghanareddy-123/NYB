// Template string

var a=10
var b= 20
console.log("sum of a and b",a+b)

// Template string
// Embedding value and string

console.log(`sum of ${a} and ${b}:${a+b} `)

var a=10
var b= 20
console.log("sum of a and b",a*b)

console.log(`sum of ${a} and ${b}:${a*b} `)

// STRING
// collection of Character

// string methods
// 1.length of the string

var b='meghana'
console.log(b)
console.log(b.length)

var string =" this is strig object"
console.log(string.length)

// Remove white space

// there are 3 ways
// 1.trim():it remove white spaces both sides
// 2.trimStart():it remove only begining of the string
// 3.trimEnd():it remove only ending of the string

var a= "   megha   "
console.log(a)
console.log(a.trim())
console.log(a.trimStart())
console.log(a.trimEnd())

// Extraction a specific part of the string

var a="hello good morning" 

console.log(a.slice(0,4))
console.log(a.slice(4,10))
console.log(a.slice(11,a.length))
console.log(a.slice(0,-1))

// substring

console.log(a.substring(0,a.length))
console.log(a.substring(0,-1))

// substr(substr(starting,length))
console.log(a.substr(2,10))
console.log(a.substr(0,12))

//n
console.log(a.indexOf("n"))
console.log(a.indexOf("o"))

// ChatAT
// STINGNAME.CharAt(indexvalue)
// console.log(a.Cha(0))

// ASCII
// console.log(chatCodeAt(0))
// console.log(charCodeAt("a"))

// toupper
// console.log(a.ToupperCase("megha"))

// REPLACE 
// it can replace single word or single charecter and replace entrie string
var a="Megha neelam"
console.log(a)
console.log(a.replace("Megha","Reddy"))
console.log(a.replace("Megha neelam","Reddy"))

console.log(a.replace("Megha","nm"))

// CONCAT 

var a="hello"
var b="js"
console.log(a+b)
console.log(a.concat(b))
console.log(b.concat(a))

// SPILT METHOD

var string="this is java script class"
console.log(string)

// to get individaul word by using split
// var b=string.split(", ")
// var b=string.split(" ")

// How to find existing string
var s="apple banana grapesb"
var c="mango"

console.log(s.lastIndexOf("b"))
console.log(s.indexOf("p"))

// includes
// startswith
// endwith
// console.log(a.startSwith("apple"))
// console.log(a.endSwith("apple"))


// REPEAT
var a="hii"
console.log(a.repeat(3))


