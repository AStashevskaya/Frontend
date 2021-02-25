import create from './utils/create';

export default class FullScreenBtn {
  constructor(parent) {
    this.component = parent;
    this.container = create('button', 'btn__full-screen');
    this.html = '<img src="./assets/fullscreen.svg" alt="fullscreen">';

    this.generateLayout();
  }

  generateLayout() {
    this.container.innerHTML = this.html;
    this.component.headerContainer.appendChild(this.container);
    this.initializeClicks();
  }

  initializeClicks() {
    this.container.addEventListener('click', this.recize);
  }

  recize = () => {
    document.body.classList.toggle('no-scroll');
    this.component.container.classList.toggle('fullscreen');
  }
}
