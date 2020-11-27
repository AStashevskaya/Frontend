export default class Card {
  constructor(category, options) {
    this.category = category;
    const {
      russian, english, image, audio,
    } = options
    this.russian = russian;
    this.english = english;
    this.image = image;
    this.audioSRC = audio
    this.init()
  }

  init() {
    this.generateAudio()
  }

  generateAudio() {
    this.audio = create('audio');
    this.audio.setAttribute('src', `assets/sounds/${this.audioSRC}`);
    this.audio.load();
  }

  render() {
    return ` <div class="card">
        <div class="card__front">
            <div class="card__image"><img src="assets/images/${this.image}" alt="${this.russian}"></div>
            <div class="card__content"><span class="card__text"></span> <span class="turn" data-turn="true"></span> </div>
        </div>
        <div class="card__back">  <div class="card__image"><img src="assets/images/${this.image}" alt="${this.english}"></div>
        <div class="card__content"><span class="card__text"></span> </div>
    </div>
      </div>`
  }
}
