/* eslint-disable max-len */
import * as constants from './utils/constants';
import CategoryComponent from './CategoryComponent';
import create from './utils/create';
import Menu from './Menu';
import Statistic from './Statistics';
import Switcher from './Switcher';

export default class Layout {
  constructor(categories) {
    this.state = constants.STATE_TRAIN;
    this.categories = categories;
    this.contentContainer = document.querySelector('.content-container');
    this.title = document.querySelector('#title');
    this.answerContainer = document.querySelector('.answer-container');

    this.init();
  }

  init() {
    this.categoriesComponents = [...this.categories].map((el) => new CategoryComponent(this, el));
    this.content = this.render();

    this.generateLayout();
  }

  generateLayout() {
    this.menu = new Menu(this);
    this.statistic = new Statistic(this);
    this.switcher = new Switcher(this);
    this.generateMainPage();
  }

  generateMainPage() {
    this.contentContainer.innerHTML = this.content;
    this.title.innerHTML = 'English for kids';
    this.currentPage = constants.MAIN;

    const categories = [...document.querySelectorAll('.category-card')];
    categories.forEach((el) => el.addEventListener('click', this.handleClickCategory));
  }

  handleClickLink = (e) => {
    e.stopPropagation();
    const { target } = e;
    const menu = document.querySelector('.burger-menu');

    if (target.dataset.category === constants.MAIN) {
      this.deleteCategories();
      this.generateMainPage();
    } else if (target.dataset.category === constants.STATISTICS) {
      if (this.currentPage === constants.MAIN) {
        this.deleteCategories();
      } else {
        this.currentPage.deleteCards();
      }

      if (this.playButton) {
        this.removePlayButton();
      }

      this.currentPage = constants.STATISTICS;
      this.title.innerHTML = constants.STATISTICS;

      this.statisticTable = this.statistic.render();
      this.contentContainer.appendChild(this.statisticTable);
      this.statistic.initializeClicks();
    } else {
      this.handleClickCategory(e);
    }
    menu.classList.remove('open');
    this.menu.constructor.changeActiveMenuLink(this.currentPage);
  }

  handleClickCategory = (e) => {
    const { target } = e;
    const card = target.closest('[data-category]');
    const clickedCategory = card.dataset.category;

    if (this.currentPage === constants.MAIN) {
      this.deleteCategories();
    } else if (this.currentPage === constants.STATISTICS) {
      this.contentContainer.innerHTML = '';
    } else {
      this.currentPage.deleteCards();
    }

    const choosenCategory = this.categoriesComponents.find((el) => el.title === clickedCategory);
    this.currentPage = choosenCategory;
    this.title.innerHTML = this.currentPage.title;

    choosenCategory.init();
  }

  deleteCategories() {
    const categories = [...this.contentContainer.children];

    categories.forEach((el) => {
      el.removeEventListener('click', this.handleClickCategory);
      this.contentContainer.removeChild(el);
    });
  }

  render() {
    let html = '';

    this.categoriesComponents.forEach((el) => {
      html += `
      <div class="category-card" data-category="${el.title}" data-train="${this.state === constants.STATE_TRAIN ? 'true' : 'false'}">
      <div class="category-card__image"><img src="./assets/images/${el.image}" alt="${el.title}"></div>
      <div class="category-card__title">${el.title}</div>
      </div>`;
    });
    return html;
  }

  changeLayout(mode) {
    this.state = mode;
    const cards = [...this.contentContainer.children];
    const main = document.querySelector('.app-container');

    if (this.state === constants.STATE_TRAIN) {
      main.classList.remove('playing');

      if (this.playButton) {
        this.removePlayButton();
      }

      if (this.currentPage !== constants.MAIN) {
        cards.forEach((el) => {
          el.dataset.train = true;
          el.removeAttribute('data-checked');
          this.currentPage.removePlayEvents(el);
          this.currentPage.addTrainEvents(el);
        });
      }
    }

    if (this.state === constants.STATE_PLAY) {
      main.classList.add('playing');
      const answerContainer = document.querySelector('.answer-container');
      answerContainer.innerHTML = '';

      if (this.currentPage !== constants.MAIN && this.currentPage !== constants.STATISTICS) {
        this.currentPage.currentAudioIdx = 0;
        cards.forEach((el) => {
          el.dataset.train = false;
          el.dataset.checked = false;
          this.currentPage.generateAudioArray();
          this.currentPage.removeTrainEvents(el);
          this.currentPage.addPlayEvents(el);
        });

        if (!this.playButton) {
          this.createPlayButton();
        } else {
          this.removePlayButton();
          this.createPlayButton();
        }
      }
    }
  }

  createPlayButton() {
    this.playButton = create('div', 'button__play', '<img src="./assets/images/play-btn.svg" alt="play">');
    this.playButton.dataset.btn = constants.PLAY;

    this.playButton.addEventListener('click', this.createRepeatButton);

    const container = document.querySelector('.title-container');
    container.appendChild(this.playButton);
  }

  createRepeatButton = () => {
    this.playButton.dataset.btn = constants.REPEAT;
    this.playButton.innerHTML = '<img src="./assets/images/repeat.svg" alt="repeat">';

    this.playButton.removeEventListener('click', this.currentPage.repeatAudio.bind(this.currentPage));
    this.playButton.addEventListener('click', this.currentPage.repeatAudio.bind(this.currentPage));

    this.currentPage.playGame();
  }

  removePlayButton() {
    const container = document.querySelector('.title-container');

    if (this.playButton.dataset.btn === constants.PLAY) {
      this.playButton.removeEventListener('click', this.createRepeatButtton);
    } else {
      this.playButton.removeEventListener('click', this.currentPage.repeatAudio);
    }

    container.removeChild(this.playButton);
    this.playButton = null;
  }
}
