// unconditional loops
// for in loop
// for off loop

var person={
    Name: "megha",
    age: 23,
    location:'banglore'
}
var details=["megha",23,'banglore']
console.log(person)
console.log(person.Name)
console.log(person.age)
console.log(person.location)

console.log(details[0])
console.log(details[1])
console.log(details[2])


// for in (objects/)

for(var x in person){
    console.log(x)    
    console.log(person[x])
}
// for in is used in both objects and arrys

for(var x in details){
    console.log(x)    
    console.log(details[x])
}

// for of loop(arry (syyblo.itterator()(method)))
// it is used only arrays
for(var x in details){
    console.log(x)    
     console.log(details[x])
}
// for(var x of person){
    // console.log(x)    type error : prerson is not itarable
    // console.log(person[x])
// }

// break (exit out of the loops)
// continue(skips that 1 value)

for (var i=0; i<10; i++){
    if (i%2==0){
        console.log(i);
        break
    }
}