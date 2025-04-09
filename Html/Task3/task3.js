// Task-3

// 1.Month Display (Using Switch) takes a month number (1-12)

let Month=7
switch (Month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
         console.log("August");
         break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month");
}
// 2.Display Student Data(Using for...in loop) 

var Student_Data={
    SUDENT_NAME  : "megha",
    DOB         :"06/07/2002",
    STUDENT_ID  :555,
    EMAIL       :"megha@123",
    PHO_NO      : 1223467893
    
}

for(var x in Student_Data){
    console.log(x)    
    console.log(Student_Data[x])
}

// 3.Create an array that contains the marks of 5 students in an exam Use a for...of loop and calculate the average marks.

var markes=[60,55,78,95,48]
let sum=0;
for(let x of markes ){
    sum+=x
}
let avg=sum/markes.length;
console.log(avg)