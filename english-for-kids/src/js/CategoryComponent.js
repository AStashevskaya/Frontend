import CardComponent from './CardComponent';
import * as constants from './utils/constants';
import create from './utils/create';
// import create from './utils/create';

export default class CategoryComponent {
  constructor(layout, options) {
    this.layout = layout;
    this.image = options.image;
    this.title = options.title;
    this.cards = options.cards;
    this.cardsComponents = [];
  }

  init() {
    this.cardsComponents = [...this.cards].map((el) => new CardComponent(this, el));

    if (this.layout.state === constants.STATE_PLAY) {
      if (this.layout.playButton) {
        this.layout.removePlayButton();
      }
      this.layout.createPlayButton();
    }

    this.layout.contentContainer.innerHTML = this.render();
    this.initializeCardEvents();
    this.generateAudioArray();
    this.createAudiosforPlaying();
  }

  createAudiosforPlaying() {
    this.currentAudio = create('audio');
    this.currentAudioIdx = 0;

    this.correctAudio = create('audio');
    this.correctAudio.setAttribute('src', './assets/sounds/correct.mp3');
    this.correctAudio.load();

    this.winAudio = create('audio');
    this.winAudio.setAttribute('src', './assets/sounds/success.mp3');
    this.winAudio.load();

    this.errorAudio = create('audio');
    this.errorAudio.setAttribute('src', './assets/sounds/error.mp3');
    this.errorAudio.load();
  }

  playGame() {
    this.currentAudioSrc = this.audiosArr[this.currentAudioIdx];
    this.currentAudio.setAttribute('src', `./assets/sounds/${this.currentAudioSrc}`);

    this.currentAudio.load();
    this.currentAudio.play();
  }

  checkIfCorrect() {
    if (this.currentAudioSrc === this.clickedCardAudio) {
      if (this.currentAudioIdx < this.audiosArr.length - 1) {
        this.clickedCard.dataset.checked = 'true';
        this.currentAudioIdx += 1;
        this.removePlayEvents(this.clickedCard);
        CategoryComponent.addStars(true);
        this.correctAudio.play();
        this.playGame();
      } else if (this.currentAudioIdx === this.audiosArr.length - 1) {
        this.clickedCard.dataset.checked = 'true';
        this.removePlayEvents(this.clickedCard);
        CategoryComponent.addStars(true);
        this.currentAudioIdx += 1;
        this.winAudio.play();
      }
    } else {
      this.errorAudio.play();
      CategoryComponent.addStars(false);
    }
  }

  initializeCardEvents() {
    const cards = [...document.querySelectorAll('.card')];

    cards.forEach((el) => {
      if (this.layout.state === constants.STATE_TRAIN) {
        this.addTrainEvents(el);
      }

      if (this.layout.state === constants.STATE_PLAY) {
        this.addPlayEvents(el);
      }
    });

    const turnButtons = [...document.querySelectorAll('.turn')];
    turnButtons.forEach((el) => {
      el.addEventListener('click', CategoryComponent.turnCard.bind(CategoryComponent));
    });
  }

  static handleMouseLeaveEvent = (e) => {
    const card = e.target;

    const cardChildren = [...card.children];
    const cardFront = cardChildren.find((el) => el.classList.contains(constants.FRONT_CLASS));
    const cardBack = cardChildren.find((el) => el.classList.contains(constants.BACK_CLASS));

    const frontClassesLength = cardFront.classList.length;
    const backClassesLength = cardBack.classList.length;

    if (frontClassesLength > 1 || backClassesLength > 1) {
      cardFront.classList.remove(constants.FRONT_ROTATE);
      cardBack.classList.remove(constants.BACK_ROTATE);
    }
  }

  static turnCard(e) {
    const { target } = e;
    const card = target.closest('.card');

    const cardChildren = [...card.children];
    const cardFront = cardChildren.find((el) => el.className === constants.FRONT_CLASS);
    const cardBack = cardChildren.find((el) => el.className === constants.BACK_CLASS);

    cardFront.classList.add(constants.FRONT_ROTATE);
    cardBack.classList.add(constants.BACK_ROTATE);
  }

  handleClickTrainEvent = (e) => {
    const { target } = e;

    const turn = target.closest('[alt="turn"]');

    if (target === turn) return;

    const card = target.closest('[data-word]');
    const cardName = card.dataset.word;
    const cardObj = this.cardsComponents.find((el) => el.english === cardName);

    if (this.layout.state === constants.STATE_TRAIN) {
      cardObj.audio.play();
    }
  }

  render() {
    let html = '';

    this.cardsComponents.forEach((el) => {
      html += el.render();
    });

    return html;
  }

  deleteCards() {
    const turnButtons = [...document.querySelectorAll('.turn')];
    turnButtons.forEach((el) => {
      el.removeEventListener('click', CategoryComponent.turnCard.bind(CategoryComponent));
    });

    const cards = [...this.layout.contentContainer.children];
    cards.forEach((el) => {
      if (this.layout.state === constants.STATE_TRAIN) {
        this.removeTrainEvents(el);
      } else {
        this.removePlayEvents(el);
      }

      this.layout.contentContainer.removeChild(el);
    });
  }

  generateAudioArray() {
    this.audiosArr = [...this.cards].map((el) => el.sound);
    this.audiosArr = this.audiosArr.sort(() => Math.random() - 0.5);
  }

  addTrainEvents(el) {
    el.addEventListener('click', this.handleClickTrainEvent);
    el.addEventListener('mouseleave', CategoryComponent.handleMouseLeaveEvent);
  }

  removeTrainEvents(el) {
    el.removeEventListener('click', this.handleClickTrainEvent);
    el.removeEventListener('mouseleave', CategoryComponent.handleMouseLeaveEvent);
  }

  addPlayEvents(el) {
    el.addEventListener('click', this.getClickedCardAudio);
  }

  removePlayEvents(el) {
    el.removeEventListener('click', this.getClickedCardAudio);
  }

  getClickedCardAudio = (e) => {
    if (this.layout.state === constants.STATE_TRAIN) return;
    if (this.layout.playButton.dataset.btn === 'play') return;

    const { target } = e;

    this.clickedCard = target.closest('.card');
    const { word } = this.clickedCard.dataset;
    const cardObj = this.cards.find((el) => el.english === word);
    this.clickedCardAudio = cardObj.sound;

    this.checkIfCorrect();
  }

  repeatAudio() {
    this.currentAudio.play();
  }

  static addStars(correct) {
    const starsContainer = document.querySelector('.answer-container');

    const correctStar = create('img', 'star');
    correctStar.setAttribute('src', 'assets/images/star-win.svg');

    const incorrectStar = create('img', 'star');
    incorrectStar.setAttribute('src', 'assets/images/star.svg');

    if (correct) {
      starsContainer.appendChild(correctStar);
    } else {
      starsContainer.appendChild(incorrectStar);
    }
  }
}
