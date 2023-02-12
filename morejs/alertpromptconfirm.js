alert("alert the value of a!")
// let a = prompt("Enter a here!")
let a = prompt("Enter a number here","54")
b = Number.parseInt(a)
document.write(a)
alert("you entered the type of = "+typeof(b))
// console.log(a)
let write = confirm("Do you want to write it to the page?")
if(write){
    document.write(a)
}
else{
    document.write("Please allow me to write!")
}