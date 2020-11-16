function create (el, classNames, children, parent, ...attr){
    let element = null
    if(el){
       element = document.createElement(el)
    }
    if (classNames){
      element.classList.add(...classNames.split(' ')) 
    } 
    if (children && Array.isArray(children)){
        children.forEach(child => child && element.appendChild(child))    
    } else if (children && typeof(children) === 'object'){
        element.appendChild(children)
    } else if (children && typeof(children) === 'string'){
        element.innerHTML = children
    }
    if(parent){
        parent.appendChild(element)
    }
    /////
    if(attr.length){
        attr.forEach(([attrName, attrValue]) => {
            // для атрибуттов, которые идут без знака =
        if(attrValue === ''){
            element.setAttribute(attrName, '')
        }
        // для аттрибутов, которые соответствуют аттрибутам в списке
        if(attrName.match(/value|id|placeholder|row|col|autocorrect|spellcheck|src/)){
            element.setAttribute(attrName, attrValue)
        } else {
            element.dataset[attrName] = attrValue //для дата аттрибутов
        }
        })
    }
    return element
}