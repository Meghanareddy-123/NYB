// TASK-2

// 1.Print the multiplication table of a number (e.g., 7) from 1 to 10.

// for(i=1; i<=10 ; i++){
//     console.log(i*7)
// }

// let a=10
// while(a>=10){
//     console.log(a*7)
//     a++
// }

// 2.Print all multiples of 5 from 1 to 100.

// for(i=1; i<=100 ; i++){
//     console.log(i*5)
// }

// let a1=1
// while(a1>=100){
//     console.log(a*5)
//     a1++
// }

// 3.Sum all the odd numbers between 1 and 50. give code for javascript

let a=0 
for(i=1; i<=50; i++){
    if (i%2!==0){
        a+=i;
    }
    
}
console.log("The sum of odd numbers between 1 and 50 is:", a)