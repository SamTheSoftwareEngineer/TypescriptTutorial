import { HasFormatter } from "../interface/HasFormatter";

export class Payments implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}
    format() {
        return `${this.recipient} owes £${this.amount} for ${this.details}`;
    }
}
