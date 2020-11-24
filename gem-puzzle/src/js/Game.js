/* eslint-disable class-methods-use-this */
import create from './utils/create';
import addZero from './utils/addZero';
// eslint-disable-next-line import/no-cycle
import GameField from './GameField';
import * as constants from './utils/constants';

// const main = create('div', 'game-wrapper');
// const STATE_PLAYING = 'playing';
// const STATE_PAUSE = 'pause';
// const STATE_START = 'start';
// const MIN_BOARD_SIZE = 300;
// const MAX_BOARD_SIZE = 400;
// const CHANGING_SCREEN_WIDTH = 500;
// const SOUND_ON = 'on';
// const SOUND_OFF = 'off';

class Game {
  constructor() {
    this.state = constants.STATE_START;
    this.time = null;
    this.sound = constants.SOUND_OFF;
    this.width = this.getWidth();
    this.count = 0;
    this.progressIdentifier = null;
    this.init();
  }

  getWidth() {
    const screenWidth = Number(document.documentElement.clientWidth);
    if (screenWidth > constants.CHANGING_SCREEN_WIDTH) {
      return constants.MAX_BOARD_SIZE;
    }
    return constants.MIN_BOARD_SIZE;
  }

  renderInitialboard() {
    this.main = create('div', 'game-wrapper');
    this.container = create('div', 'gameSettings-wrapper');
    this.menuList = create('ul', 'menu__list');
    this.settings = create('div', 'settings-page');
    this.bestScore = create('div', 'best-score');
    this.savedGames = create('div', 'saved-games');
    this.parent = create('div', 'parent');
    document.body.prepend(this.main);
    this.main.appendChild(this.container);
    this.game = new GameField(this);
    this.menuRender();
    this.settingsRender();
    this.bestScoreRender();
    this.savedGamesRender();
    this.game.overlay.appendChild(this.parent);
    this.parent.appendChild(this.menuList);
    this.parent.appendChild(this.settings);
    this.parent.appendChild(this.bestScore);
    this.parent.appendChild(this.savedGames);
    this.generateBestScores();
    // this.children = Array.from(this.parent.children);
    this.children = [...this.parent.children];
    this.stateButton = create('span', 'state-btn', 'Pause');
    const time = create('div', 'time', `Time: ${this.count}`);
    const moves = create('div', 'move', `Moves: ${this.game.moves}`);
    this.container.appendChild(this.stateButton);
    this.container.appendChild(time);
    this.container.appendChild(moves);
  }

  init() {
    this.renderInitialboard();
    this.addSound();
    this.addClicks();
  }

  addClicks() {
    document.getElementById('sound').addEventListener('click', this.soundClick.bind(this));
    this.stateButton.addEventListener('click', this.changeStateClick.bind(this));
    const menuLinks = [...document.querySelectorAll('.menu__link')];
    menuLinks.forEach((el) => el.addEventListener('click', this.menuLinkClick.bind(this)));
    document.getElementById('back').addEventListener('click', this.menuLinkClick.bind(this));
    const modalNewGame = document.querySelector('a[data-reset = true]');
    modalNewGame.addEventListener('click', this.resetGame.bind(this));
    const modalCloseLinks = [...document.querySelectorAll('#close')];
    modalCloseLinks.forEach((el) => el.addEventListener('click', this.closeModal.bind(this)));
  }

  resetGame() {
    this.count = 0;
    this.progressIdentifier = setInterval(this.tick.bind(this), 1000);
    this.game.reset();
    this.game.modal.close();
  }

  closeModal() {
    this.game.modal.close();
  }

  soundClick(e) {
    if (this.sound === constants.SOUND_OFF) {
      e.target.dataset.sound = constants.SOUND_ON;
      e.target.innerText = `Sound ${constants.SOUND_ON}`;
      this.sound = constants.SOUND_ON;
    } else {
      e.target.innerText = `Sound ${constants.SOUND_OFF}`;
      this.sound = constants.SOUND_OFF;
      e.target.dataset.sound = constants.SOUND_OFF;
    }
  }

  changeStateClick(e) {
    if (e.target.innerText === constants.STATE_PAUSE
        && this.state === constants.STATE_START) return;
    if (e.target.innerText === constants.STATE_PAUSE && this.state === constants.STATE_PLAYING) {
      this.state = constants.STATE_PAUSE;
      this.menuList.classList.remove('hidden');
      this.game.overlay.classList.remove('hidden');
      clearInterval(this.progressIdentifier);
      e.target.innerText = 'Resume';
    } else {
      this.state = constants.STATE_PLAYING;
      this.progressIdentifier = setInterval(this.tick.bind(this), 1000);
      this.children.forEach((el) => {
        if (el.classList.length < 2) {
          el.classList.add('hidden');
        }
      });
      this.game.overlay.classList.add('hidden');
      e.target.innerText = constants.STATE_PAUSE;
    }
  }

