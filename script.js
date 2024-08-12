function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function displayLoveMessage() {
  document.getElementById('display').value = 'I LOVE YOU';
}
