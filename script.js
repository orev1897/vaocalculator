const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
	calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})



let prevNumber = ''
let calculationOperator =''
let currentNumber ='0'

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number
	} else {
		currentNumber += number
	}
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value)
	})
})

const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = currentNumber
	}
	calculationOperator = operator
	currentNumber ='0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
	calculate()
	updateScreen(currentNumber)
})
	
	
const calculate = () => {
	let result = ''
	switch(calculationOperator) {
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case "-":
			result = parseFloat(prevNumber) - parseFloat(currentNumber)
			break
		case "*":
			result = parseFloat(prevNumber) * parseFloat(currentNumber)
			break
		case "/":
			result = parseFloat(prevNumber) / parseFloat(currentNumber)
			break
		default:
			return
	}
	currentNumber = result
	calculationOperator =  ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
	clearAll()
	updateScreen(currentNumber)
	//console.log('AC button is pressed')
})

const clearAll = () => {
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
	//console.log(event.target.value)
})

inputDecimal = (dot) => {
	if (currentNumber.includes('.')) {
		return
	}
	currentNumber += dot
}

/*NodeList(10) [button.number, button.number, button.number, button.number, button.number, button.number, button.number, button.number, button.number, button.number.zero-btn]
0: button.number
1: button.number
2: button.number
3: button.number
4: button.number
5: button.number
6: button.number
7: button.number
8: button.number
9: button.number.zero-btn
length: 10 */
