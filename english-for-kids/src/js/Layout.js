import * as constants from './utils/constants';
import CategoryComponent from './CategoryComponent';
import create from './utils/create';
import Menu from './Menu';
import Statistic from './Statistics';
import Switcher from './Switcher';
import MainPage from './MainPage';
import DifficultWords from './DifficultWords';

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

    this.generateLayout();
  }

  generateLayout() {
    this.menu = new Menu(this);
    this.statistic = new Statistic(this);
    this.switcher = new Switcher(this);
    this.mainPage = new MainPage(this);

    this.generateMainPage();
  }

  generateMainPage() {
    this.contentContainer.innerHTML = this.mainPage.render();
    this.title.innerHTML = constants.TITLE;
    this.currentPage = constants.MAIN;

    const categories = [...document.querySelectorAll('.category-card')];
    categories.forEach((el) => el.addEventListener('click', this.mainPage.handleClickCategory));
  }

  generateDifficultWords(words) {
    const difficult = {
      title: constants.DIFFICULT,
      image: null,
      cards: words,
    };

    this.hardWords = new DifficultWords(this, difficult);

    const wordsLength = this.hardWords.cards.length;

    if (wordsLength === 0) {
      this.contentContainer.innerHTML = ` <div class="no-words__wrapper">
                                           <img src="./assets/images/no-words.svg" alt="no-words">
                                          <h2>You haven't made any mistakes yet</h2>
                                          </div>`;
    } else {
      this.hardWords.init();
    }

    this.title.innerHTML = constants.DIFFICULT;
    this.currentPage = this.hardWords;
  }

  handleClickLink = (e) => {
    e.stopPropagation();
    // eslint-disable-next-line no-debugger
    debugger;
    const { target } = e;
    const menu = document.querySelector('.burger-menu');
    this.answerContainer.innerHTML = '';

    if (this.playButton) {
      this.removePlayButton();
    }

    if (this.currentPage === constants.MAIN) {
      if (target.dataset.category === constants.MAIN) return;

      if (target.dataset.category === constants.STATISTICS) {
        this.mainPage.deleteCategories();
        this.generateStatistics();
      }

      if (target.dataset.category !== constants.STATISTICS
        && target.dataset.category !== constants.MAIN) {
        this.mainPage.deleteCategories();
        this.mainPage.handleClickCategory(e);
      }
    } else if (this.currentPage === constants.STATISTICS) {
      if (target.dataset.category === constants.STATISTICS) return;

      if (target.dataset.category === constants.MAIN) {
        this.contentContainer.removeChild(this.statistic.container);
        this.generateMainPage();
      }

      if (target.dataset.category !== constants.STATISTICS
        && target.dataset.category !== constants.MAIN) {
        this.contentContainer.removeChild(this.statistic.container);
        this.mainPage.handleClickCategory(e);
      }
    } else if (this.currentPage !== constants.STATISTICS
      && this.currentPage !== constants.MAIN) {
      if (this.currentPage.title === target.dataset.category) return;

      this.currentPage.deleteCards();

      if (target.dataset.category === constants.MAIN) {
        this.generateMainPage();
      }

      if (target.dataset.category === constants.STATISTICS) {
        this.generateStatistics();
      }

      if (target.dataset.category !== constants.STATISTICS
          && target.dataset.category !== constants.MAIN) {
        this.mainPage.handleClickCategory(e);
      }
    }

    menu.classList.remove('open');
    this.menu.constructor.changeActiveMenuLink(this.currentPage);
  }

  generateStatistics() {
    this.currentPage = constants.STATISTICS;
    this.title.innerHTML = constants.STATISTICS;

    this.statisticTable = this.statistic.render();
    this.contentContainer.appendChild(this.statisticTable);
    this.statistic.initializeClicks();
  }

  changeLayout(mode) {
    this.state = mode;

    const cards = [...this.contentContainer.children];
    const main = document.querySelector('.app-container');

    this.answerContainer.innerHTML = '';

    if (this.state === constants.STATE_TRAIN) {
      main.classList.remove('playing');

      if (this.hardWords) {
        const hardWordsLength = this.hardWords.cards.length;

        if (this.currentPage.title === constants.DIFFICULT && hardWordsLength === 0) return;
      }

      if (this.playButton) {
        this.removePlayButton();
      }

      if (this.currentPage !== constants.MAIN && this.currentPage !== constants.STATISTICS) {
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

      if (this.hardWords) {
        const hardWordsLength = this.hardWords.cards.length;

        if (this.currentPage.title === constants.DIFFICULT && hardWordsLength === 0) return;
      }

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

    this.playButton.removeEventListener('click', this.currentPage.repeatAudio);
    this.playButton.addEventListener('click', this.currentPage.repeatAudio);

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
