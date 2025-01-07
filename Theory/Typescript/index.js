"use strict";
//types of variables:
//string, number, boolean, any, undefined, null, void, never, symbol, bigint
Object.defineProperty(exports, "__esModule", { value: true });
function greet(firstName) {
    console.log("Good morning " + firstName);
}
//any type: when the type of the variable is not fixed
// greet(777);
greet("Shreyansh");
//type inference:
function sum(num1, num2) {
    return num1 + num2;
}
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log("Is legal: " + isLegal(12));
function raand(s) {
    console.log(s);
}
function runAfter1Second(func) {
    setTimeout(func, 2000);
}
let str = "Hello world!";
runAfter1Second((str) => raand(str));
//other examples:
let x = 1; //cant change type of x
let y = "Shreyansh"; //can change type of y
console.log("x: " + x);
console.log("y: " + y);
//function with objects as arguments
function greeet(user) {
    return user.age;
}
greeet({ name: "Harkirat", age: 24 });
