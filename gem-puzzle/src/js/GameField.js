import create from './utils/create'
import FieldCell from './FieldCell'
import Modal from './Popup'
import {main} from './Game'
import {images} from './layouts/images'
// main = require('./Game')

export default class GameField{
    constructor(settings){
        this.settings = settings
        this.image =  this._getImage(images)
        this.moves =  0
        this.q = 4
        this.buttons = []
        this.correctTemplate = []
        this.bestScores = this._generateBestScoreArr()
        this.container = create('div', 'gamefield')
        this.overlay = create('span', 'overlay')
        this.width = this.settings.width
        this.count = 0
        this.currentTemplate = []
        this.prevQ = null
     
        this.init()
    }
 
    init(){
        // main = document.querySelector('.game-wrapper')
        this.container.style.width = `${this.width}px`
        this.container.style.height = `${this.width}px`
        main.appendChild(this.container)
        this.container.appendChild(this.overlay)
        this.modal = new Modal(this)
        this.makeCorrectTemplate()
        this.render(this.correctTemplate)
    }
    makeCorrectTemplate(){
        this.correctTemplate = []
        // this.container.style.backgroundImage = `url(assets/images/${this.image})`
        for(let i = 0; i < Math.pow(this.q, 2) - 1; i++){
            const left = i % this.q
            const top = (i - left)/ this.q
            const ind = i+1 
            this.correctTemplate.push(new FieldCell(this, Object.assign( {}, {left, top, ind})))
        }
        this.correctTemplate.push(new FieldCell(this, Object.assign( {}, {left: this.q-1 , top: this.q - 1, ind: ''})))
        this.correctTemplate.forEach(el => el.getPos())
    }
    loadGame(options){
        const {size, image, moves, template} = options
        this.q = size 
        this.image = image
        this.moves = moves
        this.currentTemplate = template
        this.makeCorrectTemplate()
        this.buttons = []
        this.currentTemplate.forEach(el => this.buttons.push(new FieldCell(this, el)))
        document.querySelector('.move').innerHTML = `Moves: ${this.moves}`
        this.deleteCells()
        this.render(this.buttons)
    }
    render(arr){
        arr.forEach(obj => {
        const el = obj.render()
        el.addEventListener('click' , this.moveButton.bind(this))
        this.container.appendChild(el)
        }) 
    }
    shuffle(){
        let arr = [...this.correctTemplate]
        let empty =  arr.pop()
        this.buttons = []
        let numbers = this.sortArray()
        // const numbers = [...Array(Math.pow(this.q, 2) - 1).keys()]
        // .sort(() => Math.random() - 0.5)
        // .map(el => el + 1)
        for(let i = 0; i < Math.pow(this.q, 2) - 1; i++){
            const left = i % this.q
            const top = (i - left)/ this.q
            const ind = numbers[i]
            const correctBtn = this.correctTemplate.find(el => el.ind === ind)
            const field = new FieldCell(this,Object.assign({},{left, top, ind}))
            const obj = Object.create(field)
            obj.bgPosX = correctBtn.bgPosX
            obj.bgPosY = correctBtn.bgPosY
            this.buttons.push(obj)
        }
        empty = new FieldCell(this, Object.assign({},{left: this.q-1 , top: this.q - 1, ind: ''}))
        empty.getPos()
        this.buttons.push(empty)
        console.log(this.buttons)
        this.render(this.buttons)
    }
    checkSolving(arr){
        let count = this.q
        // if (this.q % 2 === 0){
        //     count = this.q
        // } else {
        //     count = 0 
        // }
        for(let i = 0; i< arr.length; i++){
            for (let j = i+1; j< arr.length; j++){
                if( arr[i] >  arr[j]){
                    count ++
                }     
            }
        }  
        console.log(count)
        if(count % 2 === 0) return true
        return false
    }
    sortArray(){
        let numbers = []
        numbers = [...Array(Math.pow(this.q, 2) - 1).keys()]
        .sort(() => Math.random() - 0.5)
        .map(el => el + 1)
       if(!this.checkSolving(numbers)){
        this.sortArray()
       } 
       return numbers
    }
    _getImage(arr){
        const ind = Math.floor(Math.random()*arr.length)
        // this.image = arr[ind]
        return arr[ind]
      }
      reset(){
          this.image = this._getImage(images)
          this.prevQ = this.q
          this.q = this._checkSize()
          if(this.q !== this.prevQ)  this.makeCorrectTemplate()
          this.deleteCells()
        //   const children = [...this.container.children]
        //   children.forEach(el => {
        //       if(el.classList.length < 2){
        //       el.removeEventListener('click' , this.moveButton.bind(this))
        //       this.container.removeChild(el)
        //       }
        //      })
          setTimeout(() => {
            this.shuffle()
          }, 0)
          this.moves = 0  
          document.querySelector('.move').innerHTML = `Moves: ${this.moves}`
          this.settings.count = 0
      }
    moveButton(e){
       if(this.settings.state === 'pause') return
       this.currentTemplate = []
        const number = e.target.innerHTML
        const clickedObj = this.buttons.find(el => el.ind == number)
        const emptyObj = this.buttons.find(el => el.ind === '')
        if(!clickedObj || !emptyObj) return
        let {left, top} = clickedObj
        const emptyLeft = emptyObj.left
        const emptyTop = emptyObj.top
        let sum = Math.abs(left - emptyLeft) + Math.abs(top - emptyTop)
        if(sum !== 1) return
        this.moves++
        document.querySelector('.move').innerHTML = `Moves: ${this.moves}`
        Object.assign(emptyObj, {left, top})
        if(left !== emptyLeft){
            this.animate('left', clickedObj, left, emptyLeft)
            clickedObj.container.style.top = `${clickedObj.top*clickedObj.size}px`
        } else {
            this.animate('top', clickedObj, top, emptyTop)
            clickedObj.container.style.left = `${clickedObj.left*clickedObj.size}px`
        }
        clickedObj.left = emptyLeft
        clickedObj.top = emptyTop
        emptyObj.container.style.top = `${emptyObj.top*emptyObj.size}px`    
        emptyObj.container.style.left = `${emptyObj.left*emptyObj.size}px`  
        this.buttons.forEach(el => {
           let {left, top, ind, bgPosY, bgPosX} = el
           this.currentTemplate.push({left, top, ind, bgPosY, bgPosX})
        })
        this.checkTemplate()  
    }
    animate(position, obj, currPos, destination){
        const animationDuration = 300
        const frameRate = 10
        let step = frameRate * Math.abs((destination - currPos)) / animationDuration
        let id = setInterval(() => {
            if(currPos < destination){
                currPos = Math.min(destination, currPos + step)
                if( currPos >= destination ){
                    clearInterval(id)
                }
            } else if (currPos > destination){
                currPos = Math.max(destination, currPos - step)
                if( currPos <= destination ){
                    clearInterval(id)
                }
            }
            obj.container.style[position] = `${currPos*obj.size}px`
        }, frameRate);

    }
    checkTemplate(){
        for(let i = 0; i < this.buttons.length - 1; i++){
            const ind = i+1
            const correctObj = this.correctTemplate.find(el => el.ind === ind)
            const currentObj = this.buttons.find(el => el.ind === ind)
            if(correctObj.left !== currentObj.left) return
            if(correctObj.top !== currentObj.top) return
        }   
        this.ifWin() 
    }
    ifWin(){
        const emptyObj = this.buttons.find(el => el.ind === '')
        emptyObj.container.style.opacity = '1'
        document.querySelectorAll('.fieldcell').forEach(el => el.innerText = '')
        const game = {}
        game.moves = this.moves
        game.size = this.q
        game.count = this.settings.count
        this.bestScores.push(game)
        const bestJson = JSON.stringify(this.bestScores)
        localStorage.setItem('bestScores', bestJson)
        this.settings.generateBestScores()
        this.modal.open()
    }  
    _generateBestScoreArr(){
        let bestScores = localStorage.getItem('bestScores')
        if(!bestScores) return []
        bestScores = JSON.parse(bestScores)
        return bestScores
    }
    
    _checkSize(){
      return +document.querySelector('input[name=size]:checked').value
    }
    deleteCells(){
        const children = [...this.container.children]
        children.forEach(el => {
            if(el !== this.overlay){
                el.removeEventListener('click' , this.moveButton.bind(this))
                this.container.removeChild(el)
                }
           })
    }
  
}
