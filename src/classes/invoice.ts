// classes
import { HasFormatter } from "../interface/HasFormatter";
export class Invoice implements HasFormatter {
    // readonly client: string;
    // private details: string;
    // public amount: number;
  
    constructor(
    // Access Modifiers
      readonly client: string, 
      private details: string, 
      public amount: number,
    ){}
  
    format() {
      return `${this.client} owes £${this.amount} for ${this.details}`;
    }
  }

