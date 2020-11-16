import create  from './utils/create'
export default class Modal{
    constructor(gamefield){
        this.modal = create('div', 'modal')
        this.layout = create('div', 'modal__overlay')
        this.modalWrapper = create('div', 'modal__window')
        this.gamefield = gamefield
        this.animationSpeed = 300
        this.closing = false
        this.init()
    }
    init(){
        document.body.appendChild(this.modal)
        this.modal.appendChild(this.layout)
        this.layout.dataset.close = true
        this.modalWrapper.innerHTML = `  <div class="modal__header"><span  id="close" data-close='true'>&times</span></div>
        <div class="modal__content"><span class="congrats">Congratulations!</span>
            <span class="congrats" id='solve-with'></span>
            <span class=" congrats question">Would you like to play one more game?</span>
            <div class="buttons__wrapper">
            <a href="#" class="modal__btn " data-reset='true'>Yes</a>
            <a href="#" class="modal__btn" data-close='true'>No</a>
            </div>
        </div>`
        this.layout.appendChild( this.modalWrapper)
        console.log(this.modalWrapper)
    }
    open(){
        !this.closing && this.modal.classList.add('open')
       document.getElementById('solve-with').innerText = `You solve puzzle in ${this.gamefield.settings.addZero(this.gamefield.settings.min)}:${this.gamefield.settings.addZero(this.gamefield.settings.sec)} with ${this.gamefield.moves} moves`    
       clearInterval(this.gamefield.settings.progressIdentifier)
       document.body.style.height = '100vh'
       document.body.style.overflow = 'hidden'
    }
    close(){
        this.closing = true
        this.modal.classList.remove('open')
        this.modal.classList.add('hide')
        setTimeout(()=>{
        this.modal.classList.remove('hide')
        this.closing = false
        document.body.style.height = '100%'
        document.body.style.overflow = 'auto'
        },  this.animationSpeed)
    }
}