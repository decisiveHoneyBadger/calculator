'use strict';

let currentInput = '';
let previousInput = '';
let operator = null;

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.innerText;

    // Pseudologic – next:
    // if value is number → appendNumber(value)
    // if value is operator → chooseOperator(value)
    // if value is '=' → compute()
    // if value is 'AC' → clear()

    updateDisplay();
  });
});

function updateDisplay() {
  display.innerText = currentInput || '0';
}
