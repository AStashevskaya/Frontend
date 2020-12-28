/* eslint-disable no-console */
import CovidApi from './CovidApi';
import Switcher from './Switcher';
import Keyboard from './keyboard/Keyboard';
import FullScreenBtn from './FullScreenBtn';
import create from './utils/create';
import getNumbersPer100 from './utils/getNumbersPer100';
import makeTodaykey from './utils/makeTodayKey';
import rowsOrder from './keyboard/rowsOrder';
import * as constants from './utils/constants';

import { features } from './data/countries.json';

export default class SearchTable {
  constructor(layout) {
    this.layout = layout;
    this.currentSearchLength = 0;
    this.container = create('div', 'searchTable');
    this.headerContainer = create('div', 'component-header');
    this.countriesContainer = create('div', 'country__wrapper');
  }

  init() {
    CovidApi.getEachCountryData().then((data) => {
      this.data = data;
    }).then(() => this.transformData(this.data))
      .then(() => this.generateLayout());
  }

  transformData(data) {
    const featureArr = [...features];
    const polygons = featureArr.map((el) => {
      const { geometry, id } = el;
      return { id, geometry };
    });
    this.countries = [...data];
    this.countries = this.countries.map((country) => {
      const id = country.countryInfo.iso3;
      const geo = polygons.find((element) => element.id === id);
      if (!geo) {
        return null;
      }

      const { geometry } = geo;
      country.geometry = geometry;
      return country;
    });
    this.countries = this.countries.filter((el) => el !== null);
  }

  generateLayout() {
    this.switcher = new Switcher(this, 'search');
    this.fullScreenBtn = new FullScreenBtn(this);

    let html = '';
    this.countries.forEach((el) => {
      html += this.renderCountry(el);
      return html;
    });
    this.countriesContainer.innerHTML = html;
    this.generateSearch();

    this.container.appendChild(this.headerContainer);
    this.container.appendChild(this.form);
    this.container.appendChild(this.countriesContainer);

    this.layout.container.appendChild(this.container);
    this.initClicks();
  }

  initClicks() {
    this.switcher.initializeClicks();
    this.fullScreenBtn.initializeClicks();

    const btn = document.querySelector('.btn');
    btn.addEventListener('click', this.toggleKeyboard);

    this.countriesContainer.addEventListener('click', this.handleCountryClick);
  }

  toggleKeyboard = () => {
    const keyboard = document.querySelector('.keyboard');
    keyboard.classList.toggle('keyboard_active');

    if (keyboard.classList.contains('keyboard_active')) {
      this.btn.innerHTML = `<span class="material-icons">
      keyboard_hide
      </span>`;
    } else {
      this.btn.innerHTML = `<span class="material-icons">
      keyboard
      </span>`;
    }
  }

  handleCountryClick = (e) => {
    this.layout.focusedCountry = e.target.dataset.country
      ? e.target.dataset.country : e.target.parentNode.dataset.country;

    this.layout.update();
  }

  generateSearch() {
    this.form = create('form', 'search__form');
    this.searchInput = create('input');
    this.btn = create('span', 'btn');
    this.btn.innerHTML = `<span class="material-icons">
    keyboard
    </span>`;
    this.keyboard = new Keyboard(this, rowsOrder).init('en').generateLayout();

    this.searchInput.setAttribute('id', 'search');
    this.searchInput.setAttribute('value', '');
    this.searchInput.setAttribute('placeholder', 'select country');
    this.searchInput.setAttribute('type', 'text');

    if (document.querySelector('.search__form')) return;

    this.form.appendChild(this.searchInput);
    this.form.appendChild(this.btn);
  }

  search() {
    const reg = new RegExp(`^${this.searchInput.value}`);
    this.sortedCountries = this.countries.filter((el) => {
      let { country } = el;
      country = country.toLowerCase();
      return country.match(reg);
    });

    let html = '';

    if (this.sortedCountries.length) {
      this.sortedCountries.forEach((el) => {
        html += this.renderCountry(el);
        return html;
      });
    } else {
      html = '<i>There is no country</i>';
    }
    this.countriesContainer.innerHTML = html;
  }

  renderCountry(country) {
    const value = this.layout.selectedPeriod === constants.TODAY
      ? makeTodaykey(this.layout.selectedCase) : this.layout.selectedCase;

    return `<div class="country__wrap" data-countryId='${country.countryInfo.iso3}' data-country='${country.country}'>
    <span class="country__name"> <img class="country__flag"src="${country.countryInfo.flag}" alt="${country.countryInfo.iso3}">${country.country}</span>
    <span class="country__number">${this.layout.selectedValue === constants.ABSOLUTE ? country[value] : getNumbersPer100(country, value)}</span>
            </div>`;
  }

  update() {
    this.sortByValues();
    this.countriesContainer.innerHTML = '';
    let html = '';
    this.countries.forEach((el) => {
      html += this.renderCountry(el);
      return html;
    });
    this.countriesContainer.innerHTML = html;
  }

  sortByValues() {
    const value = this.layout.selectedPeriod === constants.TODAY
      ? makeTodaykey(this.layout.selectedCase) : this.layout.selectedCase;

    if (this.layout.selectedValue === constants.ABSOLUTE) {
      this.countries.sort((a, b) => {
        if (a[value] > b[value]) return -1;
        return 1;
      });
      return;
    }

    if (this.layout.selectedValue === constants.PER_100) {
      this.countries.sort((a, b) => {
        const valueA = +getNumbersPer100(a, value);
        const valueB = +getNumbersPer100(b, value);
        if (valueA > valueB) return -1;
        return 1;
      });
    }
  }
}
