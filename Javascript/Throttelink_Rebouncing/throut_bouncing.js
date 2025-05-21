
// Throtteling and debouncing

var div =document.getElementById('performance')

var n=0
var t=0
var d=0

var normal = document.getElementById('n')

var throttling=document.getElementById('t');
var debouncing=document.getElementById('d');
function normalevent(){
    // div.addEventListener('click',()=> {

    n++;

    normal.innerText=`normalcount : ${n}`

}
var throttle=true;
        function throttlingEvent(){
           if(throttle==true){
            throttle=false;
            t++;
            throttling.innerText=`throttling count: ${t}`
            setTimeout(()=>{
            throttle=true;
           },3000)
           }
           }

div.addEventListener('click',()=>{
  normalevent()
  throttlingEvent()
 })


var debouncing=true;
 function debouncingevent(){
    if (debouncing == true)
     debouncing=false
     d++;
     debouncing.innerText=`debouncingcount : ${d}`
     setTimeout(()=> {
        debouncing=true;
     },3000)
 }
 div.addEventListener('click',()=>{
  debouncingevent()
 })