const main = create('main', '', create('button', 'btn', 'click Here', null, ['on', true]))
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
class Keyboard{
    constructor(rowsOrder){
        this.rowsOrder = rowsOrder 
    }

    init(lang){
        
        this.keyBase = language[lang]
        this.output = create('textarea', 'output', null, main, ['placeholder', 'type smth'], 
        ['cols', 50],
        ['rows', 5],
        ['autocheck', 'off'],
        ['spellcheck', false] )
        this.container = create('div', 'keyboard', null, main, ['language', lang] )
        document.body.prepend(main);
        return this
    }
    generateLayout(){
        this.keyButtons = []
        this.rowsOrder.forEach((row, ind) => {
            const rowElement = create('div', 'keyboard__row', null, this.container, ['row', ind+1])
            rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`
            row.forEach((code) => {
                const keyObj = this.keyBase.find(key => code === key.code)
                if(keyObj){
                    const keyBtn = new Key (keyObj)
                    this.keyButtons.push(keyBtn)
                    rowElement.appendChild(keyBtn.wrap)
                }
            })
        })

        document.addEventListener('keydown', this.handlerEvent)
        document.addEventListener('keyup', this.handlerEvent)
        this.container.addEventListener('mousedown',  this.prehandler)
        this.container.addEventListener('mouseup',  this.prehandler)
    }
    prehandler = (e) =>{
        console.log(e)
        const code = e.target.parentNode.dataset.code
        this.handlerEvent({code, type: e.type})
    }
    handlerEvent = (e) => {
        // if (e.stopPropagation) e.stopPropagation()
        const {type, code} = e
        const keyObj = this.keyButtons.find( key => key.code === code)
        if (!keyObj) return
        this.output.focus()

        if(type === 'keydown' || type === 'mousedown'){
            if(type === 'keydown') e.preventDefault()
            if(type === 'keydown' || type === 'mousedown'){
            keyObj.wrap.classList.add('active')

            // flags
            if (code.match(/Control/)) this.ctrlKey = true
            if (code.match(/Shift/)){
                this.shiftKey = true
                this.changeUpperCase()
            } 
            // flag Caps
            if(code === 'CapsLock' && !this.capsKey ){
                this.capsKey = true
                this.changeUpperCase()
            }  else if (code === 'CapsLock' && this.capsKey ){
                this.capsKey = false
                keyObj.wrap.classList.remove('active')
                this.changeUpperCase()
            } 
            // flag sound 
            if(code === 'AltRight' && !this.soundKey){
                this.soundKey = true
                keyObj.letter.textContent = 'Sound Off'   
            } else if (code === 'AltRight' && this.soundKey){
                this.soundKey = false
                keyObj.letter.textContent = 'Sound On'   
                keyObj.wrap.classList.remove('active')
            }
            // flag speach
            if (code === 'MetaLeft' && !this.speachKey){
                this.speachKey = true
                this.output.dataset.spellcheck = true
                this.soundRecognation(this.speachKey)
            } else if (code === 'MetaLeft' && this.speachKey){
                this.speachKey = false
                this.output.dataset.spellcheck = false
                this.soundRecognation(this.speachKey)
                keyObj.wrap.classList.remove('active')
            }
            if(this.soundKey){
                const audios = Array.from(document.querySelectorAll('audio'))
                let audio = audios.find(el => el.dataset.code === code) ||  audios.find(el => el.dataset.code === this.container.dataset.language)
                if(!audio)return
                audio.currentTime = 0
                audio.play()
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
            if (code === "Tab") this.switchLanguage()
            if (code.match(/Control/) && this.shiftKey ) this.switchLanguage()
            if (code.match(/Shift/) && this.ctrlKey) this.switchLanguage()
        }
        }else if (type === 'keyup' || type === 'mouseup'){
            if(code === 'CapsLock' || code === 'AltRight' || code === 'MetaLeft') return
            keyObj.wrap.classList.remove('active')
            if (code.match(/Control/)) this.ctrlKey = false
            if (code.match(/Shift/)){
                this.shiftKey = false
                this.changeUpperCase()
            } 
        }

   
    }
    switchLanguage(){
        const langArr = Object.keys(language)
        let currentLangInd = langArr.indexOf(this.container.dataset.language)
        this.keyBase = currentLangInd + 1 < langArr.length ? language[langArr[currentLangInd += 1]] : language[langArr[currentLangInd -= currentLangInd]]
        this.container.dataset.language = langArr[currentLangInd]
        localStorage.setItem('lang', langArr[currentLangInd])

        this.keyButtons.forEach(button =>{
            let btn = this.keyBase.find(el => el.code === button.code)
            if(!btn) return
            button.small = btn.small 
            button.shift = btn.shift

            if(button.shift && button.shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/)){
                button.sub.innerHTML = button.shift
            } else {
                button.sub.innerHTML = ''
            }
            if(button.small === 'Sound On' && this.soundKey){
                button.letter.innerHTML = 'Sound Off' 
            } else{
                 button.letter.innerHTML = button.small
            }
           
        })
        this.changeUpperCase()
    }
    changeUpperCase(){
        let changeButtonsArr = this.keyButtons.filter(el => el.small.length < 2)
        if(this.capsKey){
            if(this.shiftKey){
            changeButtonsArr.forEach(el => {
                if(el.sub.innerHTML){
                    if(el.sub.classList.contains('sub-active') && el.letter.classList.contains('sub-inactive')){
                        el.sub.classList.remove('sub-active')
                        el.letter.classList.remove('sub-inactive')
                    }
                    el.sub.classList.add('sub-inactive')
                    el.letter.classList.add('sub-active')
                }else{
                    el.letter.innerHTML = el.small
                }
            })
            } else {
                changeButtonsArr.forEach(el => {
                    if(el.sub.innerHTML){
                        if(el.sub.classList.contains('sub-inactive') && el.letter.classList.contains('sub-active')){
                            el.sub.classList.remove('sub-inactive')
                            el.letter.classList.remove('sub-active')
                        }
                        el.sub.classList.add('sub-active')
                        el.letter.classList.add('sub-inactive')
                    }else{
                        el.letter.innerHTML = el.shift
                    }
                })
            }
        } else {
            if(this.shiftKey){
                changeButtonsArr.forEach(el => {
                    if(el.sub.innerHTML){
                        if(el.sub.classList.contains('sub-inactive') && el.letter.classList.contains('sub-active')){
                            el.sub.classList.remove('sub-inactive')
                            el.letter.classList.remove('sub-active')
                        }
                        el.sub.classList.add('sub-active')
                        el.letter.classList.add('sub-inactive')
                    }else{
                        el.letter.innerHTML = el.shift
                    }
                })
            } else {
                changeButtonsArr.forEach(el => {
                    if(el.sub.innerHTML){
                        if(el.sub.classList.contains('sub-active') && el.letter.classList.contains('sub-inactive')){
                            el.sub.classList.remove('sub-active')
                            el.letter.classList.remove('sub-inactive')
                        }
                        el.sub.classList.add('sub-inactive')
                        el.letter.classList.add('sub-active')
                    }else{
                        el.letter.innerHTML = el.small
                    }
                })
            }
        }
    }
    printToOutput(keyObj, smbl){
        let cursorPosition = this.output.selectionStart
        let left = this.output.value.slice(0, cursorPosition)
        let right =this.output.value.slice(cursorPosition)

        const fnButtonsMethods = {
            'Space': ()=>{
                this.output.value = `${left} ${right}`
                cursorPosition +=1
            },
            'ArrowLeft': ()=>{
                cursorPosition = cursorPosition - 1 >= 0 ? cursorPosition- 1 : 0;
            },
            'ArrowRight': ()=>{
                cursorPosition += 1
            },
            'ArrowUp': ()=>{
                return
            },
            'ArrowDown': ()=>{
                return
            },
            'Backspace': ()=>{
               this.output.value = `${left.slice(0, -1)}${right}` 
               cursorPosition -=1
            },
            'Enter': ()=>{
                this.output.value = `${left}\n${right}`
                cursorPosition +=1
            },
            'Delete': () =>{
                this.output.value = `${left}${right.slice(0, 1)}`
            }
        }
        const arrComands = Object.keys(fnButtonsMethods)
        if(arrComands.find(el => el === keyObj.code)){
            fnButtonsMethods[keyObj.code]()
        } else {
            if(!smbl || smbl.match(/Alt|Ctrl|Caps|En|Ru|Shift|Sound|mikr|Микр/)) return
            this.output.value = `${left +=smbl +=right}` 
            cursorPosition +=1
        }
        this.output.setSelectionRange(cursorPosition, cursorPosition)
    }
    soundRecognation(on = true){

        const recognition = new SpeechRecognition()
        recognition.interimResults = true;
        recognition.lang = this.container.dataset.language === 'ru' ? 'ru-RU' : 'en-US'
        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
              .map(result => result[0])
              .map(result => result.transcript)
              .join('')
              console.log(transcript)
              this.output.value = transcript
            })
            if(on){
            recognition.addEventListener('end', recognition.start);
              recognition.start();   
            } else{
            recognition.removeEventListener('end', recognition.start);
            recognition.stop();    
            }  
    }
    
}