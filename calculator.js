let operationButtons = ['add', 'subtract', 'multiply', 'divide'];
let operation = '';
let numberOne = '';
let inputNum = '0';
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
line1.innerText = inputNum;

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b == 0) {
        alert('Division by zero not allowed!');
        return a;
    } else {
        return a / b;
    };
};

function clear() {
    numberOne = '';
    inputNum = '0';
    operation = '';
    line1.innerText = '';
    line2.innerText = inputNum;
};

function operate(operator, a, b) {
    let parsedA;
    let parsedB;
    if (a.split('').some(x => x == '.')) {
        parsedA = parseFloat(a);
    } else {
        parsedA = parseInt(a);
    };
    if (b.split('').some(x => x == '.')) {
        parsedB = parseFloat(b);
    } else {
        parsedB = parseInt(b);
    };

    switch (operator) {
        case '+':
            return add(parsedA, parsedB);
        case '-':
            return subtract(parsedA, parsedB);
        case '*':
            return multiply(parsedA, parsedB);
        case '/':
            return divide(parsedA, parsedB);
    };
};

function parseOp(event) {
    if (operation == '') {
        numberOne = inputNum;
        operation = event.currentTarget.innerText;
        line1.innerText = `${numberOne} ${operation} `;
        inputNum = '0';
        line2.innerText = inputNum;
    } else {
        let result = operate(operation, numberOne, inputNum);
        numberOne = `${result}`;
        operation = event.currentTarget.innerText;
        line1.innerText = `${numberOne} ${operation} `;
        inputNum = '0';
        line2.innerText = inputNum;
    };
};

for (let i = 0; i < 10; i++) {
    var element = document.getElementById(`${i}`);
    element.addEventListener('click', () => {
        console.log(i);
        if (inputNum == '0') {
            inputNum = `${i}`;
        } else {
            inputNum = inputNum + `${i}`;
        };
        line2.innerText = inputNum;
    });
};

var element = document.getElementById(`clear`);
element.addEventListener('click', clear);

for (let i = 0; i < 4; i++) {
    var element = document.getElementById(operationButtons[i]);
    element.addEventListener('click', parseOp);
};
