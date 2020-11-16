class Calculator{
constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.isCompution = false
    this.clear()
}
clear(){
    this.previousOperand = ''
    this.currentOperand = ''
    this.operation = undefined
    this.isCompution = false
}
appendNumber(number){
    if(number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}
chooseOperation(operation){
    // (operation === '-' && this.operation === undefined && this.currentOperand === '') ||
    if((this.currentOperand === '' && operation !== '-') || (this.currentOperand === '-' && operation === '-')) return
    if( operation === '-' && this.currentOperand === ''){
     return this.currentOperand = `-${this.currentOperand}` 
    }
    if(this.previousOperand !== ''){
        this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}
getDisplayNumber(number){
    const stringNumber = number.toString()
    //проверяем деление на ноль
    if (stringNumber === 'ERR'){
        this.previousOperand = ''
        this.operation = undefined
        return 'ERR'
    } else if (stringNumber === '-'){
        return '-'
    } 

    //создаем константу знаки перед точкой и знаки после точки, для того чтобы понимать есть ли у нас до точки что-либо
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const demicalDigits = stringNumber.split('.')[1]
    //создаем переменнуюб которую будем выводить на экран и проверяем
    let integerDisplay
    if(isNaN(integerDigits)){
        integerDisplay = '' 
    } else integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
    if (demicalDigits != null){
        return `${integerDisplay}.${demicalDigits}`
    } else {
        return integerDisplay}

}
updateDisplay(){
    this.currentOperandTextElement.innerHTML = this.getDisplayNumber(this.currentOperand)
    if (this.operation != null){
        this.previousOperandTextElement.innerHTML = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
        this.previousOperandTextElement.innerHTML = ''
    } 
}
compute(){
    let compution
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    // check if operands are numbers
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation){
        case '+':
            if(Math.abs(current) === 0.1 || Math.abs(prev) === 0.1){
            if (Math.abs(current) === 0.1 && prev !== 0.1){
                if(Number.isInteger(prev)){
                    compution = prev + current 
                } else{
                let arr = prev.toString().split('.')
                let fixLength = arr[1].length
                compution = current + prev
                Number.isInteger(compution) ? compution : compution = compution.toFixed(fixLength)
                }
                break
            } else {
                if(Number.isInteger(prev)){
                    compution = prev + current 
                } else{
                let arr = current.toString().split('.')
                let fixLength = arr[1].length
                compution = current + prev
                Number.isInteger(compution) ? compution : compution = compution.toFixed(fixLength)
                }
                break
            } 
            }
            compution = prev + current
        break;
        case '-':
            if(Math.abs(current) === 0.1 || Math.abs(prev) === 0.1){
                if (Math.abs(current) === 0.1 && prev !== 0.1){
                    if(Number.isInteger(prev)){
                        compution = prev - current 
                    } else{
                    let arr = prev.toString().split('.')
                    let fixLength = arr[1].length
                    compution = current - prev
                    Number.isInteger(compution) ? compution : compution = compution.toFixed(fixLength)
                    }
                    break
                } else {
                    if(Number.isInteger(prev)){
                        compution = prev - current 
                    } else{
                    let arr = current.toString().split('.')
                    let fixLength = arr[1].length
                    compution = current - prev
                    Number.isInteger(compution) ? compution : compution = compution.toFixed(fixLength)
                    }
                    break
                } 
                }
            compution = prev - current
        break;
        case '*':
            let float
            if(prev === 0.1 || prev === 0.3 || prev === 0.4 || prev === 0.2){
                float = prev * 10
                compution = float * current / 10
                break
            } else if (current === 0.1 || current === 0.2 || current === 0.3 || current === 0.4){
                float = current * 10
                compution = float * prev / 10
                break
            }
            compution = prev * current 
        break;
        case '^':
            compution = Math.pow(prev, current)
            Number.isInteger(compution) ? compution : c0mpution = compution.toFixed(7)
        break;
        case '÷':
            if(current === 0){
                console.log('Err')
                return this.currentOperand = 'ERR'
            } else 
            compution = (prev / current)
            if (!Number.isInteger(compution)){
                compution.toFixed(7)
            }
          
            break;
            default : return
    }
    this.operation = undefined
    this.previousOperand = ''
    this.currentOperand = compution
    this.isCompution = true
}
makeSqrtOperation(){
    if (this.currentOperand < 0) return this.currentOperand = 'ERR'
    this.currentOperand = Math.sqrt(this.currentOperand)
    if (!Number.isInteger(this.currentOperand)){
       this.currentOperand = this.currentOperand.toFixed(15)
    }

}
delete(){
    if(typeof(this.currentOperand) === 'number'){
        this.clear()
    }
    this.currentOperand = this.currentOperand.slice(0, -1)
}
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const sqrtButton = document.querySelector('[data-sqrt]')

const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(calculator.isCompution){
            calculator.clear()
        }
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay()
    })
})
allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})
equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})
sqrtButton.addEventListener('click', () => {
    calculator.makeSqrtOperation()
    calculator.updateDisplay()
})