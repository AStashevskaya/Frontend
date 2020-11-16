
const rowsOrder = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'],
    ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft',  'ArrowRight', 'ControlRight'],
  ];
  function getLang(){
    let lang = localStorage.getItem('lang')
    return lang ? 'ru' : 'en'
  }
  const lang = getLang()

const keyboard = new Keyboard(rowsOrder).init(lang).generateLayout()
const btn = document.getElementsByTagName('button')
document.addEventListener('click', (e) => {
  if(e.target.dataset.on){
      e.preventDefault()
document.querySelector('.keyboard').classList.toggle('keyboard_active')
  }
})