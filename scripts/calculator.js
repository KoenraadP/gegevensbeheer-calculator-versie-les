"use strict";

//#region global variables

// variables for calculation
let number1 = 0;
let number2 = 0;
let result = 0;

// variables for HTML elements
let number1Input, number2Input;
let resultOutput;
// let addButton, subtractButton, multiplyButton, divideButton;

// variabele voor error div
let errorsDiv;

// array met alle button elementen in
// querySelectorAll gaat op zoek naar alle elementen die 
// beantwoorden aan de 'parameter' en verzamelt deze
// in een array
let buttons = document.querySelectorAll("button");
console.log(buttons);

//#endregion

//#region main script

// function uitvoeren om HTML elementen
// te koppelen aan variabelen
BindElements();
AddEvents();

//#endregion

//#region functions

// function om HTML elementen
// te koppelen aan mijn variabelen
function BindElements() {
    number1Input = document.getElementById("number1");
    number2Input = document.getElementById("number2");
    resultOutput = document.getElementById("result");
    errorsDiv = document.getElementById("errors");
    // addButton = document.getElementById("add");
    // subtractButton = document.getElementById("subtract");
    // multiplyButton = document.getElementById("multiply");
    // divideButton = document.getElementById("divide");
}

// function om eventlisteners toe te voegen
function AddEvents() {
    // alle knoppen koppelen aan een click event
    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            // alles hieronder wordt uitgevoerd
            // wanneer geklikt wordt op een button
            // errors wegnemen en input weer normale kleur geven
            Reset();
            // eerst controle uitvoeren
            if (Validate(number1Input.value) &&
                Validate(number2Input.value)) {
                // cijfers 'lezen'
                ReadInput();
                // berekening doen en resultaat in variabele opslaan
                // textContent = tekst die binnen het element staat
                let operator = e.target.textContent;
                result = Calculate(number1, number2, operator);
                // resultaat tonen in onderste vakje
                resultOutput.value = result;
            } else {
                ShowErrors();
            }
        })
    });
}

// function om invoer (de cijfers) uit te lezen
// en te koppelen aan mijn variabelen
function ReadInput() {
    // nodig om te 'converteren' van
    // string naar cijfer data type hier
    number1 = Number(number1Input.value);
    number2 = Number(number2Input.value);
}

// function om twee cijfers op te tellen
// function Add(number1, number2) {
//     return number1 + number2;
// }

// function Subtract(number1, number2) {
//     return number1 - number2;
// }

// function om de bewerkingen uit te voeren
function Calculate(number1, number2, operator) {
    if (operator === "+") return number1 + number2;
    if (operator === "-") return number1 - number2;
    if (operator === "x") return number1 * number2;
    if (operator === ":") return number1 / number2;
    return 0;
}

// function om te controleren of een opgegeven
// parameter een lege string bevat
// als de input leeg is, krijgen we false
// anders krijgen we true
function Validate(input) {
    if (input === "") return false;
    return true;
}

// function die specifiek de twee input vakjes
// apart checkt en de juiste boodschappen toont
function ShowErrors() {
    if (!Validate(number1Input.value)) {
        // nieuwe 'p' tag maken
        let error1 = document.createElement("p"); // <p> 
        error1.textContent = "In het eerste vak staat geen correct cijfer!";
        // <p> toevoegen aan errors div
        errorsDiv.append(error1);
        // input vak een gele achtergrondkleur geven
        number1Input.style.backgroundColor = "yellow";
    }
    if (!Validate(number2Input.value)) {
        // nieuwe 'p' tag maken
        let error2 = document.createElement("p"); // <p> 
        error2.textContent = "In het tweede vak staat geen correct cijfer!";
        // <p> toevoegen aan errors div
        errorsDiv.append(error2);
        // input vak een gele achtergrondkleur geven
        number2Input.style.backgroundColor = "yellow";
    }
}

// function om alles weer 'normaal' te plaatsen
// en errors te verwijderen
function Reset() {
    errorsDiv.textContent = "";
    number1Input.style.backgroundColor = "";
    number2Input.style.backgroundColor = "";
}

//#endregion