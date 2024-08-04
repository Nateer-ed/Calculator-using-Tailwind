const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '.' || key === '/' || key === '*' || key === '-' || key === '+') {
        appendValue(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
});