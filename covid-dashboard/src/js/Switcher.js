/* eslint-disable no-console */
import create from './utils/create';
import * as constants from './utils/constants';

export default class Switcher {
  constructor(parent, name) {
    this.component = parent;
    this.name = name;
    this.container = create('div', `${this.name}__selector-wrapper`);

    this.generateSelectors();
  }

  init() {
    this.generateSelectors();
    this.initializeClicks();
  }

  generateSelectors() {
    this.container.innerHTML = `<ul class="selector__menu">
      <li class="menu__item"><span class="menu__link" data-selector='${this.name}' data-type='period'>Period</span>
        <ul class="selector__subMenu" data-period='menu' data-component='${this.name}' id='${this.name}Period'>
          <li class="subMenu__item"><span class="subMenu__link" data-period='${constants.TODAY}'>For today</span></li>
          <li class="subMenu__item"><span class="subMenu__link" data-period='${constants.TOTAL}'>For all time</span></li>
        </ul>
      </li>
      <li class="menu__item"><span class="menu__link" data-selector='${this.name}' data-type='cases' >Cases</span>
        <ul class="selector__subMenu" data-cases='menu' data-component='${this.name}' id='${this.name}Cases'>
          <li class="subMenu__item"><span class="subMenu__link" data-cases='${constants.ALL_CASES}'>Confirmed</span></li>
          <li class="subMenu__item"><span class="subMenu__link" data-cases='${constants.ALL_RECOVERED}'>Recovered</span></li>
          <li class="subMenu__item"><span class="subMenu__link" data-cases='${constants.ALL_DEATHS}'>Deaths</span></li>
        </ul>
      </li>
      <li class="menu__item"><span class="menu__link" data-selector='${this.name}' data-type='value' >Value</span>
        <ul class="selector__subMenu" data-value='menu' data-component='${this.name}' id='${this.name}Value'>
          <li class="subMenu__item"><span class="subMenu__link" data-value='${constants.ABSOLUTE}'>Absolute</span></li>
          <li class="subMenu__item"><span class="subMenu__link" data-value='${constants.PER_100}'>Per 100k population</span></li>
        </ul>
      </li>
    </ul>`;

    if (document.querySelector(`.${this.name}__selector-wrapper`)) return;

    this.component.headerContainer.appendChild(this.container);
  }

  initializeClicks() {
    const links = document.querySelectorAll(`[data-selector='${this.name}']`);
    links.forEach((el) => el.addEventListener('mouseover', this.openSelector));

    const subMenus = [...document.querySelectorAll('.selector__subMenu')];
    subMenus.forEach((el) => el.addEventListener('mouseleave', this.closeSelector));

    const type = document.getElementById(`${this.name}Period`);
    type.addEventListener('click', this.getSelectedPeriod);

    const value = document.getElementById(`${this.name}Value`);
    value.addEventListener('click', this.getSelectedValue);

    const cases = document.getElementById(`${this.name}Cases`);
    cases.addEventListener('click', this.getSelectedCase);
  }

  openSelector = (e) => {
    const linkType = e.target.dataset.type;

    const menues = [...document.querySelectorAll('.selector__subMenu')];
    menues.forEach((el) => {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    });

    const links = [...document.querySelectorAll(`[data-${linkType}='menu']`)];
    this.activeLink = links.find((el) => el.dataset.component === this.name);
    this.activeLink.classList.add('active');
  }

  closeSelector = (e) => {
    const link = e.target.closest('.selector__subMenu');
    link.classList.remove('active');
  }

  getSelectedPeriod = (e) => {
    const updated = e.target.dataset.period;

    if (this.component.layout.selectedPeriod === updated) return;

    this.component.layout.selectedPeriod = updated;
    this.activeLink.classList.toggle('active');
    this.component.layout.update();
  }

getSelectedCase = (e) => {
  const updated = e.target.dataset.cases;

  if (this.component.layout.selectedCase === updated) return;

  this.component.layout.selectedCase = updated;
  this.activeLink.classList.toggle('active');
  this.component.layout.update();
}

getSelectedValue = (e) => {
  const updated = e.target.dataset.value;

  if (this.component.layout.selectedValue === updated) return;

  this.component.layout.selectedValue = updated;
  this.activeLink.classList.toggle('active');
  this.component.layout.update();
}
}
