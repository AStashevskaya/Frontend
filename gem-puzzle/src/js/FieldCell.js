import Game from './Game'
import create from './utils/create'
// import emptyCell from './utils/emptyCells'

 export default class FieldCell{
    constructor({left, top, ind, image, q}){
        this.left = left
        this.top = top
        this.ind = typeof(ind) === 'number' ? ind : ''
        this.image = image
        this.q = q
    }
    getPos (){
        let WIDTH = 400
        this.size = WIDTH / this.q
        this.bgPosX = `${-this.left*this.size}px`
        this.bgPosY = `${-this.top*this.size}px`
        // this.bgPosX = `${WIDTH  - this.left*this.size}px`
        // this.bgPosY = `${WIDTH  - this.top*this.size}px`
        // return { bgPosX , bgPosY}
    }
    render(){ 
        const WIDTH = 400
        this.size = WIDTH / this.q
        this.container = create('div', 'fieldcell', `${this.ind}`)
        this.container.style.backgroundImage = `url(assets/images/${this.image})`
        this.container.style.backgroundSize = `${WIDTH}px`
        // this.container.style.backgroundSize = `${WIDTH}px ${WIDTH}px`
        this.container.style.width = `${100 /this.q}%`
        this.container.style.height = `${100 /this.q}%`
        this.container.style.top = `${this.top*this.size}px`
        this.container.style.left = `${this.left*this.size}px`
        // this.container.style.backgroundPositionX = `${WIDTH  - this.left*this.size}px`
        // this.container.style.backgroundPositionY = `${WIDTH  - this.top*this.size}px`
        this.container.style.backgroundPositionX =    this.bgPosX
        this.container.style.backgroundPositionY = this.bgPosY
    if(this.ind === ''){
        this.container.style.opacity = '0'
    }
        return this.container
    }
}
