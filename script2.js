//basic functions
function btnAddCalc(a, b){ a + b };
function btnSubCalc(a, b){ a - b };
function btnMultCalc(a, b){ a * b };
function btnDivCalc(a, b){ a / b };

//store button values
let storeOperator;
let storeNumber = null;
let currentNumber = null;


const display = document.querySelector('#display');
function changeDisplay(input){display.textContent = input};


//operate
function operate(a, b, c) {
    currentNumber = (a,(b, c));
    changeDisplay(currentNumber);
};


//To reference a button object, use the id of the button, f.ex btnAdd
//Creates references of button with argument Id.
function createBtn(buttonObject){ "const `${buttonObject}` document.querySelector(`${buttonObject}`);" };

//Operators 
function operatorClick(buttonObject) {
    buttonObject.addEventListener('click', () => {
        storeOperator = buttonObject.id;
        storeNumber = currentNumber;
        currentNumber = null;
        const icon = buttonObject.textContent
        changeDisplay(icon);
        console.log(`CLICKED OPERATOR: storeNumber: ${storeNumber}`);
        console.log(`CLICKED OPERATOR: currentNumber: ${currentNumber}`);
        console.log(`CLICKED OPERATOR: storeOperator: ${storeOperator}`);
    });
};

//Numbers
function numberClick (buttonObject) {
    buttonObject.addEventListener('click', () => {
        currentNumber = parseInt(buttonObject.textContent)
        changeDisplay(currentNumber);
        console.log(`CLICKED NUMBER: storeNumber: ${storeNumber}`);
        console.log(`CLICKED NUMBER: currentNumber: ${currentNumber}`);
        console.log(`CLICKED NUMBER: storeOperator: ${storeOperator}`);
    });
}

btnEquals.addEventListener('click', () => {
    console.log(`CLICKED EQUALS: storeNumber: ${storeNumber}`);
    console.log(`CLICKED EQUALS: currentNumber: ${currentNumber}`);
    console.log(`CLICKED EQUALS: storeOperator: ${storeOperator}`);
    currentNumber = operate(storeOperator, parseInt(storeNumber), parseInt(currentNumber));
});

btnClear.addEventListener('click', () => {
    storeOperator = null;
    storeNumber = null;
    currentNumber = null;
    changeDisplay(null);
    console.log(`CLICKED CLEAR: storeNumber: ${storeNumber}`);
    console.log(`CLICKED CLEAR: currentNumber: ${currentNumber}`);
    console.log(`CLICKED CLEAR: storeOperator: ${storeOperator}`);
})



//add relevant eventlistener
function checkButton (buttonObject) {
    const btnClasses = buttonObject.classList;
    for (classes in btnClasses) {
        if (btnClasses[classes] === 'operator') {
            operatorClick(buttonObject);
        }
        else if (btnClasses[classes] === 'number') {
            numberClick(buttonObject);
        }
    }
}

//Loops through all the buttons (btnAll) and passes each button's ID to the createBtn function. 
//If a button has the operator class, then assign operator onclick event listener
//CREATES BUTTON REFERENCES AND ADDS BEHAVIOR
const btnAll = document.querySelectorAll('button');
for (buttonObject = 0; buttonObject < btnAll.length; buttonObject++) {
    const btn = btnAll[buttonObject];
    createBtn(btn);
    checkButton(btn);
}




