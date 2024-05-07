"use strict";
// // The DOM and Type Casting 
const me = {
    name: 'steve',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const greet = (person) => {
    console.log('hello', person.name);
};
