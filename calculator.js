// Nazokat Samandarova, Midterm, 11/28/2022

const displayOutput = document.querySelector('.item.calculatorDisplay');
const btnAc = document.querySelector('.btn.silver.clear');
const btnNumbers = document.querySelectorAll('.btn.num');
const btnNegative = document.querySelector('.btn.silver.negative');
const btnDecimal = document.querySelector('.btn.decimal');

const btnMod = document.querySelector('.btn.action.orange.silver.modulusBy');
const btnDivision = document.querySelector('.btn.action.orange.division');
const btnMultiply = document.querySelector('.btn.action.orange.multiplication');
const btnSubtract = document.querySelector('.btn.action.orange.subtract');
const btnAdd = document.querySelector('.btn.action.orange.add');
const btnEqual = document.querySelector('.btn.action.equals');

let firstOperand = 0;
let secondOperand = 0;
let action;




function refresh() {
  displayOutput.innerHTML = '0';
}

btnAc.addEventListener('click', refresh)

function numberClicked(e) {
  let num = e.target.innerHTML;
  let output = displayOutput.innerHTML;


  if (output === '0') {
    output = num;
  } else {
    output = output + num;
  }
  displayOutput.innerHTML = output;
  secondOperand = displayOutput.innerHTML;
}

btnNumbers.forEach(function (button) {
  button.addEventListener('click', numberClicked);
})

function makeNegative() {
  let output = displayOutput.innerHTML;
  let numOutput = parseFloat(output) * -1;
  displayOutput.innerHTML = numOutput.toString();
}

btnNegative.addEventListener('click', makeNegative)

function addDecimal() {
  let output = displayOutput.innerHTML;
  output = output + '.';
  displayOutput.innerHTML = output.toString();
}

btnDecimal.addEventListener('click', addDecimal)


function addOperation() {
  firstOperand = parseFloat(displayOutput.innerHTML);
  displayOutput.innerHTML = '0';
  action = 'add';
}

btnAdd.addEventListener('click', addOperation);

function subtractOperation() {
  firstOperand = parseFloat(displayOutput.innerHTML);
  displayOutput.innerHTML = '0';
  action = 'subtract';
}

btnSubtract.addEventListener('click', subtractOperation);

function multiplyOperation() {
  firstOperand = parseFloat(displayOutput.innerHTML);
  displayOutput.innerHTML = '0';
  action = 'multiply';
}

btnMultiply.addEventListener('click', multiplyOperation);

function divideOperation() {
  firstOperand = parseFloat(displayOutput.innerHTML);
  displayOutput.innerHTML = '0';
  action = 'divide';
}

btnDivision.addEventListener('click', divideOperation);

function modulusOperation() {
  firstOperand = parseFloat(displayOutput.innerHTML);
  displayOutput.innerHTML = '0';
  action = 'modulus';
}

btnMod.addEventListener('click', modulusOperation);


function calculateOperation() {
  let num1 = parseFloat(firstOperand);
  let num2 = parseFloat(secondOperand);
  let result = 0;

  if (action === 'add') {
    result = (num1 + num2);
  }
  else if (action === 'subtract') {
    result = (num1 - num2);
  }
  else if (action === 'multiply') {
    result = (num1 * num2);
  }
  else if (action === 'divide') {
    result = (num1 / num2);
  }
  else if (action === 'modulus') {
    result = (num1 % num2);
  }

  displayOutput.innerHTML = result.toString();
}

btnEqual.addEventListener('click', calculateOperation)
