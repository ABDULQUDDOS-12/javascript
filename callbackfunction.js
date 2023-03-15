//function call withinthe function
//any function which accepts other function as an argument is called higher order function
const add = (a,b)=>{
   return a+b
}
const calculator  = (num1,num2,operator) =>{
  return operator(num1,num2)
}
let newcalc = calculator(5,4,add)
//calculator is a higher order function and add is a call back function
console.log(newcalc)