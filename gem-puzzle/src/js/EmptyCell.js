import FieldCell from './FieldCell'
import create from './utils/create'
// import GameField from './GameField'
export default class EmptyCell extends FieldCell{
    constructor({left, top, ind, image}){
        super ({left, top, ind, image})
        // super(size, image)
        // this.q = q
        // this.top = this.q -1
        // this.left = this.q -1
        // this.ind = ''
        // this.image = image
    }  
}