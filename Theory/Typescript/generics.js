"use strict";
//problem: Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
Object.defineProperty(exports, "__esModule", { value: true });
// How would you solve this problem?
//using generics (<T>)
function getFirstElement(arr) {
    return arr[0];
}
const el = getFirstElement(["hHellow", "nice"]);
const el2 = getFirstElement([2, 3, 4, 5]);
console.log(el2);
console.log(el.toLowerCase());
