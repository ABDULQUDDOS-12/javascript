//LET vs CONST vs VAR
//var => function scope
//let and const => block scope
// var myName = "Abdul quddos"
// console.log(myName)
// myName = "New abdul Quddos"
// console.log(myName)

// let myName = "Abdul quddos"
// console.log(myName)
// myName = "New abdul Quddos"
// console.log(myName)



// const myName = "Abdul quddos"
// console.log(myName)
// myName = "New abdul Quddos"
// console.log(myName)


//function scope
// function biodata(){
// var name = "Abdul"
// console.log(name)
// if(true){
//   var myLastName = "Quddos"
//   console.log(name+" "+myLastName)
// }
// console.log(myLastName)
// }
// biodata()



// //Let with function scope showing error
// function biodata(){
//     var name = "Abdul"
//     console.log(name)
//     if(true){
//       var myLastName = "Quddos"
//       console.log(name+" "+myLastName)
//     }
//     console.log(myLastName)
//     }
//     biodata()


    //Template literals
//     var table = 8
// for(let x=1;x<=10;x++){
//   console.log(`${table} X ${x} = ${table*x}`)
// }




//Default parameters
// function mult(a,b=5){//in this case we put b=5 defualt value incase we miss the second argument
//   return a*b
// }
// multiply =  mult(5)
// console.log(multiply)


//fat arrow function
// const sum = () => {
//   let a = 5,b=10
//   let sum = a+b
//   return `the sum of the two numbers are : ${sum}`
// }

//Another arrow function
const sum = () => `the sum of the two numbers are : ${(a=5)+(b=10)}`;
console.log(sum())

