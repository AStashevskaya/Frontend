import CardComponent from './CardComponent';
import * as constants from './utils/constants';
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

    this.layout.contentContainer.innerHTML = this.render();
    this.initializeCardEvents();
    this.generateAudioArray();
    // this.content = this.render()
    // this.generateLayout()
    // this.render()
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

  static handleMouseLeaveEvent(e) {
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

  handleClickTrainEvent(e) {
    const { target } = e;

    const turn = target.closest('[alt="turn"]');

    if (target === turn) return;

    const card = target.closest('[data-card]');
    const cardName = card.dataset.card;
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
      }

      this.layout.contentContainer.removeChild(el);
    });
  }

  generateAudioArray() {
    this.audiosArr = [...this.cards].map((el) => el.sound);
  }

  addTrainEvents(el) {
    el.addEventListener('click', this.handleClickTrainEvent.bind(this));
    el.addEventListener('mouseleave', CategoryComponent.handleMouseLeaveEvent.bind(CategoryComponent));
  }

  removeTrainEvents(el) {
    el.removeEventListener('click', this.handleClickTrainEvent.bind(this));
    el.removeEventListener('mouseleave', CategoryComponent.handleMouseLeaveEvent.bind(CategoryComponent));
  }

  addPlayEvents(el) {
    el.addEventListener('click', this.checkIfCorrect.bind(this));
  }

  removePlayEvents(el) {
    el.removeEventListener('click', this.checkIfCorrect.bind(this));
  }

  // eslint-disable-next-line class-methods-use-this
  checkIfCorrect(e) {
    const { target } = e;
    const card = target.closest('.card');
    const { word } = card.dataset;
    const cardObj = this.cards.find((el) => el.english === word);
    const clickedCardAudio = cardObj.audioSRC;

    // eslint-disable-next-line no-console
    console.log(clickedCardAudio);
  }
}
