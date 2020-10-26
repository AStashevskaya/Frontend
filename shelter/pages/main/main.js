
class Catalog {
    constructor(){
      this.pets = []
      this.container = '.active'
      this.newContainer = '.new-slide'
      this.init()
    }
    init(){
      if(this.pets.length === 0){
        pets.forEach(el => {
            this.pets.push(new Pet (el))
        })
      }      
      this.shuffle()
      this.render()
    }
    render(){
     let html =  this.pets.reduce((accum, el) => accum+=el.render(), '')
     document.querySelector(this.container).innerHTML = html
    }
    renderNewSlide(counter){
      // this.shuffle()
      let html = ''
      if(counter % 2){
        this.shuffle()
      for(let i = 0; i< 3; i++){
        html += this.pets[i].render()
      } 
      } else {
        for(let i = 3; i< 6; i++){
          html += this.pets[i].render()
        } 
      }
      // let html =  this.pets.reduce((accum, el) => accum+=el.render(), '')
      document.querySelector(this.newContainer).innerHTML = html
    }
    shuffle(){
      this.pets.sort(() => Math.random() - 0.5);
    }
}

const catalog = new Catalog 
// isChanging предотваразет нажате на стрелку пока анимация не закончилась
//counter  необходим для хождения по массивуб чтобы каждые три карточки не повторялись
let isChanging = false
let counter = null
document.addEventListener('click', (event) => {
  // let isChanging  = true
const targetDS = event.target.dataset
const parentTagetDS = event.target.parentNode.dataset
        if(parentTagetDS.info || targetDS.info){
        event.preventDefault()
        let name = targetDS.name || parentTagetDS.name 
        const pet = catalog.pets.find( el => el.name === name)
        modal.setContent(`<div class="modal__content">
        <div class="modal__img"><img src="${pet.img}" alt="pet ${pet.name}"></div>
        <div class="modal__text-content">
            <div class="text-content">
                <h2 class="text-content__title">${pet.name}</h2>
                <h3 class="text-content__subtitle">${pet.type} - ${pet.breed}</h3>
                <p class="text-content__paragraph">${pet.description}</p>
                <ul class="text-content__list">
                    <li><strong>Age:</strong>${pet.age}</li>
                    <li><strong>Inoculations:</strong>${pet.age}</li>
                    <li><strong>Diseases:</strong>${pet.diseases}</li>
                    <li><strong>Parasites:</strong>${pet.parasites}</li>
                </ul>
            </div>
        </div>
        </div>`)
        modal.open()
    } else if (targetDS.sliderarrowleft || parentTagetDS.sliderarrowleft || targetDS.sliderarrowright || parentTagetDS.sliderarrowright){
    //  event.preventDefault()
     // if (isChanging) return
      const ANIMATION_SPEED = 500
      const petsSliderContainer  = document.querySelector('.pets__content')
      const slide = document.querySelector('.active')

      if(targetDS.sliderarrowleft || parentTagetDS.sliderarrowleft ){
        event.preventDefault()
        if (isChanging) return
        isChanging = true
        const newSlide = document.createElement('div')
        petsSliderContainer.appendChild(newSlide)
        newSlide.classList.add('new-slide', 'pets__content-slide','putRight')
        counter++
        catalog.renderNewSlide(counter) 
        newSlide.classList.add('slideInRight')
        slide.classList.add('slideOutLeft')
        setTimeout(() => {
          slide.remove()
          newSlide.classList.remove('slideInRight', 'new-slide', 'putRight' )
          newSlide.classList.add('active')
          isChanging = false
        }, ANIMATION_SPEED)
      }
      else {
       event.preventDefault()
       if (isChanging) return
       isChanging = true
        const newSlide = document.createElement('div')
        petsSliderContainer.appendChild(newSlide)
        newSlide.classList.add('new-slide', 'pets__content-slide','putLeft')
        counter++
        catalog.renderNewSlide(counter) 
        newSlide.classList.add('slideInLeft')
        slide.classList.add('slideOutRight')
        setTimeout(() => {
          slide.remove()
          newSlide.classList.remove('slideInLeft', 'new-slide', 'putLeft' )
          newSlide.classList.add('active')
          isChanging = false
        }, ANIMATION_SPEED)
    }
    }
})







