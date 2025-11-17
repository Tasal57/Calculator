const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');



let currentInput = '';
let previousInput = '';
let operator = '';


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    // Clear button
    if (button.classList.contains('clear')) {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.textContent = '0';
      return;
    }


     // Operator buttons
    if (button.classList.contains('operator')) {
      if (currentInput === '') return;
      operator = value;
      previousInput = currentInput;
      currentInput = '';
      return;
    }

    if (button.classList.contains('equal')) {
      if (previousInput === '' || currentInput === '' || operator === '') return;
      const result = calculate(Number(previousInput), operator, Number(currentInput));
      display.textContent = result;
      currentInput = String(result);
      previousInput = '';
      operator = '';
      return;
    }

    // Numbers or decimal point
    currentInput += value;
    display.textContent = currentInput;


    
  });
});

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? 'Error' : a / b; }

// Main calculation logic
function calculate(a, op, b) {
  switch (op) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    default: return b;
  }
}
S