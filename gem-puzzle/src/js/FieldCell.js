import create from './utils/create'
// import emptyCell from './utils/emptyCells'

 export default class FieldCell{
    constructor({left, top, ind, image}){
        this.left = left
        this.top = top
        this.ind = typeof(ind) === 'number' ? ind : ''
        this.size = 100
        this.image = image
    }
    getPos (){
        const WIDTH = 400
        this.bgPosX = `${WIDTH  - this.left*this.size}px`
        this.bgPosY = `${WIDTH  - this.top*this.size}px`
        // return { bgPosX , bgPosY}
    }
    render(){ 
        const WIDTH = 400
        this.container = create('div', 'fieldcell', `${this.ind}`)
        this.container.style.backgroundImage = `url(assets/images/${this.image})`
        this.container.style.backgroundSize = `${WIDTH}px ${WIDTH}px`
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
