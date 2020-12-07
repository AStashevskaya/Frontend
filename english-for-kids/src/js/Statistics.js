/* eslint-disable no-console */
import create from './utils/create';
import uppercase from './utils/uppercase';
import WordStatistic from './WordStatisticComponent';
import * as constants from './utils/constants';
// import * as constants from './utils/constants';

export default class Statistic {
  constructor(layout) {
    this.layout = layout;
    this.categories = [...layout.categoriesComponents];
    this.wordsArray = [];

    this.container = create('div', 'statistics__container');
    this.table = create('table', 'statistics__table');
    this.heading = create('tr', 'statistics__heading');
    this.cardsContainer = create('tbody');

    this.init();
  }

  init() {
    // this.categories = [...this.layout.categories];
    this.getfromStorage();
    this.renderHeading();
    this.renderButtons();
    // this.render();
  }

  renderButtons() {
    const buttonsWrapper = create('div', 'statistics__buttons');
    buttonsWrapper.innerHTML = `<a href="#" class="statistics__button" id="reset">Reset results</a>
                                <a href="#" class="statistics__button" id="repeatDiffWord">Train difficult</a>`;
    this.container.appendChild(buttonsWrapper);
  }

  renderHeading() {
    const words = [...this.wordsArray];
    const wordObj = words[0];

    const wordsKeys = Object.keys(wordObj);

    console.log(wordsKeys);

    wordsKeys.forEach((key) => {
      const word = key;
      const cell = create('td');
      cell.innerHTML = `<span class="statistics__cell-wrapper">
                        <span class="title">${word === 'percent' ? '%' : uppercase(word)}</span><span class="statistics__buttons-wrapper" data-id="${word}">
                        <span class="up" data-up='${word}'><img src="./assets/images/up-arrow.svg" alt="up-arrow"></span>
                        <span class="down" data-down='${word}'><img src="./assets/images/down-arrow.svg" alt="down-arrow"></span>
                        </span>
                        </span>`;
      this.heading.appendChild(cell);
    });

    this.table.appendChild(this.heading);
  }

  initializeClicks() {
    const arrowsUp = document.querySelectorAll('[data-up]');
    arrowsUp.forEach((el) => el.addEventListener('click', this.sortWordsUp));

    const arrowsDown = document.querySelectorAll('[data-down]');
    arrowsDown.forEach((el) => el.addEventListener('click', this.sortWordsDown));

    const resetBtn = document.querySelector('#reset');
    resetBtn.addEventListener('click', this.clearStatistics);

    const repeatBtn = document.querySelector('#repeatDiffWord');
    repeatBtn.addEventListener('click', this.layout.openDifficultWords);
  }

  render() {
    this.getfromStorage();

    this.renderCells(this.wordsArray);
    this.takeDifficultWords();

    this.table.appendChild(this.cardsContainer);
    this.container.appendChild(this.table);

    return this.container;
  }

  getfromStorage() {
    const statistic = localStorage.getItem(constants.STATISTICS);

    if (statistic) {
      this.wordsArray = [...JSON.parse(statistic)];
    } else {
      this.saveToStorage();
    }
  }

  saveToStorage() {
    this.categories.forEach((category) => {
      category.cards.forEach((card) => {
        this.wordsArray.push(new WordStatistic(card, category));
      });
    });

    const wordsJson = JSON.stringify(this.wordsArray);
    localStorage.setItem(constants.STATISTICS, wordsJson);
  }

  sortWordsDown = (e) => {
    const { target } = e;
    const clickedBtn = target.closest('[data-id]');
    const sortAttribute = clickedBtn.dataset.id;
    console.log(sortAttribute);

    const newArrWords = [...this.wordsArray];

    newArrWords.sort((a, b) => {
      if (a[sortAttribute] < b[sortAttribute]) {
        return -1;
      }
      return 1;
    });

    this.deleteCells();
    this.renderCells(newArrWords);
    console.log(newArrWords);
  }

  sortWordsUp = (e) => {
    const { target } = e;
    const clickedBtn = target.closest('[data-id]');
    const sortAttribute = clickedBtn.dataset.id;

    const newArrWords = [...this.wordsArray];

    newArrWords.sort((a, b) => {
      if (a[sortAttribute] > b[sortAttribute]) {
        return -1;
      }
      return 1;
    });

    this.deleteCells();
    this.renderCells(newArrWords);
    console.log(newArrWords);
  }

  renderCells(arr) {
    const sortedArr = [...arr];

    sortedArr.forEach((el) => {
      const {
        category, word, translation, train, correct, wrong,
      } = el;

      let newPercent = (wrong / (correct + wrong)) * 100;
      newPercent = Math.floor(newPercent) || 0;
      el.percent = newPercent;

      const row = create('tr');
      row.innerHTML = `<td>${category}</td>
      <td>${word}</td>
      <td>${translation}</td>
      <td>${train}</td>
      <td>${correct}</td>
      <td>${wrong}</td>
      <td>${newPercent}%</td> `;

      this.cardsContainer.appendChild(row);
    });
  }

  deleteCells() {
    const tableRows = [...this.cardsContainer.children];
    tableRows.forEach((el) => {
      if (!el.classList.contains('statistics__heading')) {
        this.cardsContainer.removeChild(el);
      }
    });
  }

  takeDifficultWords() {
    const words = [...this.wordsArray];

    const percentsArray = words.map((el) => {
      const {
        category, word, percent,
      } = el;

      return {
        category, word, percent,
      };
    });

    const percentsFilteredArray = percentsArray.filter((el) => el.percent !== 0);
    percentsFilteredArray.sort((a, b) => {
      if (a.percent > b.percent) {
        return -1;
      }
      return 1;
    });

    this.difficultWords = percentsFilteredArray.length > 10 ? percentsFilteredArray.slice(0, 10)
      : [...percentsFilteredArray];

    console.log(this.difficultWords);
  }

  clearStatistics = () => {
    const statistic = localStorage.getItem(constants.STATISTICS);

    if (statistic) {
      localStorage.removeItem(constants.STATISTICS);
    }

    this.wordsArray = [];
    this.difficultWords = [];

    this.saveToStorage();
    this.deleteCells();
    this.renderCells(this.wordsArray);
  }
}
