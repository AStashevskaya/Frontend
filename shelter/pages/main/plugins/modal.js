function _createModal(options){
const modal = document.createElement('div')
modal.classList.add('modal')
modal.insertAdjacentHTML('afterbegin', `
<div class="modal__overlay"  data-close="true">
    <div class="modal__window">
        <div class="modal__header">
            <div class="modal__close-btn" data-close="true"><span data-close="true">&times;</span></div>
        </div>
        <div class="modal__content-background">
              <div class="modal__content">
          <div class="modal__img"><img src="../../assets/images/Jennifer.png" alt="pet"></div>
          <div class="modal__text-content">
              <div class="text-content">
                  <h2 class="text-content__title">Jenefer</h2>
                  <h3 class="text-content__subtitle">Dog -labrador</h3>
                  <p class="text-content__paragraph">Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.</p>
                  <ul class="text-content__list">
                      <li><strong>Age:</strong> 2 years</li>
                      <li><strong>Inoculations:</strong>none</li>
                      <li><strong>Diseases:</strong>none</li>
                      <li><strong>Parasites:</strong>none</li>
                  </ul>
              </div>
          </div>
      </div>
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
    },
    close(){
        closing = true
        $modal.classList.remove('open')
        $modal.classList.add('hide')
        setTimeout(() =>{
            $modal.classList.remove('hide')
            closing = false
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
        setContent(){

        }
    })
}