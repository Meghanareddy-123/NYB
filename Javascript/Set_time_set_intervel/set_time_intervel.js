

// Settimeout ,Setinterval

setTimeout(() => {
    console.log("hellow this is a timer function")
},5000)

function dely(){
    // console.log()
    console.log('hello')
    ;
}
setTimeout(dely,2000)

function dely(a,b){
    console.log(a+b)
    console.log(
        ('world')
    );
}

console.log("this is outer function")

// var s=setTimeout(dely,2000,1,2)
// clearTimeout(s);
var a=setTimeout(0,2000,1,2)
clearTimeout(a);
console.log("this is settimeout")

function dely(){
    console.log("this is interval function")
}
// setTimeout(dely,3000,8,9)



let setinterval=setInterval(dely,1000)

// clearInterval(setinterval);

setTimeout(()=>{
    clearInterval(setinterval);
},7000)

setTimeout(dely,6000)








