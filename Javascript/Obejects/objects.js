// OBJECTS

// It is a reference datatype

// It is used to model real world entities

var employees={
    emp_name:"lasya",
    emp_id:123,
    e_mail:"lasya@gmail.com",
    e_phno:12345567,
    e_disigniation:"IT",

   
} 

console.log(employees)
console.log(employees.emp_name)
console.log(employees["emp_id"])


// to create an obeject we have multiple ways
// 1.object literly
// 2.factory function
// 3.constructor way
// 4.clascical way

// object literly way

let bike={
    company:"Honda",
    modal:'abc',
    color:'black',
    mnf: 2019,
    price :"1lack",

   bike:{
    modal:true,
    buy:function(){
        console.log("you can buy the bike")
    }
   },

};
console.log(bike.modal)
// console.log(bike[buy])
console.log(bike)

// .factory function
function person (name,age){
    console.log(this)
    // this refers current keyword

    this.name=name
    this.age=age
    console.log(name,age)


}
var deepu=new person("deepu",10)
// console.log(name2)

var nandu=new  person("nandu",40)

var kiran={
    name:"kiran",
    age:20
}

console.log(kiran.name)

// .[] key static then we use " "[]
var person={
    name:"rani",
    age:25

}
console.log(person)

// updating a value in the object
// console.log(person.name)
person.name="kusuma"

// adding a new iteam
console.location="chenni"

// deleteing an iteam in the object

delete person.name

console.log(person.salary)


// how to loop objects

// for in 


var person={
    name:'varsha',
    age:20,
    city :"banglore",
    salary:457890



};
for (p in person){
    // console.log(person.p)
    console.log(person["p"])
}

var a=Object.keys(person)
var b =Object.values(person)
var c=Object.entries(person)


console.log(a)
console.log(b)