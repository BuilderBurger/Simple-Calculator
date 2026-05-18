// Get calculator element and display element.

const calculator = document.getElementById("Calculator");
const display = document.getElementById("display");

// Add event listeners for all number buttons.

const numberButton = document.querySelectorAll(".number");
numberButton.forEach(button => {button.addEventListener("click", ()=>{
    display.textContent += button.textContent;
});
});

// Add event listeners for all operation buttons.

const operationButton = document.querySelectorAll(".operation");
operationButton.forEach(button => {button.addEventListener("click", ()=>{
    display.textContent += " " + button.textContent + " ";
});
});

// Add event listener for clear button.

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", ()=>{
    display.textContent = "";
});


// Add event listener for equals button.

const equalsButton = document.getElementById("equals");

equalsButton.addEventListener("click", ()=>{
    const expression = display.textContent;
    try{
        const result=eval(expression);
        display.textContent=result;
    }catch(error){
        display.textContent = "Error"
    }
});