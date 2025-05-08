// Reference datatype


var details=[
    {name:"rani",age:22, add:'banglore',phno:3345656789, emp_id:4},
    {name:"raju",age:25, add:'hyd',phno:6789432198, emp_id:2},
    {name:"pandu",age:20, add:'ban',phno:6789432198, emp_id:3},
    {name:"chinnu",age:24, add:'hyd',phno:6789432198, emp_id:1},
];
// to get age(number) asscending order by using sort method
console.log(details)
details.sort((a,b)=> a.age - b.age)
console.log(details)
details.sort((a,b)=> b.age - a.age)
console.log(details)

details.sort((a,b)=>a.emp_id - b.emp_id)
console.log(details)
details.sort((a,b)=>b.emp_id - a.emp_id)
console.log(details)

// to  get the (a-z) by using localCompare
details.sort((a,b)=> a.name.localeCompare(b.name));
console.log(details)

// details.sort((a,b)=> a.name.localeCompare(b.name));
details.sort((a,b)=> a.add.localeCompare(b.add));
console.log(details)
// details.sort((a,b)=> b.add.localeCompare(a.add));

// map() set ()

var a=new Map()
a.set("name","rupa")
a.set("age",25)
a.set("email","megha@gmail.com")
console.log(a)
console.log(a.size)

var arr=[1,4,5,7,0.8]
for (i in arr){
    a.set(i,arr[i])
}
console.log(a)