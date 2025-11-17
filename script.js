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
      if (currentInput === '') return; // ignore if no number entered yet
      operator = value;
      previousInput = currentInput;
      currentInput = '';
      return;
    }


    
  });
});
