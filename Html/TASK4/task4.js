

let student_information={
    name :'nandu reddy',
    age  :24,
    subjects:['English','Telugu','Maths'],
    
    getdetails: function(){
        return`Name:${this.name},Age:${this.age},Subjects:${this.subjects.join(",")} `;
    }
    
}
console.log(student_information.getdetails());

// 2.	Function Conversion
// a.	Write a function to find the factorial of a number.

function factorial(n){
    if(n===0 || n===1)return 1;
    return n*factorial(n-1);
}
console.log(factorial(7))
    
// b.	Convert the same into:
// i.	Function expression

// anonymous function expression

let factorialExpr=function(n){
    if(n===0 || n===1) return 1;
    return n*factorialExpr(n-1);
}
console.log(factorialExpr(6));


//arrow function expression
let factorialArrow= (n)=>{
    if(n===0 || n===1) return 1;
    return n*factorialArrow(n-1);
}
console.log(factorialArrow(5))

// 3.Prime Number Checker
// Task:
// Write a function isPrime(num) that:

// Returns true if the number is prime
// Returns false if not prime

function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 
  
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false; 
    }
  
    return true; 
  }
  
  console.log(isPrime(3));
  console.log(isPrime(4));
  console.log(isPrime(10));
  console.log(isPrime(5));


//  4. Factorial Calculator
//   Task:
//   Implement factorial(n) that:
  
//   Calculates factorial using a loop (not recursion)
//   Returns 1 for input 0
//   Returns -1 for negative inputs
  
function factorial(n) {

    if (n < 0) {
        return -1;
    }
    if (n === 0) {
        return 1;
    }
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;

    }
    return result;
}

console.log(factorial(5));  // Output: 120
console.log(factorial(0));  // Output: 1
console.log(factorial(-3)); // Output: -1

