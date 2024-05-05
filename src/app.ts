// The DOM and Type Casting 

// ! = null or undefined

// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement; // Type Casting 
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
})

// Classes
class invoice {

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {
            this.client = client;
            this.details = details;
            this.amount = amount;
        }
    
        format () {
            return `${this.client} owes £${this.amount} for ${this.details}`
        }
}

const InvoiceOne = new invoice('mario', 'work on the mario website', 250);
console.log(InvoiceOne)