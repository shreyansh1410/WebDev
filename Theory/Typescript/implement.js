"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// object of interface
let person = {
    name: "Harkirat",
    age: 21,
    isLegal() {
        return this.age >= 18;
    },
};
//implementing interfaces using classes
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.random = "123123";
    }
    isLegal() {
        return this.age >= 18;
    }
}
//object of manager class (needed to extend the )
let user = new Manager("Harkirat", 21);
console.log(user.name);
console.log(user.age);
//not (user.isLegel)  ---- use the brackets to call functions
console.log(user.isLegal());
