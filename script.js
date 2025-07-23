'use strict';

let currentInput = ''; // Stores the number you are currently typing
let previousInput = ''; // Stores the previous number before an operator was clicked
let operator = null; // Stores the selected operator (+, -, *, /)

const display = document.getElementById('display'); // Gets the display element where numbers and results are shown
const buttons = document.querySelectorAll('.btn'); // Gets all the buttons (numbers, operators, etc.)

// Add a click listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});

// Handles what happens when a button is clicked
function handleClick(event) {
  const value = event.target.innerText;

  // If the clicked button is a number or decimal point
  if (!isNaN(value) || value === '.') {
    appendNumber(value);

    // If the button is an operator (+, -, *, /)
  } else if (['+', '-', '*', '/'].includes(value)) {
    chooseOperation(value);

    // If the button is equal sign (=)
  } else if (value === '=') {
    compute();

    // If the button is AC (All Clear)
  } else if (value === 'AC') {
    clear();
  }

  // Update the screen after every click
  updateDisplay();
}

// Adds number to the current input string
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

// Saves the chosen operator and moves currentInput to previousInput
function chooseOperation(op) {
  if (currentInput === '') return; // Do nothing if there's no number yet

  if (previousInput !== '') compute(); // If there's already a previous input, calculate first

  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

// Calculates the result based on previousInput, operator, and currentInput
function compute() {
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result;

  // Stop if either input is not a number
  if (isNaN(prev) || isNaN(current)) return;

  // Do the correct math based on the operator
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
  }

  // Show result and reset
  currentInput = result;
  operator = null;
  previousInput = '';
}

// Updates the display with the current input or shows 0 if empty
function updateDisplay() {
  display.innerText = currentInput || '0';
}

// Clears everything (used by AC button)
function clear() {
  currentInput = '';
  previousInput = '';
  operator = null;
}
