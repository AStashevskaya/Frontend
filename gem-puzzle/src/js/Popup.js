import create from './utils/create';
import addZero from './utils/addZero';
import { ANIMATION_DURATION } from './utils/constants';

export default class Modal {
  constructor(gamefield) {
    this.gamefield = gamefield;
    this.closing = false;
    this.init();
  }

  init() {
    this.renderModal();
  }

  renderModal() {
    this.modal = create('div', 'modal');
    this.layout = create('div', 'modal__overlay');
    this.modalWrapper = create('div', 'modal__window');
    document.body.appendChild(this.modal);
    this.modal.appendChild(this.layout);
    this.layout.setAttribute('id', 'close');
    this.modalWrapper.innerHTML = `  <div class="modal__header"><span  class="close_btn" id="close" data-close='true'>&times</span></div>
        <div class="modal__content"><span class="congrats">Congratulations!</span>
            <span class="congrats" id='solve-with'></span>
            <span class=" congrats question">Would you like to play one more game?</span>
            <div class="buttons__wrapper">
            <a href="#" class="modal__btn " data-reset='true'>Yes</a>
            <a href="#" class="modal__btn" id="close"  data-close='true'>No</a>
            </div>
        </div>`;
    this.layout.appendChild(this.modalWrapper);
  }

  open() {
    if (this.closing) return;

    this.modal.classList.add('open');
    document.getElementById('solve-with').innerText = `You solve puzzle in ${addZero(this.gamefield.settings.min)}:${addZero(this.gamefield.settings.sec)} with ${this.gamefield.moves} moves`;
    clearInterval(this.gamefield.settings.progressIdentifier);

    if (document.body.classList.contains('modal-close')) {
      document.body.classList.remove('modal-close');
    }

    document.body.classList.add('modal-open');
  }

  close() {
    this.closing = true;

    this.modal.classList.remove('open');
    this.modal.classList.add('hide');

    setTimeout(() => {
      this.modal.classList.remove('hide');
      this.closing = false;

      if (document.body.classList.contains('modal-open')) {
        document.body.classList.remove('modal-open');
      }

      document.body.classList.add('modal-close');
    }, ANIMATION_DURATION);
  }
}
