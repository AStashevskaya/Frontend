import create  from './utils/create'
// import cell from './FieldCell'
// import GameField from './GameField'
// import main from './script'
import GameField from './GameField'
// import {images} from './layouts/images'

const main  = create('div', 'game-wrapper')
document.body.prepend(main)

class Game {
    constructor(){
        this.state = 'pause'
        this.time = null
        // this.image = this._getImage(images)
        // this.container = create('div', 'gameSettings-wrapper', null, main)
        this.container = create('div', 'gameSettings-wrapper')
        main.appendChild(this.container)
        // this.template = this._getTemplate()
        // this.size = this._getSize()
        this.count = 0
        this.progressIdentifier = null
        this.init()
    }
    init(){
        let game  = new GameField()
            // const stateButton = create('button', 'state-btn', 'play', this.container),
            //   settings = create('a', 'settings-btn', 'settings', this.container),
            //   time = create('div', 'time', `Time: ${this.count}`, this.container),
            //   moves = create('div', 'move', `Moves: ${game.moves}`, this.container)
              const stateButton = create('button', 'state-btn', 'play'),
              resetButton = create('button', 'reset-btn', 'reset'),
              settings = create('a', 'settings-btn', 'settings'),
              time = create('div', 'time', `Time: ${this.count}`),
              moves = create('div', 'move', `Moves: ${game.moves}`)
         
              this.container.appendChild(stateButton)
              this.container.appendChild(resetButton)
              this.container.appendChild(settings)
              this.formRender()
              this.container.appendChild(time)
              this.container.appendChild(moves)

              stateButton.addEventListener('click', (e) => {
                  if(e.target.innerText === 'play'){
                    this.state = 'play'
                    this.progressIdentifier = setInterval(this.tick, 1000)
                      e.target.innerText = 'pause'
                  } else {
                    this.state = 'pause'
                    clearInterval(this.progressIdentifier)
                    e.target.innerText = 'play'
                  }

              })    
              resetButton.addEventListener('click', () => {
              game.reset()
              })  
    }
    formRender(){
      const form = create('form', 'form')
      form.innerHTML = `
      <label for="size">
          <input type="radio" name="size" id="input" value="3"> 3 X 3
      </label>
      <label for="size">
          <input type="radio" name="size" id="input" value="4" checked> 4 X 4
      </label>
      <label for="size">
          <input type="radio" name="size" id="input" value="6"> 6 X 6
      </label>`
      this.container.appendChild(form)
    }
    tick =() => {  
        this.count++
        document.querySelector('.time').innerHTML = `Time: ${this.count}`
       }
    // _getImage(arr){
    //   const ind = Math.floor(Math.random()*arr.length)
    //   // this.image = arr[ind]
    //   return arr[ind]
    // }

}
// const part = new Game()
export  { main }
export default Game