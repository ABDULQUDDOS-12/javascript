//single or more characters written inside
//javascript strings are used for storing and manipulating text
//it is primitive datatypes
//you can use single or double quote for presenting string
// let myName = 'Abdul Quddos'
// let myChannel = 'Abdul quddos tv'
// let ytName = new String('Hafiz abdul quddos')//string constructor
// console.log(myName)
// console.log(ytName)


//length of string
// let myName = 'Abdul Quddos'
// console.log(myName.length)

//Escape character
// let anySentence = "We are so called \"Vikings\" from the North" //with escape character
// let anySentence = "We are so called \"Vikings\" from the North" //without escape character
// console.log(anySentence)

// //finding a string in a string
//search()
//if the element not found then it returns -1
// const myBioData = 'I am abdul Quddos a'
// console.log(myBioData.search('a'))


// const myBioData = 'I am Abdul Quddos'
// console.log(myBioData.indexOf('Abdul'))

// //lastIndexOf()
// const myBioData = 'I am Abdul Quddos A'
// console.log(myBioData.lastIndexOf('A',20))


//There are three methods for extracting a part of string
//slice(start,end)
//substring(start,end)
//substr(start,length)

//The slice() method extracts a part of string and returns the extracted part into the new substring
// var str = "Apple,banana,kiwi"
// // let res = str.slice(2,5)
// let res = str.slice(5,-2)
// console.log(res)

//substring() method
//substring is similiar to the slice method but the only difference is it cannot accept negative indexes
// var str = "apple,banana"
// var newstring = str.substring(0,3)
// console.log(newstring)


//substr() is similiar to slice()
// var str = "Apple,banana,kiwi"
// // let res = str.substr(0,4)
// let res = str.substr(-10)
// console.log(res)


//replace()
//string.prototype.replace(searchFor,replaceWith)
// var myName = 'I am Abdul Quddos Abdul'
// let replaceData = myName.replace("Abdul","Don")
// console.log(replaceData)


//extracting string characters
//there are three methods for extracting string characters:
//charAt(position)
//charCodeAt(position)
//property access []


// //charAt()
// let str = 'Hello world'
// console.log(str.charAt(0))


//charCodeAt()
//It returns the unicode character of the string
// let str = 'Hello world'
// console.log(str.charCodeAt(0))

//toUpperCase() , toLowerCase()
// let myName = "Abdul Quddos"
// console.log(myName.toLowerCase())
// console.log(myName.toUpperCase())

//concat() method add two strings
// let fName = "Abdul"
// let lName = " Quddos"
// let fullName = fName.concat(lName)
// console.log(fullName)


//trim()
//the trim() method removes white spaces from the first and last part ofthe string
// var str = "   Hello world!   "
// console.log(str.trim())


//how to convert a string into an array
// var fruits = "apple,mango,banana,orange"
// console.log(fruits.split(","))

