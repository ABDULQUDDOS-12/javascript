const changeContent = ()=>{
//   document.getElementById('heading').innerHTML = "welcome to Code crafer"
   

//by using reference also, heading is the object here
const headingChange = document.getElementById('heading');
headingChange.innerHTML = "Welcome to code crafter"

// console.log(document.getElementsByClassName('para'))

// console.log(document.getElementsByTagName('p'))


//querry selector, query selector all
console.log(document.querySelector('.para').innerHTML="I changed again")

//querySelectorAll gives you the number of total tags using by the respective id or name or class
console.log(document.querySelectorAll('.para'))
}
