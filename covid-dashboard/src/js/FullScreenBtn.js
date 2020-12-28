import create from './utils/create';

export default class FullScreenBtn {
  constructor(parent) {
    this.component = parent;
    this.container = create('button', 'btn__full-screen');
    this.html = `<span class="material-icons">
                open_in_full</span>`;

    this.generateLayout();
  }

  generateLayout() {
    this.container.innerHTML = this.html;
    this.component.headerContainer.appendChild(this.container);
  }

  initializeClicks() {
    // eslint-disable-next-line no-console
    console.log(this.component);
  }
}
