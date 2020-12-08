import create from './utils/create';
import * as constants from './utils/constants';

export default class Menu {
  constructor(layout) {
    this.layout = layout;
    this.container = document.querySelector('.header__nav');
    this.buttonContainer = create('div', 'burger-menu');
    this.listContainer = create('div', 'menu-list');

    this.init();
  }

  init() {
    this.renderButton();
    this.renderList();
    this.render();
    this.initializeMenuClick();
  }

  render() {
    this.container.appendChild(this.buttonContainer);
    this.container.appendChild(this.listContainer);
  }

  renderButton() {
    const btn = create('div', 'burger-menu__btn');

    this.buttonContainer.appendChild(btn);
  }

  renderList() {
    let html = '';
    this.layout.categories.forEach((el) => {
      html += ` <li><a href="#" class="menu-list__link" data-category="${el.title}"><img src="./assets/images/${el.icon}" class="icon" alt="${el.title}">${el.title}</a></li>`;
    });

    const linkTOmain = create('li');
    linkTOmain.innerHTML = `<a href="#" class="menu-list__link menu-list__link_active" data-category="${constants.MAIN}"><img src="./assets/images/${constants.MAIN}.svg" class="icon" alt="${constants.MAIN}-page">Main page</a>`;

    const linkTOstaticticks = create('li');
    linkTOstaticticks.innerHTML = `<a href="#" class="menu-list__link" data-category="${constants.STATISTICS}"><img src="./assets/images/${constants.STATISTICS}.svg" class="icon" alt="${constants.STATISTICS}-page">Statistics</a>`;

    this.listContainer.innerHTML = html;
    this.listContainer.prepend(linkTOmain);
    this.listContainer.appendChild(linkTOstaticticks);
  }

  initializeMenuClick() {
    const menuLinks = [...document.querySelectorAll('.menu-list__link')];
    menuLinks.forEach((el) => el.addEventListener('click', this.layout.handleClickLink));

    this.buttonContainer.addEventListener('click', this.menuToggle);

    document.addEventListener('click', (e) => {
      // const menuList = document.querySelector('.menu-list');

      if (this.buttonContainer.classList.contains('open')) {
        if (e.target === this.listContainer) return;

        this.buttonContainer.classList.remove('open');
      }
    });
  }

  menuToggle = (e) => {
    e.stopPropagation();
    this.buttonContainer.classList.toggle('open');
  }

  static changeActiveMenuLink(currentPage) {
    const activeLink = document.querySelector('.menu-list__link_active');
    activeLink.classList.remove('menu-list__link_active');

    const newActiveLink = document.querySelector(`a[data-category="${currentPage.title || currentPage}"]`);
    newActiveLink.classList.add('menu-list__link_active');
  }
}
