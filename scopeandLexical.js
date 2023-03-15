//scope chain and lexical scoping
//scope chain is used to resolve the value of variable names in js
//scope chain in js is lexically defined, which means that we can see what the scope chain will be looking at th code
//at the top we have global scope, which is window object in the browser
//lexical scoping means that the inner function can get access to their parent functions variables but the vice-versa is not true
let a = "Hello guys"
const first = () =>{
    let b = "How are you"
    const second = ()=>{
        let c= "hi i am fine thankyou"
        console.log(a+b+c)
    }
    second()
    // console.log(a+b+c) can't access this due to lexical scoping
}
console.log(first())