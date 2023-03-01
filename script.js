const calculatorForm = document.forms.calculatorForm;
const resultInput = calculatorForm.result;
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    resultInput.value += button.value;
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    resultInput.value += button.value;
  });
});

const equalButton = document.querySelector('.equal');

equalButton.addEventListener('click', () => {
  const expression = resultInput.value;

  let result;

  if (expression.includes('+')) {
    const operands = expression.split('+');
    result = Number(operands[0]) + Number(operands[1]);
  } else if (expression.includes('-')) {
    const operands = expression.split('-');
    result = Number(operands[0]) - Number(operands[1]);
  } else if (expression.includes('*')) {
    const operands = expression.split('*');
    result = Number(operands[0]) * Number(operands[1]);
  } else if (expression.includes('/')) {
    const operands = expression.split('/');
    result = Number(operands[0]) / Number(operands[1]);
  }

  if (typeof result === 'number' && isFinite(result)) {
    resultInput.value = result;
  } else {
    resultInput.value = 'Error';
  }
});

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
  resultInput.value = '';
});
