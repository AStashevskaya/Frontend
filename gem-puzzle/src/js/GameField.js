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
    this.correctTemplate = [];
    this.width = this.settings.width;
    this.count = 0;
    this.currentTemplate = [];
    this.prevFieldSize = null;
    this.init();
  }

  init() {
    this.generateLayout();
    this.image = this.getImage(images);
    this.modal = new Modal(this);
    this.makeCorrectTemplate();
    this.render(this.correctTemplate);
  }

  generateLayout() {
    this.bestScores = this.generateBestScoreArr();
    this.container = create('div', 'gamefield');
    this.overlay = create('span', 'overlay');
    this.container.style.width = `${this.width}px`;
    this.container.style.height = `${this.width}px`;
    document.querySelector('.game-wrapper').appendChild(this.container);
    this.container.appendChild(this.overlay);
  }

  makeCorrectTemplate() {
    this.correctTemplate = [];
    for (let i = 0; i < (this.fieldSize ** 2) - 1; i += 1) {
      const left = i % this.fieldSize;
      const top = (i - left) / this.fieldSize;
      const ind = i + 1;
      this.correctTemplate.push(new FieldCell(this, { left, top, ind }));
    }
    this.correctTemplate.push(new FieldCell(this, { left: this.fieldSize - 1, top: this.fieldSize - 1, ind: '' }));
    this.correctTemplate.forEach((el) => el.getBackgroundPosition());
  }

  loadGame(options) {
    if (!options) return;
    const {
      size, image, moves, template,
    } = options;
    this.fieldSize = size;
    this.image = image;
    this.moves = moves;
    this.currentTemplate = template;
    this.makeCorrectTemplate();
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
        el.addEventListener('dragstart', this.getButton.bind(this));
      } else {
        el.addEventListener('dragover', this.overButton.bind(this));
        el.addEventListener('drop', this.putButton.bind(this));
      }
      el.addEventListener('click', this.moveButton.bind(this));
      this.container.appendChild(el);
    });
  }

  shuffle() {
    const arr = [...this.correctTemplate];
    let empty = arr.pop();
    this.buttons = [];
    const numbers = this.sortArray();
    for (let i = 0; i < (this.fieldSize ** 2) - 1; i += 1) {
      const left = i % this.fieldSize;
      const top = (i - left) / this.fieldSize;
      const ind = numbers[i];
      const correctBtn = this.correctTemplate.find((el) => el.ind === ind);
      const field = new FieldCell(this, { left, top, ind });
      field.bgPosX = correctBtn.bgPosX;
      field.bgPosY = correctBtn.bgPosY;
      this.buttons.push(field);
    }
    empty = new FieldCell(this, { left: this.fieldSize - 1, top: this.fieldSize - 1, ind: '' });
    empty.getBackgroundPosition();
    this.buttons.push(empty);
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

  sortArray() {
    let numbers = [];
    numbers = [...Array((this.fieldSize ** 2) - 1).keys()]
      .sort(() => Math.random() - 0.5)
      .map((el) => el + 1);
    if (!this.checkSolving(numbers)) {
      this.sortArray();
    }
    return numbers;
  }

  getImage(arr) {
    const ind = Math.floor(Math.random() * arr.length);
    return arr[ind];
  }

  reset() {
    this.image = this.getImage(images);
    this.prevFieldSize = this.fieldSize;
    this.fieldSize = this.checkSize();
    if (this.fieldSize !== this.prevFieldSize) this.makeCorrectTemplate();
    this.deleteCells();
    setTimeout(() => {
      this.shuffle();
    }, 0);
    this.moves = 0;
    document.querySelector('.move').innerHTML = `Moves: ${this.moves}`;
    this.settings.count = 0;
  }

  moveButton(e) {
    if (this.settings.state === constants.STATE_PAUSE) return;
    this.currentTemplate = [];
    const number = Number(e.target.innerHTML);
    const clickedObj = this.buttons.find((el) => el.ind === number);
    const emptyObj = this.buttons.find((el) => el.ind === '');
    if (!clickedObj || !emptyObj) return;
    const { left, top } = clickedObj;
    const emptyLeft = emptyObj.left;
    const emptyTop = emptyObj.top;
    const sum = Math.abs(left - emptyLeft) + Math.abs(top - emptyTop);
    if (sum !== 1) return;
    this.moves += 1;
    document.querySelector('.move').innerHTML = `Moves: ${this.moves}`;
    if (this.settings.sound === constants.SOUND_ON) {
      this.settings.audio.play();
    }
    Object.assign(emptyObj, { left, top });
    if (left !== emptyLeft) {
      this.animate('left', clickedObj, left, emptyLeft);
      clickedObj.container.style.top = `${clickedObj.top * clickedObj.size}px`;
    } else {
      this.animate('top', clickedObj, top, emptyTop);
      clickedObj.container.style.left = `${clickedObj.left * clickedObj.size}px`;
    }
    clickedObj.left = emptyLeft;
    clickedObj.top = emptyTop;
    emptyObj.container.style.top = `${emptyObj.top * emptyObj.size}px`;
    emptyObj.container.style.left = `${emptyObj.left * emptyObj.size}px`;
    this.buttons.forEach((el) => {
      const {
        // eslint-disable-next-line no-shadow
        left, top, ind, bgPosY, bgPosX,
      } = el;
      this.currentTemplate.push({
        left, top, ind, bgPosY, bgPosX,
      });
    });
    this.checkTemplate();
  }

  animate(position, obj, currPos, destination) {
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

  getButton(e) {
    if (this.settings.state === constants.STATE_PAUSE) return;
    const number = Number(e.target.innerHTML);
    this.clickedObj = this.buttons.find((el) => el.ind === number);
  }

  putButton() {
    this.currentTemplate = [];
    const emptyObj = this.buttons.find((el) => el.ind === '');
    if (!this.clickedObj || !emptyObj) return;
    const { left, top } = this.clickedObj;
    const emptyLeft = emptyObj.left;
    const emptyTop = emptyObj.top;
    const sum = Math.abs(left - emptyLeft) + Math.abs(top - emptyTop);
    if (sum !== 1) return;
    this.moves += 1;
    document.querySelector('.move').innerHTML = `Moves: ${this.moves}`;
    if (this.settings.sound === constants.SOUND_ON) {
      this.settings.audio.play();
    }
    Object.assign(emptyObj, { left, top });
    this.clickedObj.left = emptyLeft;
    this.clickedObj.top = emptyTop;
    this.clickedObj.container.style.top = `${this.clickedObj.top * this.clickedObj.size}px`;
    this.clickedObj.container.style.left = `${this.clickedObj.left * this.clickedObj.size}px`;
    emptyObj.container.style.top = `${emptyObj.top * emptyObj.size}px`;
    emptyObj.container.style.left = `${emptyObj.left * emptyObj.size}px`;
    this.buttons.forEach((el) => {
      const {
        // eslint-disable-next-line no-shadow
        left, top, ind, bgPosY, bgPosX,
      } = el;
      this.currentTemplate.push({
        left, top, ind, bgPosY, bgPosX,
      });
    });
    this.checkTemplate();
  }

  overButton(e) {
    e.preventDefault();
  }

  checkTemplate() {
    for (let i = 0; i < this.buttons.length - 1; i += 1) {
      const ind = i + 1;
      const correctObj = this.correctTemplate.find((el) => el.ind === ind);
      const currentObj = this.buttons.find((el) => el.ind === ind);
      if (correctObj.left !== currentObj.left) return;
      if (correctObj.top !== currentObj.top) return;
    }
    this.ifWin();
  }

  ifWin() {
    const emptyObj = this.buttons.find((el) => el.ind === '');
    emptyObj.container.style.opacity = '1';
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
    localStorage.setItem('bestScores', bestJson);
    this.settings.generateBestScores();
    this.modal.open();
  }

  generateBestScoreArr() {
    let bestScores = localStorage.getItem('bestScores');
    if (!bestScores) return [];
    bestScores = JSON.parse(bestScores);
    return bestScores;
  }

  checkSize() {
    return Number(document.querySelector('input[name=size]:checked').value);
  }

  deleteCells() {
    const children = [...this.container.children];
    children.forEach((el) => {
      if (el !== this.overlay) {
        if (el.textContent) {
          el.removeEventListener('dragstart', this.getButton.bind(this));
        } else {
          el.removeEventListener('dragover', this.overButton.bind(this));
          el.removeEventListener('drop', this.putButton.bind(this));
        }
        el.removeEventListener('click', this.moveButton.bind(this));
        this.container.removeChild(el);
      }
    });
  }
}
