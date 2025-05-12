// DOM  (Data object Model)

// console.log(this)
// console.log(window.document)
// console.dir(window.document);

// log print(to see the output in the console)
// dir to see spacial objects properties and methods
// console.log(document)
// console.dir(document)

// by using document we can acess html element

// document.childNodes[1]
// console.dir(document.childNodes);
// document.childNodes[1].childNodes[2].childNodes[1].innerText="Java script"
// console.dir(document.childNodes[1].childNodes[2].childNodes[1].innerText);
// console.dir(document.childNodes[1].childNodes[2].childNodes[1].childNodes[3])

// document.childNodes[1].childNodes[2].style.color='yellow'
// document.childNodes[1].childNodes[2].style.backgroundColor='blue';

// Selectors 5 types

// 1.getElementById
// 2.getElementByClassName
// 3.getElementByTagName
// 4.querySelector
// 5.querySelectorAll


// 1.getElementById

var a=document.getElementById('heading1')  //single element
console.dir(a)
document.getElementById('heading1').style.backgroundColor='red';

// 2.getElementByClassName

var b=document.getElementsByClassName('one') //multiple elements
console.log(b)

var C=document.getElementsByTagName('h1') 
console.log(C)


var d=document.getElementsByTagName('h5') 
console.log(d)


var k=null
console.log(k)

// queryselector
// by using class name tag name id

var g=document.querySelector('h4')
console.dir(g)

// query selectorall
var h=document.querySelectorAll('h4')
console.log(h)
