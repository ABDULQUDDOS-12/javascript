//hoisting in javascript
//we have creation and execution phase
//hoisting in javascript is a mechanism where variables and functions declarations are moved to the top of their scope before the code execute.
// console.log(myName)
// var myName;
// myName = "Abdul Quddos"
//how the creation phase works
//var myName = undefined
//console.log(myName)
//myName = "Abdul Quddos"
//only var is applicable in hoisting part otherwise let and const thows an error


//asynchronous and synchronous javascript
//Asynchronous behaviour
const func2 = () =>{
    setTimeout(()=>{
    console.log(`function 2 is called`)
    },2000)
}
const fun1 = () => {
    console.log(`function 1 is called`)
    func2();
    console.log(`function 1 is called`)
}
fun1();

