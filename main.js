// create a class to make the calculator works

class Calculator {
    constructor(prevOperandTextElement, currentOperandTextElement){
        this.prevOperandTextElement = prevOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    //function clear
    clear(){
        this.currentOperand = "";
        this.prevOperand = "";
        this.operation = undefined;

    }
    //function delete
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }
    //function appendNumber
    appendNumber(number){
        if(number === "." && this.currentOperand.includes(".")) {return}
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }
    //function chooseOperation
    chooseOperation(operation){
        if(this.currentOperand === ""){return}
        if(this.prevOperand !== ''){
            this.compute()
        }
        this.operation = operation;
        this.prevOperand = this.currentOperand;
        this.currentOperand = '';

    }
    //function compute
    compute(){
        let computation;
        const prev = parseFloat(this.prevOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)){return}
        switch (this.operation) {
            case '+':
                computation = prev + current
                break;
            case '-':
                computation = prev - current
                break;
            case '*':
                computation = prev * current
                break;
            case '/':
                computation = prev / current
                break;
            default:
                return;
                        
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.prevOperand = "";

    }


    // getDisplay function
    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})

        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }

    }

        // function updateDisplay
        updateDisplay(){
            this.currentOperandTextElement.innerText =
            this.getDisplayNumber(this.currentOperand);
            if(this.operation != null){
                this.prevOperandTextElement.innerText =
                `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`
                ///
            } else {
                this.prevOperandTextElement.innerText = ""
            }
    
        }
}


let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator")
const equal = document.querySelector(".equal")
const clearAll = document.querySelector(".reset")
const del = document.querySelector(".del")
// const dot = document.querySelector(".point")
const prevOperandTextElement = document.querySelector(".prev")
const currentOperandTextElement = document.querySelector(".current")


// new calculator
const calculator = new Calculator(prevOperandTextElement, currentOperandTextElement);

//add eventListener to digits

digits.forEach(digit => {
    digit.addEventListener("click", () => {
        calculator.appendNumber(digit.dataset.value);
        calculator.updateDisplay()
    });
});

//operations
operators.forEach(operator => {
    operator.addEventListener("click", ()=> {
        calculator.chooseOperation(operator.dataset.value);
        calculator.updateDisplay()
    });
});
//add event to aqual
equal.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
});

//add event to delete
del.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
});
clearAll.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
})