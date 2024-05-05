"use strict";
// The DOM and Type Casting 
// ! = null or undefined
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form'); // Type Casting 
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// Classes
class invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const InvoiceOne = new invoice('mario', 'work on the mario website', 250);
console.log(InvoiceOne);
