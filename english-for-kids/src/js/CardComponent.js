/* eslint-disable no-debugger */
import create from './utils/create';

export default class CardComponent {
  constructor(category, options) {
    this.category = category;

    const {
      russian, english, image, sound,
    } = options;

    this.russian = russian;
    this.english = english;
    this.image = image;
    this.audioSRC = sound;

    this.init();
  }

  init() {
    this.generateAudio();
  }

  generateAudio() {
    debugger;
    this.audio = create('audio');
    // this.audio = new Audio(`./assets/sounds/${this.audioSRC}`);
    this.audio.setAttribute('src', `./assets/sounds/${this.audioSRC}`);
    this.audio.load();
  }

  render() {
    return ` <div class="card" data-card="${this.english}" data-train="true">
        <div class="card__front">
            <div class="card__image"><img src="assets/images/${this.image}" alt="${this.english}"></div>
            <div class="card__content"><span class="card__text">${this.english}</span><span class="turn" data-turn="true"><img src="assets/images/rotate.svg" alt="turn"></span></div>
        </div>
        <div class="card__back">  <div class="card__image"><img src="assets/images/${this.image}" alt="${this.russian}"></div>
        <div class="card__content"><span class="card__text">${this.russian}</span> </div>
    </div>
      </div>`;
  }

  handleClickEvent(e) {
    e.stopPropagation();
    // const { target } = e.target;
    // const card = target.closest('.card');

    if (this.category.state === 'train') {
      this.audio.play();
    }
  }
}
