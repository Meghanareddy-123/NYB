
// this_keyword

let person = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};
 
person.greet();


// "use strict";
var obj={
    nam:"megha",
    age:23,
    play:function(){
       console.log(this.nam);
       console.log(this.age);
    
    var hello =()=>{
        console.log(this.nam);
        console.log(this.age);
    }
    hello()
}}
 console.log(obj)
obj.play()
console.log(obj.name)
console.log(this)
console.log(name)
console.log(obj.name)



var name="pradeep"
var age=24 

var obj={
    nam:"megha",
    age:23,
    play:()=>{
       console.log(this.nam);
       console.log(this.age);
    
    var hello =()=>{
        console.log(this.nam);
        console.log(this.age);
    }
    hello()
}}
 console.log(obj)
obj.play()
console.log(obj.name)
console.log(this)
console.log(name)
console.log(obj.name)















// var obj={
//     name:"megha",
//     age:23,
//     play:function(){
//         // console.log({this.name});
//     }
// }
// //  console.log(obj.name)
// // obj.play()
// obj.play()

// var hello=() => {
//   consoile.log(this)
// }
// hello()
// console.log(this)