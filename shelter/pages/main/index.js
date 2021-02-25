const modal = $.modal()

let pets = [ {
  "name": "Jennifer",
  "img": "../../assets/images/jennifer.png",
  "type": "Dog",
  "breed": "Labrador",
  "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
  "age": "2 months",
  "inoculations": ["none"],
  "diseases": ["none"],
  "parasites": ["none"]
},
{
  "name": "Sophia",
  "img": "../../assets/images/sophia.png",
  "type": "Dog",
  "breed": "Shih tzu",
  "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
  "age": "1 month",
  "inoculations": ["parvovirus"],
  "diseases": ["none"],
  "parasites": ["none"]
},
{
  "name": "Woody",
  "img": "../../assets/images/woody.png",
  "type": "Dog",
  "breed": "Golden Retriever",
  "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
  "age": "3 years 6 months",
  "inoculations": ["adenovirus", "distemper"],
  "diseases": ["right back leg mobility reduced"],
  "parasites": ["none"]
},
{
  "name": "Scarlett",
  "img": "../../assets/images/scarlett.png",
  "type": "Dog",
  "breed": "Jack Russell Terrier",
  "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
  "age": "3 months",
  "inoculations": ["parainfluenza"],
  "diseases": ["none"],
  "parasites": ["none"]
},
{
  "name": "Katrine",
  "img": "../../assets/images/katrine.png",
  "type": "Cat",
  "breed": "British Shorthair",
  "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
  "age": "6 months",
  "inoculations": ["panleukopenia"],
  "diseases": ["none"],
  "parasites": ["none"]
},
{
  "name": "Timmy",
  "img": "../../assets/images/timmy.png",
  "type": "Cat",
  "breed": "British Shorthair",
  "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
  "age": "2 years 3 months",
  "inoculations": ["calicivirus", "viral rhinotracheitis"],
  "diseases": ["kidney stones"],
  "parasites": ["none"]
},
{
  "name": "Freddie",
  "img": "../../assets/images/freddie.png",
  "type": "Cat",
  "breed": "British Shorthair",
  "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
  "age": "2 months",
  "inoculations": ["rabies"],
  "diseases": ["none"],
  "parasites": ["none"]
},
{
  "name": "Charly",
  "img": "../../assets/images/charly.png",
  "type": "Dog",
  "breed": "Jack Russell Terrier",
  "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
  "age": "8 years",
  "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
  "diseases": ["deafness", "blindness"],
  "parasites": ["lice", "fleas"]
}]
let fullpetsList = []
fullpetsList = (() => {
  let tempArr = []
 for (let i = 0; i < 6; i++){
 let newPets = pets
 for (let j = pets.length; j > 0; j--){
   let randomInd = Math.floor(Math.random()*j)
   const randomEl = newPets.splice(randomInd, 1)[0]
   newPets.push(randomEl)
 }
 tempArr = [...tempArr, ...newPets]
 }
 return tempArr
})()

function sort6(list){
  const length = list.length
  for (let i = 0; i < length / 6; i++){
    const steplist = list.slice(i*6, (i * 6) + 6)
    for (let j = 0; j < 6; j++){
      const duplicateItem = steplist.find((item, ind) => {
        return item.name === steplist[j].name && (ind !==j)
      })
      if(duplicateItem !== undefined){
        const ind = (i*6) + j
        const whichOf8 = Math.trunc(ind/8)
        list.splice(whichOf8 * 8, 0, list.splice(ind, 1)[0])
        sort6(list)
      }
    }
  }
  return list
}
fullpetsList = sort6(fullpetsList)

  class Pet {
    constructor(pet){
        this.name = pet.name
        this.img = pet.img
        this.type = pet.type
        this.breed = pet.breed
        this.description = pet.description
        this.age = pet.age
        this.inoculations= pet.inoculations
        this.diseases = pet.diseases
        this.parasites = pet.parasites
    }
    render(){
        return `<div class="pet-card" data-name="${this.name}" >  
        <div class="pet-card__img" data-info="true"  data-name="${this.name}">
            <img src="${this.img}" alt="cat ${this.name}">
       </div>
       <div class="pet-card__text"  data-name="${this.name}" data-info="true">
           <span>${this.name}</span>
           <a href="#"  data-name="${this.name}">Learn more</a>
       </div>
       </div>`
    }
}

const burgerMenu = document.querySelector('.hamburger')
document.addEventListener('click', (event) => {
    let closing = false
    if(event.target.dataset.burgeropen || event.target.parentNode.dataset.burgeropen){
         !closing && burgerMenu.classList.add('open')
        //  document.body.classList.add('antiscroll')
         document.body.style.height = '100vh'
         document.body.style.overflow = 'hidden'
         document.querySelector('.burger-btn').style.transform = 'rotate(90deg)'

    } else if(event.target.dataset.burgerclose || event.target.parentNode.dataset.burgerclose){
        const ANIMATION_SPEED = 300
        closing = true
        burgerMenu.classList.remove('open')
        burgerMenu.classList.add('hide')
        document.querySelector('.burger-btn').style.transform = 'rotate(0deg)'
        setTimeout(()=> {
            burgerMenu.classList.remove('hide')
            closing = false
            // document.body.classList.remove('antiscroll')
            document.body.style.height = '100%'
            document.body.style.overflow = 'scroll'
        }, ANIMATION_SPEED)
    } else if (event.target.dataset.disabled){
      event.preventDefault()
    }
})








































  