
let width = document.documentElement.clientWidth
console.log(fullpetsList)
class PetsCatalog {
    constructor(width){
        this.pets = []
        this.container = '.pets-container__content'
        this.pageWidth = this._getPageWidth()
        this.content = []
        this._getPets()
        //this.init()
    }
    _getPets(){
        fullpetsList.forEach(el => {
            this.pets.push(new Pet (el))
        }) 
        this.init()  
    }
    _getPageWidth(){
        return document.documentElement.clientWidth
    }

    init(){
        this._getPageWidth()
        let n = this.getPetsCardsNumber()
        let k = +document.querySelector('.pagination__link_state').innerText
        this.content = this.pets.slice((k - 1)*n, k*n)
        this.render()
    }
    getPetsCardsNumber(){
        this.pageWidth = this._getPageWidth()
        let n
    if(  this.pageWidth >= 1280){
        n = 8
     } else if ( this.pageWidth >= 768 &&  this.pageWidth < 1280){
        n = 6
     } else {
        n = 3
     }
     return n
    }

    render(){
        let html = ''
        this.content.forEach(el => 
            html += el.render()
            )
        document.querySelector(this.container).innerHTML = html   
    }
    shuffle(){
        this.content.sort(() => Math.random() - 0.5);
      }
}

const petsCatalog = new PetsCatalog (width)

function removeActive(first, sec){
    first.classList.remove('pagination__link_active')
    sec.classList.remove('pagination__link_active')
    first.classList.add('pagination__link_disabled')
    sec.classList.add('pagination__link_disabled')
}
function removeDisabled(first, sec){
    first.classList.remove('pagination__link_disabled')
    sec.classList.remove('pagination__link_disabled')
    first.classList.add('pagination__link_active')
    sec.classList.add('pagination__link_active')
}

const nextLink = document.querySelector('[data-next]'),
        lastLink = document.querySelector("[data-last]"),
        prevLink = document.querySelector('[data-prev]'),
        firstLink = document.querySelector('[data-first]'),
        stateLink = document.querySelector('.pagination__link_state')
document.addEventListener('click', (event) => {
    const targetDS = event.target.dataset
    const parentTagetDS = event.target.parentNode.dataset    
    if(targetDS.next || targetDS.last || targetDS.prev || targetDS.first){
        event.preventDefault()
        function makeTemplate(n){
            let k = +stateLink.innerText
                    if(targetDS.next){
                        if(k === n) return
                        k++
                        if(k > 1 && prevLink.classList.contains('pagination__link_disabled')){
                       removeDisabled(prevLink, firstLink)
                      }   
                        stateLink.innerText = k 
                        if(k === n){
                           removeActive(nextLink, lastLink)   
                        }
                        petsCatalog.init()
                    }else if (targetDS.last){
                        if(k === n) return
                        stateLink.innerText = n  
                        if(prevLink.classList.contains('pagination__link_disabled')){
                            removeDisabled(prevLink, firstLink)
                           }
                        removeActive(nextLink, lastLink)  
                        petsCatalog.init()
                    } else if(targetDS.prev){
                        if(k === 1) return
                        k--
                        stateLink.innerText = k 
                        if(k < n && nextLink.classList.contains('pagination__link_disabled')){
                            removeDisabled(nextLink, lastLink)
                        } 
                        if(k === 1){
                            removeActive(prevLink, firstLink)   
                         } 
                        petsCatalog.init()   
                    } else if(targetDS.first){
                        if(k === 1) return
                        stateLink.innerText = 1  
                        if(nextLink.classList.contains('pagination__link_disabled')){
                            removeDisabled(nextLink, lastLink)
                           }
                        removeActive(prevLink, firstLink)  
                        petsCatalog.init()
                    }   
        }
        let currentWidth = document.documentElement.clientWidth
        if(currentWidth >= 1280){
            // petsCatalog.init()
            makeTemplate(6)
        } else if ( currentWidth >= 768 && currentWidth < 1280){
            // petsCatalog.init()
            makeTemplate(8)
        } else if (currentWidth < 768){
            // petsCatalog.init()
            makeTemplate(16)
        }
    } else if (parentTagetDS.info || targetDS.info){
        // console.log(event.target.dataset, event.target.parentNode.dataset)
      event.preventDefault()
      let name = targetDS.name || parentTagetDS.name 
      const pet = petsCatalog.pets.find( el => el.name === name)
      modal.setContent(`<div class="modal__content">
      <div class="modal__img"><img src="${pet.img}" alt="pet ${pet.name}"></div>
      <div class="modal__text-content">
          <div class="text-content">
              <h2 class="text-content__title">${pet.name}</h2>
              <h3 class="text-content__subtitle">${pet.type} - ${pet.breed}</h3>
              <p class="text-content__paragraph">${pet.description}</p>
              <ul class="text-content__list">
                  <li><strong>Age: </strong>${pet.age}</li>
                  <li><strong>Inoculations: </strong>${pet.age}</li>
                  <li><strong>Diseases: </strong>${pet.diseases}</li>
                  <li><strong>Parasites: </strong>${pet.parasites}</li>
              </ul>
          </div>
      </div>
      </div>`)
      modal.open()
  }
})
function changeSize(){
    width = document.documentElement.clientWidth
    petsCatalog.pageWidth = width
    petsCatalog.init()
}
addEventListener('resize', changeSize())