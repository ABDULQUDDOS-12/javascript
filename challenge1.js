// var number = 10+'20' //concatenate number and string
// var number = 10-'20'//give -10 doing subtraction with string 20 that is bug
// var string = 'java'+'script'//concatenate two strings
// var string = 'java'-'script'//NaN
// var boolean = false - true//it assumes true as 1 and false as 0
//  var string = 'java'-8//not a number NaN
// console.log(boolean)
// console.log(string)
// console.log(number)

//1st interview question
//difference b/w null and undefined
// var number = null//it returns null because value null is defined
//var number //it returns undefined because number is not defined or value is not defined 
// console.log(number)//datatype of nullis object

//2nd interview question
/*What is NaN
NaN is a property of the global object
In other words, It is a variable in global scope
The intial value of NaN is Not a Number*/
var myNumber = 12345678977656454545;
var name1 = "abdul quddos"
console.log(isNaN(myNumber))
console.log(isNaN(name1))