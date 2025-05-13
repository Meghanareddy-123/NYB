
// Dom_terversing
// 1.parent
// 2.children
// 3.Sibligs

// parent
var div2=document.getElementById("div2")
console.dir(div2)
var parent=div2.parentElement;
parent.style.backgroundColor='yellow'
console.log(parent);

// children
var children =div2.children
console.log(children)

// firsterlementchild
var firstelement=div2.firstElementChild
console.log(firstelement)

// lastelementchild
var last=div2.lastElementChild
console.log(last)

// sibilings
// previous sibilings
// next sibilings


// next sibilings
var presibiling=div2.nextElementSibling
console.log(presibiling)
// previous sibilings
var presibiling=div2.previousElementSibling
console.log(presibiling)
