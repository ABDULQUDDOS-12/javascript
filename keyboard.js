const keyPress = () => {
  document.getElementById('keys').innerHTML=`you press ${event.key} and it's code is ${event.code}`
}
const keyDown=()=>{
    document.getElementById('keys').innerHTML = "key is down"
}
const keyUp=()=>{
    document.getAnimations('keys').innerHTML="key is up"
}