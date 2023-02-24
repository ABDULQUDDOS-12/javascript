//finding root element
// let t = document.documentElement
// console.log(t)
//finding elements in the head tag
// let h = document.head
// console.log(h)

//finding child nodes in the element
//if you are using tab,enter,whitespace then it will be counted in the text
// let v = document.body.childNodes
// console.log(v)


//it shows only the body childrens
// let c = document.body.children
// console.log(c)


//confirmation that an element have childnode or not
// let c = document.body.hasChildNodes()
// console.log(c)

//firstchild,last child => it includes text also becuase text is also a child
// let c = document.body.firstChild
// let l = document.body.lastChild
// console.log(c)
// console.log(v)


//firstElementChild,lastElementChild => it not encludes text becuase text is child but not an element
// let c = document.body.firstElementChild.firstElementChild //it returns the child of the child element
// let v = document.body.lastElementChild
// console.log(c)
// console.log(v)


//defining nested child in a variable
// const childTwo = document.querySelector('.child-two')
//or
// const childOne = document.firstElementChild.firstElementChild

//parentNode
// let c = document.body.parentNode
// console.log(c)


//siblings
let c = document.body.previousElementSibling.nextElementSibling
console.log(c)