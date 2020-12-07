import create from './utils/create';
import * as constants from './utils/constants';

export default class Switcher {
  constructor(layout) {
    this.layout = layout;
    this.container = create('div', 'switcher-container');
    this.indicator = null;

    this.init();
  }

  init() {
    this.render();
    this.initClickEvents();

    this.indicator = document.querySelector('input');
  }

  initClickEvents() {
    const switcher = document.querySelector('.switch');
    switcher.addEventListener('mousedown', this.checkMode);
  }

  render() {
    this.container.innerHTML = `<span id="train" class="switcher__mode">${constants.STATE_TRAIN}</span>
      <label class="switch">
        <input type="checkbox" name="mode" role="switch">
        <span class="switcher__identificator"></span>
      </label>
      <span id="play" class="switcher__mode">${constants.STATE_PLAY}</span>`;

    const header = document.querySelector('.header-container');
    header.appendChild(this.container);
  }

  checkMode = () => {
    if (this.indicator.checked) {
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
