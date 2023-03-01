// function mouseDown(){
//     document.getElementById('myP').style.color="#F8B627"
// }
// function mouseUp(){
//     document.getElementById('myP').style.color="#ff0000"
// }



//mouse enter and mouse leave
const mEnter = document.getElementById('myP')
mEnter.addEventListener('mouseenter',()=>{
    mEnter.style.backgroundColor="red";
    console.log('Mouse enter bro')
})

mEnter.addEventListener('mouseleave',()=>{
    console.log('Mouse leave bro');
    mEnter.style.backgroundColor="blue"
})