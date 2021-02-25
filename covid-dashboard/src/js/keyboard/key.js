import create from '../utils/create';

export default class Key {
  constructor({ small, shift, code }) {
    this.small = small;
    this.shift = shift;
    this.code = code;
    this.isFnKey = Boolean(small.match(/Ctrl|arr|Alt|Shift|Tab|Back|Del|Enter|Caps|En|Ru|MetaLeft|span/));

    if (shift && shift.match(/[^a-zA-Zа-яА-ЯЁё0-9]/)) {
      this.sub = create('div', 'sub');
      this.sub.innerHTML = this.shift;
    } else {
      this.sub = create('div', 'sub');
    }

    this.letter = create('div', 'letter');
    this.letter.innerHTML = this.small;
    this.wrap = create('div', 'keyboard__key');
    this.wrap.appendChild(this.sub);
    this.wrap.appendChild(this.letter);
    this.wrap.dataset.code = this.code;
    this.wrap.dataset.fn = this.isFnKey ? 'true' : 'false';
  }
}
