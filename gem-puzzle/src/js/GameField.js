import create from './utils/create';
import FieldCell from './FieldCell';
import Modal from './Popup';
import images from './layouts/images';
import * as constants from './utils/constants';

export default class GameField {
  constructor(settings) {
    this.settings = settings;
    this.moves = 0;
    this.fieldSize = 4;
    this.buttons = [];
    this.winTemplate = [];
    this.width = this.settings.width;
    this.count = 0;
    this.currentTemplate = [];
    this.prevFieldSize = null;
    this.init();
  }

  init() {
    this.generateLayout();
    this.image = GameField.getImage(images);
    this.modal = new Modal(this);
    this.generateWinTemplate();
    this.render(this.winTemplate);
  }

  generateLayout() {
    this.bestScores = GameField.generateBestScoreArr();
    this.container = create('div', 'gamefield');
    this.overlay = create('span', 'overlay');
    this.container.style.width = `${this.width}px`;
    this.container.style.height = `${this.width}px`;
    document.querySelector('.game-wrapper').appendChild(this.container);
    this.container.appendChild(this.overlay);
  }

  generateWinTemplate() {
    this.winTemplate = [];
    for (let i = 0; i < (this.fieldSize ** 2) - 1; i += 1) {
      const left = i % this.fieldSize;
      const top = (i - left) / this.fieldSize;
      const idx = i + 1;
      this.winTemplate.push(new FieldCell(this, { left, top, idx }));
    }
    this.winTemplate.push(new FieldCell(this, { left: this.fieldSize - 1, top: this.fieldSize - 1, idx: '' }));
    this.winTemplate.forEach((el) => el.getBackgroundPosition());
  }

  renderLoadGame(options) {
    if (!options) return;
    const {
      size, image, moves, template,
    } = options;
    this.fieldSize = size;
    this.image = image;
    this.moves = moves;
    this.currentTemplate = template;
    this.generateWinTemplate();
    this.buttons = [];
    this.currentTemplate.forEach((el) => this.buttons.push(new FieldCell(this, el)));
    document.querySelector('.move').innerHTML = `Moves: ${this.moves}`;
    this.deleteCells();
    this.render(this.buttons);
  }

  render(arr) {
    arr.forEach((obj) => {
      const el = obj.render();
      if (el.textContent) {
        el.draggable = true;
        el.addEventListener('dragstart', this.handleCellDragStart.bind(this));
      } else {
        el.addEventListener('dragover', GameField.handleCellMove.bind(GameField));
        el.addEventListener('drop', this.handleCellDragEnd.bind(this));
      }
      el.addEventListener('click', this.handleCellClick.bind(this));
      this.container.appendChild(el);
    });
  }

  shuffle() {
    const arr = [...this.winTemplate];
    let emptyCeil = arr.pop();
    this.buttons = [];
    const numbers = this.makeshuffledNumbersArray();

    for (let i = 0; i < (this.fieldSize ** 2) - 1; i += 1) {
      const left = i % this.fieldSize;
      const top = (i - left) / this.fieldSize;
      const idx = numbers[i];
      const correctBtn = this.winTemplate.find((el) => el.idx === idx);
      const field = new FieldCell(this, { left, top, idx });

      field.bgPosX = correctBtn.bgPosX;
      field.bgPosY = correctBtn.bgPosY;

      this.buttons.push(field);
    }

    emptyCeil = new FieldCell(this, { left: this.fieldSize - 1, top: this.fieldSize - 1, idx: '' });
    emptyCeil.getBackgroundPosition();

    this.buttons.push(emptyCeil);
    this.render(this.buttons);
  }

