import CategoryComponent from './CategoryComponent';

class DifficultWords extends CategoryComponent {
  constructor(layout, options) {
    super(layout, options);
    this.words = options.cards;
    this.categories = [...layout.categories];
    this.cards = [];

    this.generateCards();
  }

  generateCards() {
    if (this.words.length === 0) return;

    this.cards = this.words.map((el) => {
      const cardCategory = this.categories.find((category) => category.title === el.category);
      const card = cardCategory.cards.find((cardObj) => cardObj.english === el.word);
      return card;
    });
  }
}

export default DifficultWords;
