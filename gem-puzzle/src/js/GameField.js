import create from './utils/create'
import FieldCell from './FieldCell'
import EmptyCell from './EmptyCell'
// import {emptyCell} from './utils/emptyCells'
import {part} from './script'
import {main} from './Game'
import {images} from './layouts/images'
// main = require('./Game')

export default class GameField{
    constructor(){
        this.buttons = []
        this.image = this._getImage(images)
        this.correctTemplate = []
        this.container = create('div', 'gamefield')
        this.count = 0
        this.moves = 0
        this.q = 4
        this.init()
    }
 
    init(){
        main.appendChild(this.container)
        for(let i = 0; i < 15; i++){
            const left = i % 4
            const top = (i - left)/ 4
            const ind = i+1 
            const image = this.image
            this.correctTemplate.push(new FieldCell({left, top, ind, image}))
        }
        console.log(this.correctTemplate)
        // this.correctTemplate.push(new EmptyCell(this.q, this.image))
        // const left = i % 4
        // const top = (i - left)/ 4
        // const ind = i+1 
        // const image = this.image
        this.correctTemplate.push(new EmptyCell({left: this.q-1 , top: this.q - 1, ind: '', image: this.image}))
        this.correctTemplate.forEach(el => el.getPos())
        console.log(this.correctTemplate)
        this.shuffle()
    }
    render(){
        this.buttons.forEach(obj => {
        const el = obj.render()
        el.addEventListener('click' , this.moveButton)
        this.container.appendChild(el)
        }) 
    }
    shuffle(){
        let arr = [...this.correctTemplate]
        let empty =  arr.pop()
        this.buttons = []
        const numbers = [...Array(15).keys()]
        .sort(() => Math.random() - 0.5)
        .map(el => el + 1)
        for(let i = 0; i < 15; i++){
            const left = i % 4
            const top = (i - left)/ 4
            const ind = numbers[i]
            const image = this.image
            const correctBtn = this.correctTemplate.find(el => el.ind === ind)
            const field = new FieldCell({left, top, ind, image})
            const obj = Object.create(field)
            obj.bgPosX = correctBtn.bgPosX
            obj.bgPosY = correctBtn.bgPosY
            this.buttons.push(obj)
        }
        this.buttons.push(empty)
        console.log(this.buttons)
        this.render()
    }
    _getImage(arr){
        const ind = Math.floor(Math.random()*arr.length)
        // this.image = arr[ind]
        return arr[ind]
      }
      reset(){
          this.image = this._getImage(images)
          const children = [...this.container.children]
          children.forEach(el => {
              el.addEventListener('click' , this.moveButton)
              this.container.removeChild(el)})
          setTimeout(() => {
            this.shuffle()
          }, 0)
          this.moves = 0  
          document.querySelector('.move').innerHTML = `Moves: ${this.moves}`
          part.count = 0
      }
    moveButton = (e) => {
       if(part.state === 'pause') return
        this.moves++
        document.querySelector('.move').innerHTML = `Moves: ${this.moves}`
        const number = e.target.innerHTML
        const obj = this.buttons.find(el => el.ind == number)
        const emptyObj = this.buttons.find(el => el.ind === '')
        if(!obj || !emptyObj) return
        let {left, top} = obj
        const emptyLeft = emptyObj.left
        const emptyTop = emptyObj.top
        let sum = Math.abs(left - emptyLeft) + Math.abs(top - emptyTop)
        if(sum !== 1) return
        Object.assign(emptyObj, {left, top})
        obj.left = emptyLeft
        obj.top = emptyTop
        obj.container.style.top = `${obj.top*obj.size}px`
        obj.container.style.left = `${obj.left*obj.size}px`
        emptyObj.container.style.top = `${emptyObj.top*emptyObj.size}px`    
        emptyObj.container.style.left = `${emptyObj.left*emptyObj.size}px`  
        this.checkTemplate()  
    }
    checkTemplate(){
        for(let i = 0; i < this.buttons.length - 1; i++){
            const ind = i+1
            const correctObj = this.correctTemplate.find(el => el.ind === ind)
            const currentObj = this.buttons.find(el => el.ind === ind)
            console.log(correctObj, currentObj )
            if(correctObj.left !== currentObj.left) return
            if(correctObj.top !== currentObj.top) return
        }   
        this.ifWin() 
    }
    ifWin(){
        const emptyObj = this.buttons.find(el => el.ind === '')
        emptyObj.container.style.opacity = '1'
        alert('вы победили')
    }  
}
