// DOM  (Data object Model)

console.log(this)
console.log(window.document)
console.dir(window.document);

// log print(to see the output in the console)
// dir to see spacial objects properties and methods
console.log(document)
console.dir(document)

// by using document we can acess html element

document.childNodes[1]
console.dir(document.childNodes);
document.childNodes[1].childNodes[2].childNodes[1].innerText="Java script"
console.dir(document.childNodes[1].childNodes[2].childNodes[1].innerText);
console.dir(document.childNodes[1].childNodes[2].childNodes[1].childNodes[3])