import create from './utils/create';
import * as constants from './utils/constants';

export default class Menu {
  constructor(layout) {
    this.layout = layout;
    this.container = document.querySelector('.menu-list');

    this.init();
  }

  init() {
    this.render();
    this.initializeMenuClick();
  }

  render() {
    let html = '';
    this.layout.categories.forEach((el) => {
      html += ` <li><a href="#" class="menu-list__link" data-category="${el.title}"><img src="./assets/images/${el.icon}" class="icon" alt="${el.title}">${el.title}</a></li>`;
    });

    const linkTOmain = create('li');
    linkTOmain.innerHTML = `<a href="#" class="menu-list__link menu-list__link_active" data-category="${constants.MAIN}"><img src="./assets/images/${constants.MAIN}.svg" class="icon" alt="${constants.MAIN}-page">Main page</a>`;

    const linkTOstaticticks = create('li');
    linkTOstaticticks.innerHTML = `<a href="#" class="menu-list__link" data-category="${constants.STATISTICS}"><img src="./assets/images/${constants.STATISTICS}.svg" class="icon" alt="${constants.STATISTICS}-page">Statistics</a>`;

    this.container.innerHTML = html;
    this.container.prepend(linkTOmain);
    this.container.appendChild(linkTOstaticticks);
  }

  initializeMenuClick() {
    const menuLinks = [...document.querySelectorAll('.menu-list__link')];
    menuLinks.forEach((el) => el.addEventListener('click', this.layout.handleClickLink));
  }

  static changeActiveMenuLink(currentPage) {
    const activeLink = document.querySelector('.menu-list__link_active');
    activeLink.classList.remove('menu-list__link_active');

    const newActiveLink = document.querySelector(`a[data-category="${currentPage.title || currentPage}"]`);
    newActiveLink.classList.add('menu-list__link_active');
  }
}
