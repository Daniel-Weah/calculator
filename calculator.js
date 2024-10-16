// Getting the screen element
const screen = document.getElementById('screen');

// Function to append value to the screen
function appendToScreen(value) {
    if (screen.value === '0' || screen.value === 'Error') {
        screen.value = value;
    } else {
        screen.value += value;
    }
}

// Function to clear the screen
function clearScreen() {
    screen.value = '0';
}

// Function to delete the last character
function deleteLast() {
    if (screen.value.length > 1) {
        screen.value = screen.value.slice(0, -1);
    } else {
        screen.value = '0';
    }
}

// Function to evaluate the expression
function calculate() {
    try {
        screen.value = eval(screen.value.replace('%', '/100'));
    } catch (error) {
        screen.value = 'Error';
    }
}

// Adding event listeners to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        switch (value) {
            case 'C':
                clearScreen();
                break;
            case 'DEL':
                deleteLast();
                break;
            case '=':
                calculate();
                break;
            default:
                appendToScreen(value);
        }
    });
});