  checkSolving(arr) {
    let count = this.fieldSize;
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = i + 1; j < arr.length; j += 1) {
        if (arr[i] > arr[j]) {
          count += 1;
        }
      }
    }

    if (count % 2 === 0) return true;
    return false;
  }

  makeshuffledNumbersArray() {
    let numbers = [];
    numbers = [...Array((this.fieldSize ** 2) - 1).keys()]
      .sort(() => Math.random() - 0.5)
      .map((el) => el + 1);
    if (!this.checkSolving(numbers)) {
      this.makeshuffledNumbersArray();
    }
    return numbers;
  }

  static getImage(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
  }

  reset() {
    this.image = GameField.getImage(images);
    this.prevFieldSize = this.fieldSize;
    this.fieldSize = GameField.checkSize();

    if (this.fieldSize !== this.prevFieldSize) this.generateWinTemplate();

    this.deleteCells();
    this.shuffle();
    this.moves = 0;
    document.querySelector('.move').innerHTML = `Moves: ${this.moves}`;
    this.settings.count = 0;
  }

  handleCellClick(e) {
    if (this.settings.state === constants.STATE_PAUSE) return;

    this.currentTemplate = [];
    const number = Number(e.target.innerHTML);
    const clickedCeil = this.buttons.find((el) => el.idx === number);
    const emptyCeil = this.buttons.find((el) => el.idx === '');
    const nothingClicked = !clickedCeil || !emptyCeil;

    if (nothingClicked) return;

    this.swapCeilPositions(clickedCeil, emptyCeil);
    this.saveCurrentTemplate();
    this.findIfWinTemplate();
  }

  swapCeilPositions(clicked, empty) {
    const clickedCeil = clicked;
    const emptyCeil = empty;
    const { left, top } = clickedCeil;
    const emptyLeft = emptyCeil.left;
    const emptyTop = emptyCeil.top;

    const sum = Math.abs(left - emptyLeft) + Math.abs(top - emptyTop);
    if (sum !== 1) return;

    this.moves += 1;
    document.querySelector('.move').innerHTML = `Moves: ${this.moves}`;
    if (this.settings.sound === constants.SOUND_ON) {
      this.settings.audio.play();
    }
    Object.assign(emptyCeil, { left, top });

    if (left !== emptyLeft) {
      GameField.animate('left', clickedCeil, left, emptyLeft);
      clickedCeil.container.style.top = `${clickedCeil.top * clickedCeil.size}px`;
    }
    if (top !== emptyTop) {
      GameField.animate('top', clickedCeil, top, emptyTop);
      clickedCeil.container.style.left = `${clickedCeil.left * clickedCeil.size}px`;
    }

    clickedCeil.left = emptyLeft;
    clickedCeil.top = emptyTop;
    emptyCeil.container.style.top = `${emptyCeil.top * emptyCeil.size}px`;
    emptyCeil.container.style.left = `${emptyCeil.left * emptyCeil.size}px`;
  }

  saveCurrentTemplate() {
    this.buttons.forEach((el) => {
      const {
        left, top, idx, bgPosY, bgPosX,
      } = el;
      this.currentTemplate.push({
        left, top, idx, bgPosY, bgPosX,
      });
    });
  }

  static animate(position, obj, currPos, destination) {
    const FRAME_RATE = 10;
    const objNextPosition = destination;
    const changingPosition = position;
    let objCurrentPosition = currPos;
    const step = (FRAME_RATE * Math.abs((objNextPosition - objCurrentPosition)))
                  / constants.ANIMATION_DURATION;

    const id = setInterval(() => {
      if (objCurrentPosition < objNextPosition) {
        objCurrentPosition = Math.min(objNextPosition, objCurrentPosition + step);
        if (objCurrentPosition >= objNextPosition) {
          clearInterval(id);
        }
      } else if (objCurrentPosition > objNextPosition) {
        objCurrentPosition = Math.max(objNextPosition, objCurrentPosition - step);
        if (objCurrentPosition <= objNextPosition) {
          clearInterval(id);
        }
      }
      obj.container.style[changingPosition] = `${objCurrentPosition * obj.size}px`;
    }, FRAME_RATE);
  }

  handleCellDragStart(e) {
    if (this.settings.state === constants.STATE_PAUSE) return;

    const number = Number(e.target.innerHTML);
    this.clickedCeil = this.buttons.find((el) => el.idx === number);
  }

  handleCellDragEnd() {
    this.currentTemplate = [];
    const emptyCeil = this.buttons.find((el) => el.idx === '');
    const nothingClicked = !this.clickedCeil || !emptyCeil;

    if (nothingClicked) return;
    const { left, top } = this.clickedCeil;
    const emptyLeft = emptyCeil.left;
    const emptyTop = emptyCeil.top;

    const sum = Math.abs(left - emptyLeft) + Math.abs(top - emptyTop);
    if (sum !== 1) return;

    this.moves += 1;
    document.querySelector('.move').innerHTML = `Moves: ${this.moves}`;
    if (this.settings.sound === constants.SOUND_ON) {
      this.settings.audio.play();
    }
    Object.assign(emptyCeil, { left, top });

    this.clickedCeil.left = emptyLeft;
    this.clickedCeil.top = emptyTop;
    this.clickedCeil.container.style.top = `${this.clickedCeil.top * this.clickedCeil.size}px`;
    this.clickedCeil.container.style.left = `${this.clickedCeil.left * this.clickedCeil.size}px`;
    emptyCeil.container.style.top = `${emptyCeil.top * emptyCeil.size}px`;
    emptyCeil.container.style.left = `${emptyCeil.left * emptyCeil.size}px`;

    this.saveCurrentTemplate();
    this.findIfWinTemplate();
  }

  static handleCellMove(e) {
    e.preventDefault();
  }

  findIfWinTemplate() {
    for (let i = 0; i < this.buttons.length - 1; i += 1) {
      const idx = i + 1;
      const correctObj = this.winTemplate.find((el) => el.idx === idx);
      const currentObj = this.buttons.find((el) => el.idx === idx);

      if (correctObj.left !== currentObj.left) return;
      if (correctObj.top !== currentObj.top) return;
    }

    this.isWin();
  }

  isWin() {
    const emptyCeil = this.buttons.find((el) => el.idx === '');
    emptyCeil.container.style.opacity = '1';
    document.querySelectorAll('.fieldcell').forEach((el) => {
      el.innerText = '';
      el.style.borderRadius = '0';
    });

    const game = {};
    game.moves = this.moves;
    game.size = this.fieldSize;
    game.count = this.settings.count;

    this.bestScores.push(game);

    const bestJson = JSON.stringify(this.bestScores);
    localStorage.setItem(constants.BESTSCORES, bestJson);

    this.settings.generateBestScores();
    this.modal.open();
  }

  static generateBestScoreArr() {
    let bestScores = localStorage.getItem(constants.BESTSCORES);
    if (!bestScores) return [];
    bestScores = JSON.parse(bestScores);
    return bestScores;
  }

  static checkSize() {
    return Number(document.querySelector('input[name=size]:checked').value);
  }

  deleteCells() {
    const children = [...this.container.children];
    children.forEach((el) => {
      if (el !== this.overlay) {
        if (el.textContent) {
          el.removeEventListener('dragstart', this.handleCellDragStart.bind(this));
        } else {
          el.removeEventListener('dragover', GameField.handleCellMove.bind(GameField));
          el.removeEventListener('drop', this.handleCellDragEnd.bind(this));
        }
        el.removeEventListener('click', this.handleCellClick.bind(this));
        this.container.removeChild(el);
      }
    });
  }
}
