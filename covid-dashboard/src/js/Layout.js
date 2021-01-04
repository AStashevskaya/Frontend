import create from './utils/create';
import * as constants from './utils/constants';
import MapWrapper from './MapWrapper';
import SearchTable from './SearchTable';
import Table from './Table';
import UpdateBoard from './UpdateBoard';
// import SliderCharts from './SliderCharts';
import ChartWrap from './ChartWrap';

export default class Layout {
  constructor() {
    this.container = create('div', 'container');
    this.header = create('header', 'header');
    this.footer = create('footer', 'footer');
    this.main = create('main');
    this.leftWrap = create('div', 'container__left');
    this.centerWrap = create('div', 'container__centered');
    this.rightWrap = create('div', 'container__right');

    this.selectedPeriod = constants.TOTAL;
    this.selectedCase = constants.ALL_CASES;
    this.selectedValue = constants.ABSOLUTE;
    this.focusedCountry = null;
    this.data = [];
    this.header.innerHTML = 'COVID-19 DASHBOARD';
    this.footer.innerHTML = '<div class="devs"><ul><li><a href="https://github.com/AStashevskaya">https://github.com/AStashevskaya</a></li><li><a href="https://github.com/Khakhlova">https://github.com/Khakhlova</a></li></ul></div><div class="devYear">2020</div><div class="rs-school"><div class="logo"></div><a href="https://rs.school/js/">Курс «JavaScript/Front-end»</a></div>';
    this.init();
  }

  init() {
    // this.container.appendChild(this.leftWrap);
    // this.container.appendChild(this.centerWrap);
    // this.container.appendChild(this.rightWrap);

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
  }

  update() {
    this.mapWrap.update();
    this.table.update();
    this.searchTable.update();
    this.chart.update();
  }
}
