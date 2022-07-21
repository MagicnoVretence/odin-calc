let displayTop = [];
let displayBottom = '';
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');

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
    return a / b;
};

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    };
};

function parseOp1(arr) {
    
}

for (let i = 0; i < 10; i++) {
    var element = document.getElementById(`${i}`);
    element.addEventListener('click', i => {
        displayBottom += +i;
        line2.innerText = displayBottom;
    });
}

var element = document.getElementById(`clear`);
element.addEventListener('click', () => {
    displayTop = [];
    displayBottom = '';
    line1.innerText = '';
    line2.innerText = '';
});