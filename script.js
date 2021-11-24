//basic functions
function btnAdd(a, b){
    return a + b;
}
function btnSub(a, b){
    return a - b;
}
function btnMult(a, b){
    return a * b;
}
function btnDiv(a, b){
    if(b === 0) {
        return 'error';
    }
    return a / b;
}

//store button values
let storeOperator;
let storeNumber = null;
let currentNumber = null;
let currentDisplay;
let numArray = [];


const display = document.querySelector('#display');
function changeDisplay(input){
    let text = `${input}`;
    console.log(text);
    let trimInput = (text.length > 15)?(text.substring(0, 15)):input;
    console.log(trimInput);
    currentDisplay=parseInt(trimInput);
    display.textContent = trimInput;
};


//operate
function operate(a, b, c) {   
    
    if (a === 'btnAdd') {
        currentNumber = (btnAdd(b, c));
    }
    else if (a === 'btnSub') {
        currentNumber = (btnSub(b, c));
    }
    else if (a === 'btnMult') {
        currentNumber = (btnMult(b, c));
    }
    else if (a === 'btnDiv') {
        currentNumber = (btnDiv(b, c));
    }
    storeOperator = null;
    storeNumber = null;
    changeDisplay(currentNumber);
    return currentNumber;
};


//To reference a button object, use the id of the button, f.ex btnAdd
//Creates references of button with argument Id.
function createBtn(buttonObject){ "const `${buttonObject}` document.querySelector(`${buttonObject}`);" };

//Operators 
function operatorClick(buttonObject) {
    buttonObject.addEventListener('click', () => {
        if(storeOperator){
            currentNumber = operate(storeOperator, storeNumber, currentNumber);
        }
        storeOperator = buttonObject.id;
        storeNumber = currentNumber;
        currentNumber = null;
        changeDisplay(storeNumber);
        numArray = [];
    });
};

//Numbers
function numberClick (buttonObject) {
    buttonObject.addEventListener('click', () => {
        let input = buttonObject.textContent
        numArray.push(input);
        a = numArray.join('');
        currentNumber = parseInt(a);
        changeDisplay(currentNumber);
    });
}

btnEquals.addEventListener('click', () => {
    currentNumber = operate(storeOperator, storeNumber, currentNumber);
    numArray = [];
});

btnClear.addEventListener('click', () => {
    storeOperator = null;
    storeNumber = null;
    currentNumber = null;
    changeDisplay();
    numArray = [];
})

btnBack.addEventListener('click', () => {
    numArray.pop();
    a = numArray.join('');
    currentNumber = parseInt(a);
    changeDisplay(currentNumber);
});

/*
btnPM.addEventListener('click', () => {
    changeDisplay(display.text*-1);
});
*/


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



const test = document.querySelector('#test');
test.addEventListener('click', () => {
    console.log(currentNumber);
});
