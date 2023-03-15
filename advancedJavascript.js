//event bubbling and event capturing
const parentId = document.getElementById('parentId')
const childId = document.getElementById('childId')
const parentCall = () =>{
    alert('Parent Div call')
}
const childCall = () =>{
    alert('Child Div call')
    //event.stopPropagation();
}
//by default event bubbling is occured if we not set that event bubbling or capturing
parentId.addEventListener('click',parentCall,false)//it tell you that event is bubbling or capturing phase
parentId.addEventListener('click',childCall,false)