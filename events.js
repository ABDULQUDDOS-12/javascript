//1. using inline event alert()
//2. by calling a function
//3. by using inline events like onclick() property elements.onclick
//4. using eventListeners (addEventListeners and IE's attach attach Event) //capturing and bubbling
// const callingFunction=()=>{
//     alert('most common ways of writting functions')
// }


//3rd way
//by using normal functions it returns only the last function that is used
// const thirdWay = document.getElementById('thirdWay')
// thirdWay.onclick = function(){
//     alert('most common way of writing function again!')
// }
// thirdWay.onclick = function(){
//    console.log("most common way of writting function again!")
// }
//4th way

//callback function
//event listener returns both functions
// const forthWay = document.querySelector('#forthWay')
// forthWay.addEventListener('click',()=>{
//     alert('i love this way of writing')
// })
// forthWay.addEventListener('click',()=>{
//  console.log("I love this way of writing")
// })