 
// 1. Find Maximum of Two Numbers
let a=10
let b=20
    if (a > b) {
        console.log("a is grater ") 
    }
     else if (b > a) {
        console.log("b is greater")  
    }

// 3. Check Positive/Negative/Zero
let A=10

    if (A > 0) {
        console.log("Positive")
    } 
    else if (A < 0) {
        console.log("Negative")
    } 
    else {
        console.log( "Zero")

    }
    // let A1=10
    // let A2=20
     
    // 2. Simple Calculator

        switch (a1=10,b1=20) {
            case '+':
                console.log(a1 + b1)
            case '-':
                console.log (a1 - b1)
    
            case '*':
                console.log( a1 * b1);
            case '/':
                if (b1 === 0) {
                    console.log("Division by zero")
                }
                console.log( a1 / b1)
            default:
                console.log( "Invalid operation")
        }
    

// 4. Find Array Sum

    // var details=[10,20,30,40,50]
    
    // let sum = 0;

    // for (let i = 0; i < details.length; i++) 
    //     {
    //     sum += details[i];
    // }

   let details=[20,30,40,50]

    let avg = 0;

    for (let i = 0; i < details.length; i++) {
        avg += details[i];
    }
   
    let average = avg / details.length;
    console.log(avg)
    

   
   
