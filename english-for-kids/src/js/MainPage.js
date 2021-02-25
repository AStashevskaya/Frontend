import * as constants from './utils/constants';

export default class MainPage {
  constructor(layout, words) {
    this.layout = layout;
    this.difficultWords = words;
    this.categories = [...this.layout.categories];
    this.cards = [];
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

  handleClickCategory = (e) => {
    const { target } = e;
    const card = target.closest('[data-category]');
    const clickedCategory = card.dataset.category;

    this.deleteCategories();

    const newCategory = this.layout.categoriesComponents.find((el) => el.title === clickedCategory);
    this.layout.currentPage = newCategory;
    this.layout.title.innerHTML = this.layout.currentPage.title;

    newCategory.init();
  }

  deleteCategories() {
    const categories = [...document.querySelectorAll('.category-card')];

    categories.forEach((el) => {
      el.removeEventListener('click', this.handleClickCategory);
      this.layout.contentContainer.removeChild(el);
    });
  }
}
