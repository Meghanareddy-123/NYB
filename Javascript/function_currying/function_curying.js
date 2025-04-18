// Functions
// function currying,recursive function,higher orderd function,first class function

// function currying

// function A(a,b){
//      return function B(){
//         // return function c()
//         return a+b
//         }
       
//      }

// A()
// console.log(A(1,2,3,4,5)())


// function A(a){
//     return function B(b){
//         return function c(c){
//             return function d(d){
//                 return a+b+c+d    
//             }
//         }
//     //    return a+b+c+d+e+f
//        }
      
//     }

// A()
// console.log(A(1)(2)(3)(4));


// function hello(){
//     return function(hai){
//         return function b(){
            
//         return "return this funtion curying"
//         }
        
//     }
// }
// console.log(hello()())


// function hello(a,b,c){
//     return function hai(){
//         return function bye(){
            
//             return a+b+c
//         }
        
//     }
// }
// console.log(hello(1,2,3)())
// console.log(hello(1,2,3)()())

// function hello(a){
//     return function hai(b){
//         return function bye(c){
            
//             return a+b+c
//         }
        
//     }
// }
// console.log(hello(1,2,3)())
// console.log(hello(1)(2)(3))


// recursive function

// function hello(a){
//     let sum=0
//     for (let i=1;i<=a; i++){
//         sum+=i
//     }
//     return sum
// }  

// console.log(hello(5))

// /sum of fisrt five natural numbers(1,2,3,4,5)
// function hello(a){
    // if (a==0){
        // return 0;
    // }
    // return a+hello(a-1);//5+4+3+2+1+0
    //5+4+3+2+1+0-1-2-3-4-5
//  }

// console.log(hello(5));//15

//  //product of fisrt five natural numbers

 function ha(a){
    if(a==0){
    
    return 1;
    }
 
return a*ha(a-1);//5*4*3*2*1*0
 }
console.log(ha());


// higher orderd function,first class function

var a= function hell(){
   return "this is hello function";//hello function ---first class function
}

 function ha(M){
    return M();// return function hello(){
    //   return "this is hello function";
}
console.log(ha(a));//hai function is higher order function