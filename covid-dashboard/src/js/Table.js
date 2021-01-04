/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import create from './utils/create';
// import makeTodaykey from './utils/makeTodayKey';
import countPer100 from './utils/getNumbersPer100';
// import capitalize from './utils/capitalize';
import round from './utils/roundNumber';
import CovidApi from './CovidApi';
import Switcher from './Switcher';
import FullScreenBtn from './FullScreenBtn';
import * as constants from './utils/constants';

export default class Table {
  constructor(layout) {
    this.layout = layout;
    this.container = create('div', 'InfoTable');
    this.tablesWrapper = create('div', 'table__wrapper');
    this.generalTable = create('div', 'table__general-info');
    this.casesTable = create('div', 'table__cases-info');
    // this.globalTable = create('div', 'table__global');
    // this.countryTable = create('div', 'table__country');
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

    this.renderTable();
    // this.globalTable.innerHTML = this.renderGlobal();
    // this.countryTable.innerHTML = this.renderCountry(this.layout.focusedCountry);

    this.tablesWrapper.appendChild(this.generalTable);
    this.tablesWrapper.appendChild(this.casesTable);
    // this.tablesWrapper.appendChild(this.globalTable);
    // this.tablesWrapper.appendChild(this.countryTable);

    this.container.appendChild(this.headerContainer);
    this.container.appendChild(this.tablesWrapper);
    // this.layout.leftWrap.appendChild(this.container);
    this.layout.container.appendChild(this.container);

    this.initClicks();
  }

  initClicks() {
    this.switcher.initializeClicks();
    this.fullScreenBtn.initializeClicks();
  }

  update() {
    this.renderTable();
    // console.log(this.layout.focusedCountry, this.CountriesData);
    // const country = this.CountriesData.find((el) => el.country === this.layout.focusedCountry);
    // this.globalTable.innerHTML = this.renderGlobal();
    // this.countryTable.innerHTML = this.renderCountry(country);
  }

  renderTable() {
    const period = this.layout.selectedPeriod;
    const value = this.layout.selectedValue;
    const country = this.CountriesData.find((el) => el.country === this.layout.focusedCountry);

    if (country) {
      this.generalTable.innerHTML = this.renderGeneralTable(country);
      this.casesTable.innerHTML = this.renderCasesTable(period, value, country);
    } else {
      this.generalTable.innerHTML = this.renderGeneralTable();
      this.casesTable.innerHTML = this.renderCasesTable(period, value);
    }
  }

  renderGeneralTable(country = this.data) {
    return `
  <div class="general-info__flag">
  <img src="${this.layout.focusedCountry ? country.countryInfo.flag
    : 'https://vectorflags.s3-us-west-2.amazonaws.com/flags/org-un-flag-01.png'}" alt="world-flag">
  </div>
  <div class="general-info__name">
    ${this.layout.focusedCountry ? country.country : 'Global'}
  </div>
  <div class="general-info__population"><p>
  <span>Population:</span><span>${round(country.population)}</span>
  </p>
  </div>`;
  }

  renderCasesTable(period, value, country = this.data) {
    if (value === constants.ABSOLUTE) {
      return `
    <div class="cases-info__value">
    ${period}/${value}
    </div>
    <div class="cases-info__case">
      <p>Confirmed:  
      <span class="cases">
      ${period === constants.TODAY ? round(country.todayCases) : round(country.cases)}
      </span></p>
    </div>
    <div class="cases-info__case">
      <p><span>Recovered:  </span><span class="recovered">
      ${period === constants.TODAY ? round(country.todayRecovered) : round(country.recovered)}
      </span></p>
    </div>
    <div class="cases-info__case">
      <p><span>Deaths: </span> <span class="deaths">
      ${period === constants.TODAY ? round(country.todayDeaths) : round(country.deaths)}
      </span></p>
    </div>`;
    }

    return `
    <div class="cases-info__value">
    ${period}/${value}
    </div>
    <div class="cases-info__case">
      <p><span>Confirmed:</span> 
      <span class="cases">
      ${period === constants.TODAY ? countPer100(country, constants.TODAY_CASES)
    : countPer100(country, constants.ALL_CASES)}
      </span></p>
    </div>
    <div class="cases-info__case">
      <p><span>Recovered:</span><span class="recovered"> 
      ${period === constants.TODAY ? countPer100(country, constants.TODAY_RECOVERED)
    : countPer100(country, constants.ALL_RECOVERED)}
      </span></p>
    </div>
    <div class="cases-info__case">
      <p><span>Deaths:</span><span class="deaths">
      ${period === constants.TODAY ? countPer100(country, constants.TODAY_DEATHS)
    : countPer100(country, constants.ALL_DEATHS)}
      </span></p>
    </div>
  `;
  }
}
