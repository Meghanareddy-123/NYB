
// This keyword
// Refer to the current object
"usestrict";
var name ="kusuma"
var age=23

var obj ={
    name:"lasya",
    age :25,
    location:"banglore",

    // paly: function(){
    //     console.log(this.name);
    //     console.log(this.age);

     play: ()=>{

      console.log(this.name)
      console.log(this.age)

      var hello=()=>{
        console.log(this)
        console.log(this.nam)
        console.log(this.age)
      }
     hello()

    //   hii()=>{
    //     console.log(this);
     }
      
 }  

// }
console.log(this)
// obj.paly()
console.log(obj.name)
console.log(obj.na)

console.log(obj.age)


function hello(){
    console.log(this)
}
hello()

var fun1=function(){
    console.log(this)
}
fun1()

var fun2=()=>{
    console.log(this)
}
fun2()


var obj2={
    name:"shiva",
    age:24
}
console.log(obj2.name)
console.log(obj2.age)

// chanege of this refernce
//  call apply play 

obj.play.call(obj2,1,2,3,4)

obj.play.apply(obj2[1,23,4,5])

var m=obj.play.blind(obj,1,2,3,4)
m()








