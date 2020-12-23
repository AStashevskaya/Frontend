import create from './utils/create';
// import * as constants from './utils/constants';
import MapWrapper from './MapWrapper';

export default class Layout {
  constructor() {
    this.container = create('div', 'container');
    this.indicator = 'cases';
    this.data = [];

    this.init();
  }

  init() {
    this.mapWrap = new MapWrapper(this);
    this.generateLayout();
  }

  generateLayout() {
    this.mapWrap.init();
  }
}
