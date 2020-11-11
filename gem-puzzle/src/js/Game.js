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
        this.state = 'start'
        this.time = null
        this.sound = 'off'
        this.container = create('div', 'gameSettings-wrapper')
        this.menuList = create('ul', 'menu__list')
        this.settings = create('div', 'settings-page')
        this.bestScore = create('div', 'best-score')
        this.savedGames = create('div', 'saved-games')
        this.parent = create('div', 'parent')
        // this.template = this._getTemplate()
        // this.size = this._getSize()
        this.count = 0
        this.progressIdentifier = null
        this.init()
    }
    init(){
        main.appendChild(this.container)
        this.game  = new GameField()
        this.menuRender()
        this.settingsRender()
        this.bestScoreRender()
        this.savedGamesRender()
        this.game.overlay.appendChild(this.parent)
        this.parent.appendChild(this.menuList)
        this.parent.appendChild(this.settings)
        this.parent.appendChild(this.bestScore)
        this.parent.appendChild(this.savedGames)
        this.children = [...this.parent.children]
       this.stateButton = create('span', 'state-btn', 'Pause')
    const time = create('div', 'time', `Time: ${this.count}`),
         moves = create('div', 'move', `Moves: ${this.game.moves}`)
        this.container.appendChild(this.stateButton)
              this.container.appendChild(time)
              this.container.appendChild(moves)
              document.addEventListener('click', this.handleEvent)
    }
    handleEvent = (e) => {
        const target = e.target
        if(target.innerText === 'Resume' || target.innerText === 'Pause'){
            console.log(target)
            if(target.innerText === 'Pause' && this.state === 'start')return
            if(target.innerText === 'Pause' && this.state === 'playing'){
                this.state = 'pause'
                this.menuList.classList.remove('hidden')
                this.game.overlay.classList.remove('hidden')
                // this.progressIdentifier = setInterval(this.tick, 1000)
                clearInterval(this.progressIdentifier)
                target.innerText = 'Resume'
              } else {
                this.state = 'playing'
                this.progressIdentifier = setInterval(this.tick, 1000)
                this.children.forEach(el => {
                    if(el.classList.length < 2){
                        el.classList.add('hidden')
                    }
                })
                // this.menuList.classList.add('hidden')
                this.game.overlay.classList.add('hidden')
                target.innerText = 'Pause'
              }
        }
        if(target.dataset.link){
            if(target.dataset.link === "newGame"){
               this.state = 'playing'
              if (this.stateButton.innerText === 'Resume'){
                this.stateButton.innerText = 'Pause'  
               }
               this.menuList.classList.add('hidden')
               this.game.overlay.classList.add('hidden')
               this.progressIdentifier = setInterval(this.tick, 1000)
               this.game.reset()
            } else if (target.dataset.link === "settings"){
                this.menuList.classList.add('hidden')
                this.settings.classList.remove('hidden')
            } else if (target.dataset.link === "bestScores"){
                this.menuList.classList.add('hidden')
                this.bestScore.classList.remove('hidden')
            } else if (target.dataset.link === "back"){
                this.children.forEach(el =>{
                    if(el.classList.length < 2){
                        el.classList.add('hidden')
                    }
                })
                this.menuList.classList.remove('hidden')
            }else if (target.dataset.link === "loadGame"){
                return
            }else if (target.dataset.link === "saveGame"){
                return
            }
        }
    }
    menuRender(){
        this.menuList.innerHTML = `
<span class="menu__link" data-link="newGame">New Game</span>
 <span class="menu__link" data-link="saveGame">Save Game</span>
 <span class="menu__link" data-link="loadGame">Load Game</span>
 <span class="menu__link" data-link="bestScores">Best Scores</span>
 <span class="menu__link" data-link="settings">Settings</span>
`
    }
    settingsRender(){
        // this.formRender()
        this.settings.classList.add('hidden')
        this.settings.innerHTML = `<span class="menu-header">Settings</span>
        <span class="menu-text_big">Field Size</span>
        <form class='form'>
    <label for="size" class="menu-text_small">
           <input type="radio" name="size" id="input" value="3"> 3 X 3
       </label>
       <label for="size" class="menu-text_small">
           <input type="radio" name="size" id="input" value="4" checked> 4 X 4
       </label>
       <label for="size" class="menu-text_small">
           <input type="radio" name="size" id="input" value="6"> 6 X 6
   </label>
    </form>
    <span id="sound" data-sound="off" class="menu-text_big sound">Sound Off</span>
    <span class="menu-text_big" id="back" data-link="back" >Go back</span>
    `
    }
    bestScoreRender(){
        this.bestScore.classList.add('hidden')
        this.bestScore.innerHTML = `<span class="menu-header">Best Score</span>
        <ul class="best-score_list">
        <li class="best-score_link menu-text_small"><span>Moves</span><span>Time</span></li>
        </ul>

        <span class="menu-text_big" id="back" data-link="back" >Go back</span>
        `
    }
    savedGamesRender(){
        this.savedGames.classList.add('hidden')
        this.savedGames.innerHTML = `<span class="menu-header">Load Game</span>
        <ul class="saved-games_list">
        <li class="saved-games_link menu-text_small"><span>Date</span><span>Moves</span><span>Time</span></li>
        </ul>
        <span class="menu-text_big" id="back" data-link="back" >Go back</span>
        `
    }
    tick =() => {  
        this.count++
        let sec = this.count >= 60 ? this.count % 60 : this.count
        let min = Math.floor(this.count / 60)
        document.querySelector('.time').innerHTML =  `Time: ${this.addZero(min)}: ${this.addZero(sec)}`
       }
    addZero(n){
     return   n < 10 ? `0${n}` : `${n}`
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