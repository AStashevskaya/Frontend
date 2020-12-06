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

    this.table = create('table', 'statistics__table');
    this.heading = create('tr', 'statistics__heading');
    this.cardsContainer = create('tbody');

    this.init();
  }

  init() {
    // this.categories = [...this.layout.categories];
    this.getfromStorage();
    this.renderHeading();
    // this.render();
  }

  renderHeading() {
    const words = [...this.wordsArray];
    const wordObj = words[0];

    const wordsKeys = Object.keys(wordObj);
    wordsKeys.push('percent');

    wordsKeys.forEach((key) => {
      const word = key;
      const cell = create('td');
      cell.innerHTML = `<span class="statistics__cell-wrapper">
                        <span class="title">${uppercase(word)}</span><span class="statistics__buttons-wrapper" data-id="${word}">
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
  }

  render() {
    this.getfromStorage();

    this.renderCells(this.wordsArray);

    // this.wordsArray.forEach((word) => {
    //   let percent = (word.correct / (word.correct + word.wrong)) * 100;
    //   percent = Math.floor(percent) || 0;
    //   const row = create('tr');
    //   row.innerHTML = `<td>${word.category}</td>
    //   <td>${word.word}</td>
    //   <td>${word.translation}</td>
    //   <td>${word.train}</td>
    //   <td>${word.correct}</td>
    //   <td>${word.wrong}</td>
    //   <td>${percent}%</td> `;

    //   this.cardsContainer.appendChild(row);
    // });

    this.table.appendChild(this.cardsContainer);

    return this.table;
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
    this.sortedArr = [...arr];

    this.sortedArr.forEach((word) => {
      let percent = (word.correct / (word.correct + word.wrong)) * 100;
      percent = Math.floor(percent) || 0;
      const row = create('tr');
      row.innerHTML = `<td>${word.category}</td>
      <td>${word.word}</td>
      <td>${word.translation}</td>
      <td>${word.train}</td>
      <td>${word.correct}</td>
      <td>${word.wrong}</td>
      <td>${percent}%</td> `;

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
}
