"use strict";

// input vakjes koppelen aan variabelen
// document = het html bestand waaraan het script
// gekoppeld werd
let number1Input = document.getElementById("number1");
let number2Input = document.getElementById("number2");

// resultaat vakje koppelen
let resultOutput = document.getElementById("result");

// buttons koppelen
let addButton = document.getElementById("add-button");
let subtractButton = document.getElementById("subtract-button");
let multiplyButton = document.getElementById("multiply-button");
let divideButton = document.getElementById("divide-button");

// variabelen maken voor opslag cijfers
let number1 = 0;
let number2 = 0;
let result = 0;

// click event toevoegen aan optel knop addButton
addButton.addEventListener("click", function(){
    // waarde van input vakjes invullen
    // bij variabelen number1 en number2
    // parseFloat om te zorgen dat ze ingelezen worden als
    // cijfers en niet als tekst
    number1 = parseFloat(number1Input.value);
    number2 = parseFloat(number2Input.value);
    // test: console.log(number1);

    // berekening uitvoeren
    result = number1 + number2;

    // resultaat tonen in vakje onderaan
    // .toFixed om af te ronden met een specifiek
    // aantal cijfers na de komma
    // parseFloat om te zorgen dat er niet altijd cijfers staan
    // na de komma
    resultOutput.value = parseFloat(result.toFixed(2));
})

subtractButton.addEventListener("click", function(){
    number1 = parseFloat(number1Input.value);
    number2 = parseFloat(number2Input.value);

    result = number1 - number2;

    resultOutput.value = parseFloat(result.toFixed(2));
})

multiplyButton.addEventListener("click", function(){
    number1 = parseFloat(number1Input.value);
    number2 = parseFloat(number2Input.value);

    result = number1 * number2;

    resultOutput.value = parseFloat(result.toFixed(2));
})

divideButton.addEventListener("click", function(){
    number1 = parseFloat(number1Input.value);
    number2 = parseFloat(number2Input.value);

    result = number1 / number2;

    resultOutput.value = parseFloat(result.toFixed(2));
})
