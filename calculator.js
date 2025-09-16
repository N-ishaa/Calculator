let currentDisplay = '';
const display = document.querySelector('#display');

function updateDisplay() {
  display.value = currentDisplay;
}

function clearDisplay() {
  currentDisplay = '';
  updateDisplay();
}

function appendValue(value) {
  currentDisplay += value;
  updateDisplay();
}

function calculateResult() {
  try {
    let result = eval(currentDisplay);
    currentDisplay = result.toString();
    updateDisplay();
  } catch (error) {
    currentDisplay = "Error";
    updateDisplay();
  }
}

// initialize
updateDisplay();
