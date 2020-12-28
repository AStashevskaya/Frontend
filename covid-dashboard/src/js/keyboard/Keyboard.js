/* eslint-disable no-multi-assign */
import create from '../utils/create';
import language from '../data/layouts';
import Key from './key';

export default class Keyboard {
  constructor(search, rowsOrder) {
    this.search = search;
    this.rowsOrder = rowsOrder;
  }

  init(lang) {
    this.keyBase = language[lang];
    this.container = create('div', 'keyboard');
    document.body.appendChild(this.container);
    this.container.dataset.language = lang;
    return this;
  }

  generateLayout() {
    this.keyButtons = [];
    this.rowsOrder.forEach((row, ind) => {
      const rowElement = create('div', 'keyboard__row', null, this.container, ['row', ind + 1]);
      rowElement.dataset.row = ind + 1;
      this.container.appendChild(rowElement);
      rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`;
      row.forEach((code) => {
        const keyObj = this.keyBase.find((key) => code === key.code);
        if (keyObj) {
          const keyBtn = new Key(keyObj);
          this.keyButtons.push(keyBtn);
          rowElement.appendChild(keyBtn.wrap);
        }
      });
    });

    document.addEventListener('keydown', this.handlerEvent);
    document.addEventListener('keyup', this.handlerEvent);
    this.container.addEventListener('mousedown', this.prehandler);
    this.container.addEventListener('mouseup', this.prehandler);
  }

    prehandler = (e) => {
      const parent = e.target.parentNode;
      const code = e.target.parentNode.dataset.code || parent.parentNode.dataset.code;
      this.handlerEvent({ code, type: e.type });
    }

    handlerEvent = (e) => {
      // if (e.stopPropagation) e.stopPropagation()
      const { type, code } = e;
      const keyObj = this.keyButtons.find((key) => key.code === code);
      if (!keyObj) return;
      this.search.searchInput.focus();

      if (type === 'keydown' || type === 'mousedown') {
        if (type === 'keydown') e.preventDefault();
        if (type === 'keydown' || type === 'mousedown') {
          keyObj.wrap.classList.add('active');

          if (code.match(/Control/)) this.ctrlKey = true;
          if (code.match(/Shift/)) {
            this.shiftKey = true;
            this.changeUpperCase();
          }

          if (code === 'CapsLock' && !this.capsKey) {
            this.capsKey = true;
            this.changeUpperCase();
          } else if (code === 'CapsLock' && this.capsKey) {
            this.capsKey = false;
            keyObj.wrap.classList.remove('active');
            this.changeUpperCase();
          }

          if (!this.capsKey) {
            this.printToOutput(keyObj, this.shiftKey ? keyObj.shift : keyObj.small);
          } else if (this.capsKey) {
            if (this.shiftKey) {
              this.printToOutput(keyObj, keyObj.small);
            } else {
              this.printToOutput(keyObj, keyObj.shift);
            }
          }
          // switch lang
          if (code === 'Tab') this.switchLanguage();
          if (code.match(/Control/) && this.shiftKey) this.switchLanguage();
          if (code.match(/Shift/) && this.ctrlKey) this.switchLanguage();
        }
      } else if (type === 'keyup' || type === 'mouseup') {
        if (code === 'CapsLock' || code === 'AltRight' || code === 'MetaLeft') return;
        keyObj.wrap.classList.remove('active');
        if (code.match(/Control/)) this.ctrlKey = false;
        if (code.match(/Shift/)) {
          this.shiftKey = false;
          this.changeUpperCase();
        }
      }
    }

    switchLanguage() {
      const langArr = Object.keys(language);
      let currentLangInd = langArr.indexOf(this.container.dataset.language);
      this.keyBase = currentLangInd + 1 < langArr.length
        ? language[langArr[currentLangInd += 1]]
        : language[langArr[currentLangInd -= currentLangInd]];
      this.container.dataset.language = langArr[currentLangInd];
      localStorage.setItem('lang', langArr[currentLangInd]);

      this.keyButtons.forEach((button) => {
        const btn = this.keyBase.find((el) => el.code === button.code);
        if (!btn) return;
        button.small = btn.small;
        button.shift = btn.shift;

        if (button.shift && button.shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/)) {
          button.sub.innerHTML = button.shift;
        } else {
          button.sub.innerHTML = '';
        }
        button.letter.innerHTML = button.small;
      });
      this.changeUpperCase();
    }

    changeUpperCase() {
      const changeButtonsArr = this.keyButtons.filter((el) => el.small.length < 2);
      if (this.capsKey) {
        if (this.shiftKey) {
          changeButtonsArr.forEach((el) => {
            if (el.sub.innerHTML) {
              if (el.sub.classList.contains('sub-active') && el.letter.classList.contains('sub-inactive')) {
                el.sub.classList.remove('sub-active');
                el.letter.classList.remove('sub-inactive');
              }
              el.sub.classList.add('sub-inactive');
              el.letter.classList.add('sub-active');
            } else {
              el.letter.innerHTML = el.small;
            }
          });
        } else {
          changeButtonsArr.forEach((el) => {
            if (el.sub.innerHTML) {
              if (el.sub.classList.contains('sub-inactive') && el.letter.classList.contains('sub-active')) {
                el.sub.classList.remove('sub-inactive');
                el.letter.classList.remove('sub-active');
              }
              el.sub.classList.add('sub-active');
              el.letter.classList.add('sub-inactive');
            } else {
              el.letter.innerHTML = el.shift;
            }
          });
        }
      } else if (this.shiftKey) {
        changeButtonsArr.forEach((el) => {
          if (el.sub.innerHTML) {
            if (el.sub.classList.contains('sub-inactive') && el.letter.classList.contains('sub-active')) {
              el.sub.classList.remove('sub-inactive');
              el.letter.classList.remove('sub-active');
            }
            el.sub.classList.add('sub-active');
            el.letter.classList.add('sub-inactive');
          } else {
            el.letter.innerHTML = el.shift;
          }
        });
      } else {
        changeButtonsArr.forEach((el) => {
          if (el.sub.innerHTML) {
            if (el.sub.classList.contains('sub-active') && el.letter.classList.contains('sub-inactive')) {
              el.sub.classList.remove('sub-active');
              el.letter.classList.remove('sub-inactive');
            }
            el.sub.classList.add('sub-inactive');
            el.letter.classList.add('sub-active');
          } else {
            el.letter.innerHTML = el.small;
          }
        });
      }
    }

    printToOutput(keyObj, smbl) {
      let cursorPosition = this.search.searchInput.selectionStart;
      let left = this.search.searchInput.value.slice(0, cursorPosition);
      const right = this.search.searchInput.value.slice(cursorPosition);

      const fnButtonsMethods = {
        Space: () => {
          this.search.searchInput.value = `${left} ${right}`;
          cursorPosition += 1;
        },
        ArrowLeft: () => {
          cursorPosition = cursorPosition - 1 >= 0 ? cursorPosition - 1 : 0;
        },
        ArrowRight: () => {
          cursorPosition += 1;
        },
        ArrowUp: () => {

        },
        ArrowDown: () => {

        },
        Backspace: () => {
          this.search.searchInput.value = `${left.slice(0, -1)}${right}`;
          cursorPosition -= 1;
        },
        Enter: () => {
          this.search.searchInput.value = `${left}\n${right}`;
          cursorPosition += 1;
        },
        Delete: () => {
          this.search.searchInput.value = `${left}${right.slice(0, 1)}`;
        },
      };
      const arrComands = Object.keys(fnButtonsMethods);
      if (arrComands.find((el) => el === keyObj.code)) {
        fnButtonsMethods[keyObj.code]();
      } else {
        if (!smbl || smbl.match(/Alt|Ctrl|Caps|En|Ru|Shift|Sound|mikr|Микр|span/)) return;
        // eslint-disable-next-line no-multi-assign
        // eslint-disable-next-line no-param-reassign
        this.search.searchInput.value = `${left += smbl += right}`;
        cursorPosition += 1;
      }
      this.search.searchInput.setSelectionRange(cursorPosition, cursorPosition);
      this.search.search();
    }
}
