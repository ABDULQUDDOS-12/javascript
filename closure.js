//a closure is the combination of function bundeled together (enclosed) with references
//to its surrounding state(lexical environment)

//in other words a closure gives you access to an outer function's scope from an inner function
// const outFun = (a) =>{
//   let b = 10;
//   const innerFun = () =>{
//     let sum = a+b
//     console.log(`the sum of the two numers are ${sum}`)
//   }
//   innerFun()
// }
// outFun(5)



//one more example
// const outFun = (a) =>{
//     let b = 10;
//     const innerFun = () =>{
//       let sum = a+b
//       console.log(`the sum of the two numers are ${sum}`)
//     }
//     return innerFun
//   }
//   let checkClosure =  outFun(5)
//   console.log(checkClosure)
//checkClosure()
// console.dir(checkClosure)


//interview question
//what is synchronous and asynchronous javascript
//synchronous javascript is that if a function writes first it will execute first than other
//but after ajax it will converted into asynchronous and waiting time is finished after ajax
