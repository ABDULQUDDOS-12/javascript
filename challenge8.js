//find the square root of each element in an array given array
// let arr=[25,36,49,64,81]
// let arrSqr = arr.map((curElem,index,array)=>{
//  return Math.sqrt(curElem)
// })
// console.log(arrSqr)


//Multiply each element by 2 and return only those elements which are greater than 10
let arr = [2,3,4,6,8]
let arr2 = arr.map((currElem,index,array)=>{
return currElem*2
}).filter((currElem)=>{
    return currElem>10
})
console.log(arr2)