
class Key {
    constructor({ small, shift, code }){
        this.small = small
        this.shift =  shift
        this.code = code
        this.isFnKey = Boolean(small.match(/Ctrl|arr|Alt|Shift|Tab|Back|Del|Enter|Caps|En|Ru|MetaLeft/));
        // this.isFnKey = this.small.length > 1 ? true : false

//мы создаем саб - это то что например на цифрах сверху, то есть то что у нас будет отражаться при замене клавиши на шифт
        if(shift && shift.match(/[^a-zA-Zа-яА-ЯЁё0-9]/)){
            this.sub = create('div', 'sub', this.shift )
        } else {
            //если при нажатии на шифт клавиша переключается на большую букву
            this.sub = create('div', 'sub', '')
        }
        // создвем букву
        this.letter = create('div', 'letter', this.small)
        // обертываем букву и сабс в обертку и делаем из этого единый элемент -клавишу
        this.wrap = create('div', 'keyboard__key', [this.sub, this.letter], null, ['code', this.code],  this.isFnKey ? ['fn', 'true'] : ['fn', 'false'])
    }
}