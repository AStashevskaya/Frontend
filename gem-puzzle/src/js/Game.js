import create  from './utils/create'
// import cell from './FieldCell'
// import GameField from './GameField'
// import main from './script'
import {part} from './script'
import GameField from './GameField'
// import {images} from './layouts/images'

const main  = create('div', 'game-wrapper')
document.body.prepend(main)

class Game {
    constructor(){
        this.state = 'start'
        this.time = null
        this.sound = 'off'
        this.width = this._getWidth()
        this.container = create('div', 'gameSettings-wrapper')
        this.menuList = create('ul', 'menu__list')
        this.settings = create('div', 'settings-page')
        this.bestScore = create('div', 'best-score')
        this.savedGames = create('div', 'saved-games')
        this.parent = create('div', 'parent')
        this.count = 0
        this.progressIdentifier = null
        console.log(this.width)
        this.init()
    }
    _getWidth(){
        const screenWidth = +document.documentElement.clientWidth
        if(screenWidth > 500){
            return 400
        } else {
            return 300
    }
    }
    init(){
        main.appendChild(this.container)
        this.game  = new GameField(this)
        this.menuRender()
        this.settingsRender()
        this.bestScoreRender()
        this.savedGamesRender()
        this.game.overlay.appendChild(this.parent)
        this.parent.appendChild(this.menuList)
        this.parent.appendChild(this.settings)
        this.parent.appendChild(this.bestScore)
        this.parent.appendChild(this.savedGames)
        this.generateBestScores()
        const childs = this.parent.children
        this.children = Array.from(childs)
        // this.children = [...this.parent.children]
       this.stateButton = create('span', 'state-btn', 'Pause')
       const time = create('div', 'time', `Time: ${this.count}`),
         moves = create('div', 'move', `Moves: ${this.game.moves}`)
        this.container.appendChild(this.stateButton)
              this.container.appendChild(time)
              this.container.appendChild(moves)
              document.addEventListener('click', this.handleEvent.bind(this))         
    }
    handleEvent(e){
        if(this.sound === 'on'){
            this.playSound()
        }
        const target = e.target
        if(target.innerText === 'Resume' || target.innerText === 'Pause'){
            console.log(target)
            if(target.innerText === 'Pause' && this.state === 'start')return
            if(target.innerText === 'Pause' && this.state === 'playing'){
                this.state = 'pause'
                this.menuList.classList.remove('hidden')
                this.game.overlay.classList.remove('hidden')
                clearInterval(this.progressIdentifier)
                target.innerText = 'Resume'
              } else {
                this.state = 'playing'
                this.progressIdentifier = setInterval(this.tick.bind(this), 1000)
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
               this.progressIdentifier = setInterval(this.tick.bind(this), 1000)
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
                this.getGame()
            }else if (target.dataset.link === "saveGame"){
                this.saveGame()
            }
        }   else if (target.dataset.sound === "off" || target.dataset.sound === "on"){
            let soundCheck = document.getElementById('sound')
            if(this.sound === 'off'){
                target.dataset.sound = 'on'
                soundCheck.innerText = 'Sound On'
                this.sound = 'on'
            } else {
                soundCheck.innerText = 'Sound Off'
                this.sound = 'off'
                target.dataset.sound = 'off'
            }
        } else if (target.dataset.close){
            this.game.modal.close()
        } else if (target.dataset.reset){
            this.count = 0
            this.progressIdentifier = setInterval(this.tick.bind(this), 1000)
            this.game.reset()
            this.game.modal.close()
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
       <input type="radio" name="size" id="input" value="5"> 5 X 5
</label>
       <label for="size" class="menu-text_small">
           <input type="radio" name="size" id="input" value="6"> 6 X 6
   </label>
   <label for="size" class="menu-text_small">
   <input type="radio" name="size" id="input" value="7"> 7 X 7
</label>
<label for="size" class="menu-text_small">
<input type="radio" name="size" id="input" value="8"> 8 X 8
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
        this.savedGames.innerHTML = `
        <span class="load_game menu-text_small">You haven't got any saved games yet</span>
        <span class="menu-text_big" id="back" data-link="back" >Go back</span>
        `
    }
    tick(){  
        this.count++
        this.sec = this.count >= 60 ? this.count % 60 : this.count
        this.min = Math.floor(this.count / 60)
        document.querySelector('.time').innerHTML =  `Time: ${this.addZero(this.min)}: ${this.addZero(this.sec)}`
       }
       addZero(n){
        return   n < 10 ? `0${n}` : `${n}`
       }
       saveGame(){
        let session = {}
        session.count = this.count
        session.moves = this.game.moves
        session.template =  this.game.currentTemplate
        session.image = this.game.image
        session.size = this.game.q
        const jsonObj = JSON.stringify(session)
        localStorage.setItem('game', jsonObj)
        const loadedGameText =  document.querySelector('.load_game')
        loadedGameText.innerText = `Your game is saved!`
        this.menuList.classList.add('hidden')
        this.savedGames.classList.remove('hidden')
    }
    getGame(){
        let loadedGame = localStorage.getItem('game')
        if(!loadedGame){
           const loadedGameText =  document.querySelector('.load_game')
           loadedGameText.innerText = `You have no saved games yet`
           this.menuList.classList.add('hidden')
           this.savedGames.classList.remove('hidden')
        }
        loadedGame = JSON.parse(loadedGame)
        this.game.loadGame(loadedGame)
        this.count = loadedGame.count
        this.tick()
        console.log(loadedGame)
    }
       playSound(){
           let audio = create('audio')
           audio.setAttribute('src', './assets/sounds/english.mp3')
           audio.load()
           audio.play()
           audio = undefined
       }
       generateBestScores(){
        let bestScores = localStorage.getItem('bestScores')
        const bestScoresContainer =  document.querySelector('.best-score_list')
        if(!bestScores) return
        bestScores = JSON.parse(bestScores)
        bestScores = bestScores.sort((a, b) =>  a.moves - b.moves)
        console.log(bestScores)
        let html = '<li class="best-score_link menu-text_small"><span>№</span><span>Moves</span><span>Time</span></li>'
        if(bestScores.length > 10){
            bestScores = bestScores.slice(0, 10)
        }
        bestScores.forEach((el, ind) => html += `<li class="best-score_link menu-text_small"><span>${ind+1}.</span><span>${el.moves}</span><span> ${this.addZero(Math.floor(el.count / 60))}: ${this.addZero(el.count % 60)}</span></li>`)   
        bestScoresContainer.innerHTML =  html  
    }
}

// const part = new Game()
export  { main }
export default Game