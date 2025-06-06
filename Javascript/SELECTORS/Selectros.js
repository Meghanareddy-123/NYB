
// DOM , Selectors and Dom Traversing(06/06/2025)

console.log(window.document)
console.dir(window.document)
console.dir(document)


// Selectors 
// There are 5 types

// 1.getElementById
// 2.getElementByClassName
// 3.getElementByTagName
// 4.querySelector
// 5.querySelectorAll



// 1.getElementById
// to get the single element

var a=document.getElementById('1');
console.dir(a)
// document.getElementById('1').style.backgroundColor='pink';
// document.getElementById('1.').style.fontSize=10

var b=document.getElementById('4');
console.dir(b)

// getElementByClassName

var c =document.getElementsByClassName('one')
console.dir(c)
// document.getElementsByClassName('one').style.backgroundColor='red';

// getElementByTagName

var d=document.getElementsByTagName('p')
console.dir(d)


// querySelector

// by using class name,tagname,id
var e=document.querySelector('.one'); //by using class name
console.dir(e)

var h=document.querySelector('#id'); //by using tag name
console.dir(h)

//  .querySelectorAll

var s=document.querySelectorAll('.one') //by using class name
console.dir(s)

var s1=document.querySelectorAll('#one') //by using id
console.dir(s1)

var s3=document.querySelectorAll('p') //by using Tagname
console.dir(s3)

var s4=document.querySelectorAll('.p1') //tagname with class name
console.dir(s4)


// DOM TRVERSING

// 
// 1.parent
// 2.children
// a.firstelementChild
// b.lastElementChild
// 3.Siblings

var div1=document.getElementById('div')
console.dir(div1)

// parent Element
var parent=div1.parentElement;
// parent.Style.backgroundColor='yellow'
console.log(parent);

// children
var children=div1.children
console.log(children)

// firstElementchild
var firstelementChild=div1.firstElementChild
console.log(firstelementChild)

// lastElementChild
var lastelementChild=div1.lastElementChild;
console.log(lastelementChild)

// var middleelement=div1.children[middleindex];
// console.log(middleelement)

// siblings
// previous sibilings
// next sibilings


// next sibilings
var presibiling=div1.nextElementSibling
console.log(presibiling)
// previous sibilings
var presibiling=div1.previousElementSibling
console.log(presibiling)

// To create newelement in html
var newelement=document.createElement('h1')
newelement.textContent="this is new element";
div2.appendChild(newelement);
console.log(newelement)
newelement.setAttribute('id','newelement')
newelement.setAttribute('class','newelement');
