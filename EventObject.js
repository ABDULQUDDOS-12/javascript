const forthWay = document.getElementById('forthWay')
const checkEvent=()=>{
  alert('hum Event Object daikh rhay hain')
  console.log(event)
  console.log(event.target)
  console.log(event.type)
}
forthWay.addEventListener('click',checkEvent)