//set timeout(function,milliseconds) executes a function after waiting a specified number of milliseconds
// const showMyName= document.querySelector('#showMyName')
// const btn = document.querySelector('#btn')
// const showMyName1 = ()=>{
//     showMyName.innerHTML="loading....."
//    setTimeout(()=>{
//      showMyName.innerHTML="Abdul Quddos"
// },1000)}
// btn.addEventListener('click',showMyName1)

//cleartimeout
// function myFunction(){
//     alert("Hello")
// }
//setInterval(function,milliseconds) same as set timeout, but repeats the action of function continuosly

const stopNum= document.querySelector('p')
const btn = document.querySelector('#btn')
let timeRef
let num=0;
const showMyNum = ()=>{
    stopNum.innerHTML="loading....."
   timeRef = setInterval(()=>{
      stopNum.innerHTML=`${num}`;
      num++;
    },1000)   
}
btn.addEventListener('click',showMyNum)


stopInterval.addEventListener('click',()=>{
  clearInterval(timeRef)
})