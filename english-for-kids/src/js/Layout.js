import * as constants from './utils/constants';
import CategoryComponent from './CategoryComponent';
import create from './utils/create';

export default class Layout {
  constructor(mode, categories) {
    this.state = mode;
    this.categories = categories;

    this.init();
  }

  init() {
    this.categories = this.categories.map((el) => new CategoryComponent(this, el));
    this.content = this.render();

    this.generateLayout();
    this.initializeMenuClick();
  }

  generateLayout() {
    this.generateMenu();
    this.generateMainPage();
  }

  generateMainPage() {
    this.contentContainer = document.querySelector('.content-container');
    this.contentContainer.innerHTML = this.content;
    this.title = document.querySelector('#title');
    this.title.innerHTML = 'English for kids';
    this.currentPage = constants.MAIN;

    const categories = [...document.querySelectorAll('.category-card')];
    categories.forEach((el) => el.addEventListener('click', this.handleClickCategory.bind(this)));
  }

  generateMenu() {
    this.menu = document.querySelector('.menu-list');

    let html = '';
    this.categories.forEach((el) => {
      html += ` <li><a href="#" class="menu-list__link" data-category="${el.title}">${el.title}</a></li>`;
    });

    const linkTOmain = create('li');
    linkTOmain.innerHTML = `<a href="#" class="menu-list__link link__active" data-category="${constants.MAIN}">Main page</a>`;

    const linkTOstaticticks = create('li');
    linkTOstaticticks.innerHTML = `<a href="#" class="menu-list__link" data-category="${constants.STATISTICS}">Statistics</a>`;

    this.menu.innerHTML = html;
    this.menu.prepend(linkTOmain);
    this.menu.appendChild(linkTOstaticticks);
  }

  initializeMenuClick() {
    const menuLinks = [...document.querySelectorAll('.menu-list__link')];
    menuLinks.forEach((el) => el.addEventListener('click', this.handleClickLink.bind(this)));
  }

  handleClickLink(e) {
    e.stopPropagation();
    const { target } = e;
    const menu = document.querySelector('.burger-menu');

    if (target.dataset.category === constants.MAIN
        || target.dataset.category === constants.STATISTICS) {
      this.deleteCategories();
      this.generateMainPage();

      menu.classList.remove('open');
    } else {
      this.handleClickCategory(e);
      menu.classList.remove('open');
    }
  }

  handleClickCategory(e) {
    const { target } = e;
    const card = target.closest('[data-category]');
    const clickedCategory = card.dataset.category;

    if (this.currentPage === constants.MAIN) {
      this.deleteCategories();
    } else {
      this.currentPage.deleteCards();
    }

    const choosenCategory = this.categories.find((el) => el.title === clickedCategory);
    this.currentPage = choosenCategory;
    this.title.innerHTML = this.currentPage.title;
    choosenCategory.init();
  }

  deleteCategories() {
    const categories = [...this.contentContainer.children];

    categories.forEach((el) => {
      el.removeEventListener('click', this.handleClickCategory.bind(this));
      this.contentContainer.removeChild(el);
    });
  }

  render() {
    let html = '';

    this.categories.forEach((el) => {
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
      this.contentContainer.classList.remove('playing');
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
      this.contentContainer.classList.add('playing');
      main.classList.add('playing');

      if (this.currentPage !== constants.MAIN) {
        this.currentPage.currentAudioIdx = 0;
        cards.forEach((el) => {
          el.dataset.train = false;
          el.dataset.checked = false;
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
    this.playButton = create('div', 'button__play', 'play');
    this.playButton.dataset.btn = 'play';

    this.playButton.addEventListener('click', this.createRepeatButtton.bind(this));

    const container = document.querySelector('.title-container');
    container.appendChild(this.playButton);
  }

  createRepeatButtton() {
    this.playButton.dataset.btn = 'repeat';
    this.playButton.innerHTML = 'repeat';

    this.playButton.removeEventListener('click', this.currentPage.repeatAudio.bind(this.currentPage));
    this.playButton.addEventListener('click', this.currentPage.repeatAudio.bind(this.currentPage));

    this.currentPage.playGame();
  }

  removePlayButton() {
    const container = document.querySelector('.title-container');

    if (this.playButton.dataset.btn === 'play') {
      this.playButton.removeEventListener('click', this.createRepeatButtton.bind(this));
    } else {
      this.playButton.removeEventListener('click', this.currentPage.repeatAudio.bind(this.currentPage));
    }

    container.removeChild(this.playButton);
    this.playButton = null;
  }
}
