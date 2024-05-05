"use strict";
// // Types
// // Can change the value of the variables, just not the type
// // Typescript infers the type of the variable based on what is assigned to it
// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;
// // character = 20;
// character = 'luigi';
// age = 40;
// isBlackBelt = true;
// const circumference = (diameter: number) => {
//     return diameter * Math.PI
// }
// console.log(circumference(7.5));
// // Arrays
// let names = ['luigi', 'mario', 'yoshi'];
// // names = 40;
// names.push('toad');
// // names.push(20);
// // names[0] = 20;
// let numbers = [10, 20, 30, 40];
// numbers.push(25);
// // numbers.push('shaun');
// // numbers[1] = 'shaun';
// // TO have mized arrays, you must declare this when creating the array 
// let mixed = ['ken', 4, 'chun-li', 8, 9];
// mixed.push('ryu');
// mixed.push(10);
// // mixed.push(true);
// // Objects
// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30
// };
// ninja.age = 32;
// ninja.name = 'luigi';
// ninja.belt = 'orange';
// // ninja.age = 'hello';
// // ninja.name = true;
// // ninja.belt = 30;
// // ninja.skills = ['fighting', 'sneaking']
// // When redeclaring the object, you must redeclare all the properties exactly the same!
// ninja = {
//     name: 'yoshi',
//     belt: 'orange',
//     age: 40,
//     // Can't add new properties
//     // skills: [ 'running', 'sneaking' ]
// }; 
// // explicit types
// let character2: string = 'mario';
// let age2: number = 30;
// let isLoggedIn: boolean = false;
// // arrays
// let ninjas: string[] = [];
// ninjas.push('mario');
// // union types
// let mixes: (string | number | boolean)[] = [];
// mixes.push('hello');
// mixes.push(30);
// mixes.push(true);
// console.log(mixes);
// let uid: string | number 
// uid = '123';
// uid = 123;
// // uid = true;
// // objects 
// let ninjaOne: object;
// ninjaOne = { name: 'yoshi', age: 30 };
// ninjaOne = []; // An array is a kind of object
// // Can declare the type of the object
// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColour: string
// }
// ninjaTwo = {
//     name: 'yoshi',
//     age: 30,
//     beltColour: 'black'
//     // skills: ['fighting', 'sneaking']
// }
// // Any type: can be any type and it can be changed
// let age3: any = 25;
// age3 = true
// console.log(age3)
// age3 = 'hello'
// console.log(age3)
// age3 = {
//     name: 'yoshi'
// }
// console.log(age3)
// Function types
// let greet: Function;
// // greet = 'hello';
// greet = () => {
//     console.log('hello');
// }
// // Can also specify the parameter types --> ?! means optional
// // When you don't have a return statement, you can use void
// const add = (a: number, b: number, c ?: number): void => {
//     console.log(a+b);
//     console.log(c);
// }
// add(5,10)
// // Can explicity state the return type
// const minus = (a: number, b: number): number => {
//     return a - b;
// }
// let result = minus(10,7)
// // result = 'something else'
// // Type Aliases --> create custom types
// type StringOrNum = string | number;
// type objWithName = { name: string; uid: StringOrNum; };
// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }
// const greet = (user: objWithName ) => {
//     console.log(`${user.name} says hello`);
// }
// Function Types (signatures) --> describes the general structure of a function 
// // let greetAgain: Function;
// let greet2: (a: string, b: string) => void;
// // Example 1
// greet2 = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// }
// // Example 2
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//     if (action === 'add') {
//         return numOne + numTwo
//     } else {
//         return numOne - numTwo
//     }
// }
// // Example 3
// let logDetails: (obj: { name: string; age: number }) => void;
// type person = { name: string; age: number };
// logDetails = (ninja: person) => {
//     console.log(`${ninja.name} is ${ninja.age} years old.`);
// }
