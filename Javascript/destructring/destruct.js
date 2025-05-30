
// Destructuring

var arr=[1,2,3]
var[a,b,c]=arr
console.log(a,b,c)

const numbers = [10, 20, 30];
const [d,e,f] = numbers;
 
console.log(d);
console.log(e);
console.log(f);
 
 
const [x, , z] = [10, 20, 30];
console.log(x, z);
 
const [h = 5, i= 10] = [7];
console.log(h);
console.log(i);