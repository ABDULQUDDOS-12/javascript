//objects in javascript
// let bioData = {
//      myName:{
//        firstName:"Abdul",
//        lastName:"Quddos" 
//      },
//     myName1: "Abdul Quddos",
//     myAge: 22,
//     getData:function(){
//         console.log(`My name is ${bioData.myName.firstName} and my age is ${bioData.myAge}`)
//     }
// }
// console.log(bioData.myName1)
// console.log(bioData.getData())
// console.log(bioData.myName)


//this object in javascript
//it refers to the current context and that is window object
// console.log(this.alert("Awesome"))


//ex2
// function myName(){
//     console.log(this)
// }
// myName();
// console.log(myName())



// var myNames = "Abdul Quddos"
// function myName(){
//     console.log(this.myNames)
// }
// console.log(myName())


//ex 4
// const obj={
//     myAge:23,
//     myName(){
//         console.log(this.myAge)
//     }
// }
// console.log(obj.myName())



//this is not work with arrow functions in object
//interview question
// let obj={
//     name1: "Abdul Quddos",
//     age:23,
//     myArrow:()=>{
//       console.log(this.age)
//     }
// }
// console.log(obj.myArrow())


//2nd interview question
let bioData={
    myName:{
        realName:"Abdul Quddos",
        channelName:"Code crafter"
    },
    myAge:23,
    getData(){
     console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge}`)     
            
        }
    }
    console.log(bioData.getData())