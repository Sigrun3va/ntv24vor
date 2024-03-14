document.addEventListener('DOMContentLoaded', function () {
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const counterDisplay = document.getElementById('counter');
    const messageDisplay = document.getElementById('message');
    let counter = 0;

    incrementButton.addEventListener('click', function () {
        counter += 5;
        updateDisplay();
    });

    decrementButton.addEventListener('click', function () {
        counter -= 5;
        updateDisplay();
    });

    function updateDisplay() {
        counterDisplay.textContent = counter;
        if (counter > 35 || counter < -35) {
            messageDisplay.style.display = 'block'; 
        } else {
            messageDisplay.style.display = 'none'; 
        }
    }
});
