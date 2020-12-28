/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import create from './utils/create';
import makeTodaykey from './utils/makeTodayKey';
import getNumbersPer100 from './utils/getNumbersPer100';
import capitalize from './utils/capitalize';
import round from './utils/roundNumber';
import CovidApi from './CovidApi';
import Switcher from './Switcher';
import FullScreenBtn from './FullScreenBtn';
import * as constants from './utils/constants';

export default class Table {
  constructor(layout) {
    this.layout = layout;
    this.container = create('div', 'InfoTable');
    this.tablesWrapper = create('div', 'table__container');
    this.globalTable = create('div', 'table__global');
    this.countryTable = create('div', 'table__country');
    this.headerContainer = create('div', 'component-header');
  }

  init() {
    CovidApi.getUpdatedWorldData().then((data) => {
      this.data = data;
    }).then(() => CovidApi.getEachCountryData().then((data) => {
      this.CountriesData = data;
    })).then(() => this.generateLayout());
  }

  generateLayout() {
    this.switcher = new Switcher(this, 'table');
    this.fullScreenBtn = new FullScreenBtn(this);

    this.globalTable.innerHTML = this.renderGlobal();
    this.countryTable.innerHTML = this.renderCountry(this.layout.focusedCountry);

    this.tablesWrapper.appendChild(this.globalTable);
    this.tablesWrapper.appendChild(this.countryTable);

    this.container.appendChild(this.headerContainer);
    this.container.appendChild(this.tablesWrapper);
    this.layout.container.appendChild(this.container);

    this.initClicks();
  }

  initClicks() {
    this.switcher.initializeClicks();
    this.fullScreenBtn.initializeClicks();
  }

  renderGlobal() {
    if (this.layout.selectedValue === constants.ABSOLUTE) {
      return `<span class="table__type">${!this.layout.selectedPeriod === constants.TODAY ? 'Total' : 'Today'}</span>
      <span class="table__cases">Cases: <span class="cases">${!this.layout.selectedPeriod === constants.TODAY
    ? round(this.data.cases) : round(this.data.todayCases)}</span></span>
      <span class="table__recovered">Recovered: <span class="recovered">${!this.layout.selectedPeriod === constants.TODAY
    ? round(this.data.recovered) : round(this.data.todayRecovered)}</span></span>
      <span class="table__deaths">Deaths: <span class="deaths">${!this.layout.selectedPeriod === constants.TODAY
    ? round(this.data.deaths) : round(this.data.todayDeaths)}</span></span>`;
    }

    return `<span class="table__type">${!this.layout.selectedPeriod === constants.TODAY ? 'Total' : 'Today'}</span>
        <span class="table__cases">Cases: <span class="cases">${!this.layout.selectedPeriod === constants.TODAY
    ? getNumbersPer100(this.data, constants.ALL_CASES)
    : getNumbersPer100(this.data, constants.TODAY_CASES)}</span></span>
        <span class="table__recovered">Recovered: <span class="recovered">${!this.layout.selectedPeriod === constants.TODAY
    ? getNumbersPer100(this.data, constants.ALL_RECOVERED)
    : getNumbersPer100(this.data, constants.TODAY_RECOVERED)}</span></span>
        <span class="table__deaths">Deaths: <span class="deaths">${!this.layout.selectedPeriod === constants.TODAY
    ? getNumbersPer100(this.data, constants.ALL_DEATHS)
    : getNumbersPer100(this.data, constants.TODAY_DEATHS)}</span></span>`;
  }

  renderCountry(country) {
    if (country) {
      const value = this.layout.selectedPeriod === constants.TODAY
        ? makeTodaykey(this.layout.selectedCase) : this.layout.selectedCase;

      return ` <p class="table__type">${this.layout.selectedPeriod}</p>
      <p class="title"><i>Country</i>: ${country.country}</p>
      <p class="title"><i>${capitalize(this.layout.selectedCase)}</i>:<span class="${this.layout.selectedCase}">${this.layout.selectedValue === constants.ABSOLUTE
  ? round(country[value]) : getNumbersPer100(country, value)}</span></p>
        `;
    }
    return '<span>Select country, please</span>';
  }

  update() {
    console.log(this.layout.focusedCountry, this.CountriesData);
    const country = this.CountriesData.find((el) => el.country === this.layout.focusedCountry);
    this.globalTable.innerHTML = this.renderGlobal();
    this.countryTable.innerHTML = this.renderCountry(country);
  }
}
