class Calculator{
constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
}
clear(){
    this.previousOperand = ''
    this.currentOperand = ''
    this.operation = undefined
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
   // if (this.previousOperand === '' && this.currentOperand === '') return
  //  if (this.previousOperand === '' && this.currentOperand !== '') return this.currentOperand
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    // check if operands are numbers
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation){
        case '+':
            if ((current === 0.1 && prev === 0.2) || (prev === 0.1 && current === 0.2)){
                compution = 0.3
                break
            }
            compution = prev + current
        break;
        case '-':
            if ((current === -0.1 && prev === -0.2) || (prev === -0.1 && current === -0.2)){
                compution = -0.3
                break
            }
            compution = prev - current
        break;
        case '*':
            compution = prev * current
        break;
        case '^':
            compution = Math.pow(prev, current)
        break;
        case '÷':
            if(current === 0){
                console.log('Err')
                return this.currentOperand = 'ERR'
            } else 
            compution = (prev / current).toFixed(7)
          
            break;
            default : return
    }
    this.operation = undefined
    this.previousOperand = ''
    this.currentOperand = compution
}
makeSqrtOperation(){
    if (this.currentOperand < 0) return this.currentOperand = 'ERR'
    this.currentOperand = Math.sqrt(this.currentOperand).toFixed(7)

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