// var myFriends = ['Abdul Quddos',22,'male','Mustufa','Abdullah']
//traversal of an array
//searching and filter in an array
//how to sort and compare an array
//how to insert,add,replace and delete elements in array(CRUD)
//Map(),Reduce(),Filter()

//var myFriends = new Array;
// var myFriends = ['Abdul Quddos','kamran','ghulam','Mustufa','Abdullah']
// console.log(myFriends[0])
// console.log(myFriends.length)
// console.log(myFriends[myFriends.length-1])

// //simple for loop
// for(var i=0;i<myFriends.length;i++){
//     console.log(myFriends[i])
// }


//after ecmascript 2015 we have for in and for of loop
// for(let elements in myFriends){
//     console.log(myFriends[elements])
// }


//for of loop
// for(let elements of myFriends){
//     console.log(elements)
// }

//for each loop
//traditional normal function
// myFriends.forEach(function(element,index,array){
// console.log(element+" index : "+index+ " array : "+array)
// })


//fat arrow function
// myFriends.forEach((element,index,array)=>{
//     console.log(element+" index : "+index+ " array : "+array)
//     })


//searching and filter in array
// //indexof()
// console.log(myFriends.indexOf("Mustufa"))//starting from 1st index
// console.log(myFriends.indexOf("Mustufa",2))//starting from index 2
// console.log(myFriends.indexOf("mustufa",2))//if element not found


//lastindexOf()
// console.log(myFriends.lastIndexOf("Mustufa"))


//array.prototype.includes()
// console.log(myFriends.includes("Mustufa",3))

//find()
//if the value not satisfying then find returns undefined
// prices = [200,300,400,500,600]
//price <400
// const myPrice = prices.find((curValue)=>curValue<400)
// console.log(myPrice)


//findindex()
//if the index not found then result in -1
// const myPrice = prices.findIndex((curValue)=>curValue<400)
// console.log(myPrice)

//filter method
//if the element not find it returns []
// const newPriceTag = prices.filter((elem)=>{
//  return elem>200;
// })
// console.log(newPriceTag)


//How to sort an array
//array.sort()
//it is useful for strings
//compare the numbers into strings then it matches 
// const months = ['Jan','Feb','March','April','May']
// const myMonths = months.sort()
// console.log(myMonths)

//push() //It add element to the end of the array
// const humans = ['Abdul Quddos','Mustufa','Syed Abdullah']
// humans.push('Ameer Hamza')
// const count = humans.push('Ameer hamza')
// console.log(humans.length)
// console.log(humans)
// console.log(count)


//unshift() //it adds element to the start of the array
// const humans = ['Abdul Quddos','Mustufa','Syed Abdullah']
// humans.unshift('Muhammad Ali')
// console.log(humans)

// const addNum = [1,4,7,9,10]
// addNum.unshift(4,5,8)
// addNum.sort((x,y)=>x-y)//sorting of number array
// console.log(addNum)



//pop() method removes an element from the end of the array
// const humans = ['Abdul Quddos','Mustufa','Syed Abdullah']
// humans.pop()
// console.log(humans)


//shift() method removes an element from front of the array
// const humans = ['Abdul Quddos','Mustufa','Syed Abdullah']
// humans.shift()
// console.log(humans)


//map()
const array1 = [43,12,15,76,45]
//num>12  map and filter are same
//map returns boolean value if the current data is greater or less then the provided value
//it returns new array without mutating the orignal one
//we can use multiple methods like reduce(),filter() with map() function
// let newArr = array1.map((elem,index,arr)=>{ 
//     return `index no = ${index} and the value is = ${elem} belong to ${arr}`
// })
// console.log(newArr)

//for each returns undefined
let newArr = array1.forEach((elem,index,arr)=>{ 
    return `index no = ${index} and the value is = ${elem} belong to ${arr}`
})
console.log(newArr)