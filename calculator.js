let operationButtons = ['add', 'subtract', 'multiply', 'divide'];
let operation = '';
let numberOne = '';
let inputNum = '0';
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
line2.innerText = inputNum;

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

function round10(number) {
    let usableNumber;
    if (typeof number == 'number') {
        usableNumber = number;
    } else if (number.split('').some(x => x == '.')) {
        usableNumber = parseFloat(number);
    } else {
        usableNumber = parseInt(number);
    };
    if ((usableNumber * 10000000000) % 1 > 0) {
        return Math.round(usableNumber * 10000000000) / 10000000000;
    } else {
        return usableNumber;
    };
};

function clear() {
    numberOne = '';
    inputNum = '0';
    operation = '';
    line1.innerText = '';
    line2.innerText = inputNum;
};

function numberButton(event) {
    if (inputNum == '0') {
        inputNum = event.currentTarget.innerText;
    } else {
        inputNum = inputNum + event.currentTarget.innerText;
    };
    line2.innerText = inputNum;
};

function decimal() {
    let arr1 = inputNum.split('');
    if (!arr1.some(x => x == '.')) {
        inputNum = inputNum + '.';
        line2.innerText = inputNum;
    };
};

function delNum() {
    if ((inputNum.length == 2) && (inputNum[0] == '-')) {
        inputNum = '0';
    } else if (inputNum.length == 1) {
        inputNum = '0';
    } else {
        inputNum = inputNum.slice(0, -1);
    };
    line2.innerText = inputNum;
};

function changeSign() {
    if (inputNum[0] == '-') {
        inputNum = inputNum.slice(1);
    } else {
        inputNum = '-' + inputNum;
    };
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

function parseEq(event) {
    if (operation == '') {
        return;
    } else {
        let result = operate(operation, numberOne, inputNum);
        line1.innerText = `${numberOne} ${operation} ${inputNum} =`;
        line2.innerText = `${round10(result)}`;
        numberOne = '';
        operation = '';
        inputNum = `${round10(result)}`;
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
        numberOne = `${round10(result)}`;
        operation = event.currentTarget.innerText;
        line1.innerText = `${numberOne} ${operation} `;
        inputNum = '0';
        line2.innerText = inputNum;
    };
};

for (let i = 0; i < 10; i++) {
    var element = document.getElementById(`${i}`);
    element.addEventListener('click', numberButton);
};

var element = document.getElementById(`clear`);
element.addEventListener('click', clear);

for (let i = 0; i < 4; i++) {
    var element = document.getElementById(operationButtons[i]);
    element.addEventListener('click', parseOp);
};

var element = document.getElementById(`equals`);
element.addEventListener('click', parseEq);

var element = document.getElementById(`decimal`);
element.addEventListener('click', decimal);

var element = document.getElementById(`delete`);
element.addEventListener('click', delNum);

var element = document.getElementById(`sign`);
element.addEventListener('click', changeSign);