function _createModal(options){
const modal = document.createElement('div')
modal.classList.add('modal')
modal.insertAdjacentHTML('afterbegin', `
<div class="modal__overlay"  data-close="true">
    <div class="modal__window">
        <div class="modal__header" data-close="true">
            <div class="modal__close-btn" data-close="true"><span data-close="true">&times;</span></div>
        </div>
        <div class="modal__content-background" data-close="true" data-content>
     
        </div>
    </div>
</div>
`)
document.body.appendChild(modal)
return modal
}

$.modal = function (options){
 const ANIMATION_SPEED = 300 
   // $modal - node element 
 $modal = _createModal(options)  
 let closing = false
 let isDestroyed = false
 const modal = {
    open(){
        if (isDestroyed) return
       !closing && $modal.classList.add('open')
    //    document.body.classList.add('antiscroll')
       document.body.style.height = '100vh'
       document.body.style.overflow = 'hidden'
    },
    close(){
        closing = true
        $modal.classList.remove('open')
        $modal.classList.add('hide')
        setTimeout(() =>{
            $modal.classList.remove('hide')
            closing = false
            // document.body.classList.remove('antiscroll')
            document.body.style.height = '100%'
           document.body.style.overflow = 'auto'
        }, ANIMATION_SPEED )
    }
 }
 document.addEventListener('click', (event) => {
    if(event.target.dataset.close){
        modal.close()
    } 
 })
   
    return Object.assign(modal, {
        destroy(){
        $modal.remove()
        isDestroyed = true
        },
        setContent(html){
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}
