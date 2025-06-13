// // Non primitive datatypes
// // OBJECTS

var employees={
    emp_name:"Rachana",
    emp_id:123,
    e_mail:"racha@gmail.com",
    e_phno:12345567,
    e_disigniation:"Develpoer",
    location:'hyd' 
} 
console.log(employees)
// // to access an single iteam
// Objectname.keyname or objectreferrence.keyname
console.log(employees.emp_id)
console.log(employees['emp_name'])


// to create an obeject we have multiple ways
// 1.object literly
// 2.factory function
// 3.constructor way
// 4.clascical way

// object literly way
let car={
    company:'xyz',
    model:'abc',
    colour:'pink',
    manufactringyear: 2018,
    price:28282829,
    
    cars:{

    },
    model:[],
    stock:true,
    buy:function(){
        console.log("you can buy a car")
    }


};
console.log(car.stock)
console.log(car.buy)


// 2.factory function

function date(name,age){
    return{
        name:name,
        age:age
    }
}
var k=data("honey",25)
console.log(k)


// constructor way
function personName(name,age){
    // current object
    console.log(this)
    this.name=name
    this.age=age
    console.log(name,age)

}
var string=new personName("nandu",18)
// console.log(string)
var string1=new personName("sanju",20)


var string1={
    name:"sanju",
    age:20
}