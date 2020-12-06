import create from './utils/create';
import WordStatistic from './WordStatisticComponent';
import * as constants from './utils/constants';
// import * as constants from './utils/constants';

export default class Statistic {
  constructor(layout) {
    this.layout = layout;
    this.categories = [...layout.categoriesComponents];
    this.wordsArray = [];

    this.init();
  }

  init() {
    // this.categories = [...this.layout.categories];
    this.getfromStorage();
    // this.render();
  }

  render() {
    this.getfromStorage();

    const table = create('table', 'statistics__table');
    const cardsContainer = create('tbody');

    const heading = create('tr', 'statistics__heading');
    heading.innerHTML = `<td>Category</td>
    <td>word</td>
    <td>translation</td>
    <td>train</td>
    <td>correct</td>
    <td>incorrect</td>
    <td>%</td>`;
    cardsContainer.appendChild(heading);

    this.wordsArray.forEach((word) => {
      const percent = (word.correctClick / (word.correctClick + word.wrongClick)) * 100;
      const row = create('tr');
      row.innerHTML = `<td>${word.category}</td>
      <td>${word.english}</td>
      <td>${word.russian}</td>
      <td>${word.trainClick}</td>
      <td>${word.correctClick}</td>
      <td>${word.wrongClick}</td>
      <td>${percent}%</td> `;

      cardsContainer.appendChild(row);
    });

    table.appendChild(cardsContainer);

    return table;
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
}
