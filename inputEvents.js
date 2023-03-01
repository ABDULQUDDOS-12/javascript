// const selectElement = () =>{
//     const inputChange = document.getElementById('ice').value;
//     const iceCreams = document.getElementById('iceCreams').value;
//     const result = document.getElementById('result').innerHTML = `${inputChange} you bought a ${iceCreams}`
//     console.log(`${inputChange} and ${iceCreams}`)
// }

const iceCreams = document.getElementById('iceCreams');
iceCreams.addEventListener('change',()=>{
    const inputChange = document.getElementById('ice').value;
    const iceCreams = document.getElementById('iceCreams').value;
    const result = document.getElementById('result').innerHTML = `${inputChange} you bought a ${iceCreams}`
})