import create from './utils/create';
import * as constants from './utils/constants';
import MapWrapper from './MapWrapper';
import SearchTable from './SearchTable';
import Table from './Table';
import UpdateBoard from './UpdateBoard';
import ChartWrap from './ChartWrap';

export default class Layout {
  constructor() {
    this.container = create('div', 'container');
    this.header = create('header');
    this.footer = create('footer');
    this.main = create('main');

    this.selectedPeriod = constants.TOTAL;
    this.selectedCase = constants.ALL_CASES;
    this.selectedValue = constants.ABSOLUTE;
    this.focusedCountry = null;
    this.data = [];
    this.header.innerHTML = 'COVID-19 DASHBOARD';
    this.footer.innerHTML = ' <a href="https://github.com/AStashevskaya">https://github.com/AStashevskaya</a><span class="devYear">2020</span><a href="https://rs.school/js/" class="logo"><img src="./assets/rs_school_js.svg" alt="logo"></a>';
    this.init();
  }

  init() {
    this.main.appendChild(this.container);

    document.body.appendChild(this.header);
    document.body.appendChild(this.main);
    document.body.appendChild(this.footer);

    this.board = new UpdateBoard(this);
    this.mapWrap = new MapWrapper(this);
    this.searchTable = new SearchTable(this);
    this.table = new Table(this);
    this.chart = new ChartWrap(this);
    this.generateLayout();
  }

  generateLayout() {
    this.table.init();
    this.searchTable.init();
    this.mapWrap.init();
    this.board.init();
    this.chart.init();
    this.outlineSelectors();
  }

  outlineSelectors() {
    const values = [...document.querySelectorAll(`[data-value='${this.selectedValue}']`)];
    values.forEach((el) => {
      const link = el.closest('.subMenu__item');
      link.classList.add('activeLink');
    });

    const periods = [...document.querySelectorAll(`[data-period='${this.selectedPeriod}']`)];
    periods.forEach((el) => {
      const link = el.closest('.subMenu__item');
      link.classList.add('activeLink');
    });

    const cases = [...document.querySelectorAll(`[data-cases='${this.selectedCase}']`)];
    cases.forEach((el) => {
      const link = el.closest('.subMenu__item');
      link.classList.add('activeLink');
    });
  }

  update() {
    this.updateSwitchers();
    this.mapWrap.update();
    this.table.update();
    this.searchTable.update();
    this.chart.update();
  }

  updateSwitchers() {
    const alctiveLinks = [...document.querySelectorAll('.activeLink')];
    alctiveLinks.forEach((el) => el.classList.remove('activeLink'));
    this.outlineSelectors();
  }
}
