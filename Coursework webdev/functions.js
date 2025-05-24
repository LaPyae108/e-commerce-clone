
/////////////////////////////////////////////////////////////////////////////////////////////////////////S

// Increment function
export function clickButton() {
    const plusButtons = document.querySelectorAll('.plus');
    const minusButtons = document.querySelectorAll('.minus');
    const numInputs = document.querySelectorAll('.num');

    plusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let currentValue = parseInt(numInputs[index].innerText, 10);
            currentValue = isNaN(currentValue) ? 0 : currentValue; // Ensure currentValue is not NaN
            numInputs[index].innerText = currentValue + 1;
            //quantityItems.quantity += 1;
            //console.log(numInputs[index].innerText);
        });
    });

    minusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let currentValue = parseInt(numInputs[index].innerText, 10);
            currentValue = isNaN(currentValue) ? 0 : currentValue; // Ensure currentValue is not NaN
            if (currentValue > 1) {
                numInputs[index].innerText = currentValue - 1;
                //quantityItems.quantity -= 1;
                //quantityItems.quantity -= 1;
                //console.log(numInputs[index].innerText);
            } else {
                numInputs[index].innerText = 1; // Set to 0 if currentValue is already 0
            }
        });
    });
}