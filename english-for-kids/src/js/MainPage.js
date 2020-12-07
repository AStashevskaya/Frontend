// import CategoryComponent from './CategoryComponent';

/* eslint-disable no-console */
export default class MainPage {
  constructor(layout, words) {
    this.layout = layout;
    this.difficultWords = words;
    this.categories = [...this.layout.categories];
    this.cards = [];
  }

  initDifficultWordsPage() {
    if (this.words.length === 0) {
      console.log('no words');
    } else {
      this.cards = this.words.map((el) => {
        const cardCategory = this.categories.find((category) => category.title === el.category);
        const card = cardCategory.cards.find((cardObj) => cardObj.english === el.word);
        return card;
      });
    }

    const options = {};
    options.title = this.difficultWords;
    options.cards = this.cards;
    // new CategoryComponent(this.layout, options);
  }
}
