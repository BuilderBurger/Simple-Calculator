// Get calculator element and display element.

const calculator = document.getElementById("Calculator");
const display = document.getElementById("display");
let lastNumber = "";
let lastOperator = "";

// Add event listeners for all number buttons.

const numberButton = document.querySelectorAll(".number");
numberButton.forEach(button => {button.addEventListener("click", () => {
    if(display.textContent==="Error" || display.textContent==="0"){
        display.textContent = "";
        display.textContent += button.textContent;
    }
    else{
        if(/\s[+\*/-]\s/.test(display.textContent)){
            display.textContent += button.textContent;
        }
        else{
            display.textContent += button.textContent;
            lastNumber = display.textContent;
        }
    }
});
});

// Add event listeners for all operation buttons.

const operationButton = document.querySelectorAll(".operation");
operationButton.forEach(button => {button.addEventListener("click", () => {
    if(display.textContent==="Error"){
        return;
    }
    else if(/\s[+\*/-]\s/.test(display.textContent)){
        try{
                const parts = display.textContent.split(" ");

                const first = parts[0];
                const operator = parts[1];
                const second = parts[2];

                lastOperator = operator;
                lastNumber = second;

                const result = eval(`${first}${operator}${second}`);
                display.textContent = result + " " + button.textContent + " ";
        }
        catch(error) {
            display.textContent = "Error";
        }}
    else{
        display.textContent += " " + button.textContent + " ";
        lastOperator = button.textContent; 
    }});
});


// Add event listener for clear button.

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {
    display.textContent = "0";
    lastOperator = "";
    lastNumber = ""
});


// Add event listener for equals button.

const equalsButton = document.getElementById("equals");

equalsButton.addEventListener("click", () => {
    try {
        if (/\s[+\*/-]\s/.test(display.textContent)) {

            const parts = display.textContent.split(" ");

            const first = parts[0];
            const operator = parts[1];
            const second = parts[2];

            lastOperator = operator;
            lastNumber = second;

            const result = eval(`${first}${operator}${second}`);
            display.textContent = result;
        }
        else if (lastOperator && lastNumber) {

            const result = eval(
                `${display.textContent}${lastOperator}${lastNumber}`
            );

            display.textContent = result;
        }
    }
    catch(error) {
        display.textContent = "Error";
    }
});