  menuLinkClick(e) {
    if (e.target.dataset.link === 'newGame') {
      this.state = constants.STATE_PLAYING;
      if (this.stateButton.innerText === 'Resume') {
        this.stateButton.innerText = constants.STATE_PAUSE;
      }
      this.menuList.classList.add('hidden');
      this.game.overlay.classList.add('hidden');
      this.progressIdentifier = setInterval(this.tick.bind(this), 1000);
      this.game.reset();
    } else if (e.target.dataset.link === 'settings') {
      this.menuList.classList.add('hidden');
      this.settings.classList.remove('hidden');
    } else if (e.target.dataset.link === 'bestScores') {
      this.menuList.classList.add('hidden');
      this.bestScore.classList.remove('hidden');
    } else if (e.target.dataset.link === 'back') {
      this.children.forEach((el) => {
        if (el.classList.length < 2) {
          el.classList.add('hidden');
        }
      });
      this.menuList.classList.remove('hidden');
    } else if (e.target.dataset.link === 'loadGame') {
      this.loadGame();
    } else if (e.target.dataset.link === 'saveGame') {
      this.saveGame();
    }
  }

  menuRender() {
    this.menuList.innerHTML = `
<span class="menu__link" data-link="newGame">New Game</span>
 <span class="menu__link" data-link="saveGame">Save Game</span>
 <span class="menu__link" data-link="loadGame">Load Game</span>
 <span class="menu__link" data-link="bestScores">Best Scores</span>
 <span class="menu__link" data-link="settings">Settings</span>
`;
  }

  settingsRender() {
    this.settings.classList.add('hidden');
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
    <span id="sound" data-sound="off" class="menu-text_big sound">Sound off</span>
    <span class="menu-text_big" id="back" data-link="back" >Go back</span>
    `;
  }

  bestScoreRender() {
    this.bestScore.classList.add('hidden');
    this.bestScore.innerHTML = `<span class="menu-header">Best Score</span>
        <ul class="best-score_list">
        <li class="best-score_link menu-text_small"><span>Moves</span><span>Time</span></li>
        </ul>
        <span class="menu-text_big" id="back" data-link="back" >Go back</span>
        `;
  }

  savedGamesRender() {
    this.savedGames.classList.add('hidden');
    this.savedGames.innerHTML = `
        <span class="load_game menu-text_small">You haven't got any saved games yet</span>
        <span class="menu-text_big" id="back" data-link="back" >Go back</span>
        `;
  }

  tick() {
    this.count += 1;
    this.sec = this.count >= 60 ? this.count % 60 : this.count;
    this.min = Math.floor(this.count / 60);
    document.querySelector('.time').innerHTML = `Time: ${addZero(this.min)}: ${addZero(this.sec)}`;
  }

  saveGame() {
    const session = {};
    session.count = this.count;
    session.moves = this.game.moves;
    session.template = this.game.currentTemplate;
    session.image = this.game.image;
    session.size = this.game.q;
    const jsonObj = JSON.stringify(session);
    localStorage.setItem('game', jsonObj);
    const loadedGameText = document.querySelector('.load_game');
    loadedGameText.innerText = 'Your game is saved!';
    this.menuList.classList.add('hidden');
    this.savedGames.classList.remove('hidden');
  }

  loadGame() {
    let loadedGame = localStorage.getItem('game');
    if (!loadedGame) {
      const loadedGameText = document.querySelector('.load_game');
      loadedGameText.innerText = 'You have no saved games yet';
      this.menuList.classList.add('hidden');
      this.savedGames.classList.remove('hidden');
    } else {
      loadedGame = JSON.parse(loadedGame);
      this.game.loadGame(loadedGame);
      this.count = loadedGame.count;
      this.tick();
    }
  }

  addSound() {
    this.audio = create('audio');
    this.audio.setAttribute('src', './assets/sounds/english.mp3');
    this.audio.load();
    // this.audio.play();
  }

  generateBestScores() {
    let bestScores = localStorage.getItem('bestScores');
    const bestScoresContainer = document.querySelector('.best-score_list');
    if (!bestScores) return;
    bestScores = JSON.parse(bestScores);
    bestScores = bestScores.sort((a, b) => a.moves - b.moves);
    let html = '<li class="best-score_link menu-text_small"><span>№</span><span>Size</span><span>Moves</span><span>Time</span></li>';
    if (bestScores.length > 10) {
      bestScores = bestScores.slice(0, 10);
    }
    bestScores.forEach((el, ind) => {
      html += `<li class="best-score_link menu-text_small"><span>${ind + 1}.</span><span>${el.size}x${el.size}</span><span>${el.moves}</span><span> ${addZero(Math.floor(el.count / 60))}: ${addZero(el.count % 60)}</span></li>`;
    });
    bestScoresContainer.innerHTML = html;
  }
}

export default Game;
