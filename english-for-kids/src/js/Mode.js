import categories from './data/categories';
import * as constants from './utils/constants';
import Layout from './Layout';

export default class Mode {
  constructor() {
    this.mode = constants.STATE_TRAIN;
    this.layout = new Layout(this.mode, categories);
    this.indicator = document.querySelector('input');

    this.initClickEvents();
  }

  initClickEvents() {
    const switcher = document.querySelector('.switch');
    switcher.addEventListener('click', this.checkMode.bind(this));
  }

  checkMode() {
    // eslint-disable-next-line no-console
    console.log(this.indicator);
    if (!this.indicator.checked) {
      this.mode = constants.STATE_TRAIN;
      this.layout.changeLayout(this.mode);
      // eslint-disable-next-line no-console
      console.log('to train');
    } else {
      this.mode = constants.STATE_PLAY;
      this.layout.changeLayout(this.mode);
      // eslint-disable-next-line no-console
      console.log('to play');
    }
  }
}
