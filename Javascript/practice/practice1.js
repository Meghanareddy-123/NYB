

//  Practice Assessment  QUESTIONS (Today date:03/06/2025)\

// 1.Create an object called account with properties: id, type, and balance. Then: 
// Add a new property currency with any value 
// Delete the type property 
// Update the balance value 
// Iterate through the object and print each key and value in the format "key: value" 

 
var account={
    Id:1234,
    type :'SBI',
    Balance:30000

}
console.log(account)

// Add a new property currency with any value
account.currency=20000
console.log(account)

// Update the balance value 
account.Balance=35000
console.log(account)

// Iterate through the object and print each key and value in the format "key: value" 
for(let key in account){
    console.log(`${key}: ${account[key]}`);
}
// Delete the type property 
delete account.type
console.log(account)

//2. Write a function formatMessage(msg) that does the following: 
// Trims leading/trailing whitespace 
// Converts the string to lowercase 
// Checks whether it starts with the word "hello" and prints a message 
// Replaces all instances of "error" with "issue" 
// Splits the string into an array of words and returns it 

// var string="  Error handlings for js  "
// function formatMessage(){
//     console.log(string.trim())
//     console.log(string.toUpperCase())
//     console.log(string.startsWith("hello"))
//     console.log(string.replace("Error","Issue"))
// }
// formatMessage()

// var spilt=string.split(' ')
// console.log(spilt)


// this one is correct format
var string="  Error handlings for js  "
function formatMessage(str){
    let trimmedstr=string.trim();
    console.log(trimmedstr);
    let upperstr=trimmedstr.toUpperCase();
    console.log(upperstr)
    console.log(upperstr.startsWith("hello"))
    let replacestr=upperstr.replace("ERROR","ISSUE")
    console.log(replacestr);
    return replacestr;
}
formatMessage(string)

//3. Clone an object using the spread syntax {...}. Modify a property in the new object and show that the original object is not affected. Explain your result. 

var original={
    name:'megha',
    age:24
}

let clone={...original};
clone.age=28

console.log('origina.object:',original)
console.log("clone.object:",clone)


//4. Create a curried function calculateVolume(l)(w)(h) that returns the volume of a box (length × width × height). Call the function with three arguments and print the result. 
 
function calculateVolume(length){
    return function hii(width){
        return function bye(height){
            return length * width * height
        }

    }
}
console.log(calculateVolume(10)(20)(30));

// 5 Write a recursive function sumUpTo(n) that calculates the sum of all integers from 1 to n using recursion. For example, sumUpTo(5) should return 15. 

function sumUpTo(n){
    let sum=0
    for(i=1;i<=n;i++){
        sum=sum+i
        

    }
    return sum
}
console.log(sumUpTo(5))

// 6. Write a recursive function sumEven(n) that sums only even number for 1 to n

function sunEven(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sunEven(5)); 

// 7.create an object project with WebTransportBidirectionalStream,dedline,teamsize .then

var project={
   title: "Web_development",
   dedline: "04-06-2025",
   teamsize: "5"
}
project.status="ongoing"
console.log(project)

project.timesize=7
console.log(project)

delete project.dedline
console.log(project)

for(let key in project){
    console.log(`${key}: ${project[key]}`);

}

function logEventDetails(...events){
    var event={
        enentName : " Hackathon",
        date     : "2025-06-01"
    }
}
logEventDetails()