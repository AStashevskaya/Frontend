
class Catalog {
    constructor(){
        this.pets = []
        this.container = '.pets__content'
        // this.petsContainer = '.pets__content'
        this.init()
    }
    init(){
      if(this.pets.length === 0){
        petsList.forEach(el => {
            this.pets.push(new Pet (el))
        })
      }
        this.shuffle()
        this.render()
    }
    render(){
        let html = ''
        this.pets.forEach(el => 
            html += el.render()
            )
        document.querySelector(this.container).innerHTML = html    
    }
    shuffle(){
      this.pets.sort(() => Math.random() - 0.5);
    }
}

//  async function getJson(url){
//     const response = await fetch(url)
//     const data =  await response.json()
//     return data
//     // .then(data =>{
//     //  let arr = data.json() 
//     //  return arr
//     // } )
//     // .then(console.log(dt))
//     // .catch(console.log('error'))
// }
// const catalog = new Catalog
// getJson(URL)
const catalog = new Catalog 

document.addEventListener('click', (event) => {
  // let isChanging  = true
const targetDS = event.target.dataset
const parentTagetDS = event.target.parentNode.dataset
        if(parentTagetDS.info || targetDS.info){
          // console.log(event.target.dataset, event.target.parentNode.dataset)
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
    } else if (targetDS.sliderarrow || parentTagetDS.sliderarrow ){
      // if (isChanging) return
      event.preventDefault()
      // const pets = document.querySelectorAll('.pet-card')
      // const FADE_ANIMATION_SPEED = 7000
        catalog.init()
      // pets.forEach(el => el.classList.add('fadeOut'))
      // setTimeout(()=>{
      // }, FADE_ANIMATION_SPEED)
    }
})

////////////////////// Burger menu ///////////////

  






