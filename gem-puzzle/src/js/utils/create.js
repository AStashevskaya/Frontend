export default function create (el, className, children){
    let element = null
    if(el){
       element = window.document.createElement(el)
    //    element = document.createElement(el)
    }
    if (className){
        element.classList.add(className) 
    } 
    if (children){
        element.innerHTML = children
    }
    return element
}
