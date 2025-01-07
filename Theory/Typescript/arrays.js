"use strict";
// Given an array of positive integers as input, return the maximum value in the array
Object.defineProperty(exports, "__esModule", { value: true });
let arr = [1, 2, 3, 4, 5];
let maxi = -1e9;
//taking an array of numbers as input:
function getMax(arr) {
    arr.forEach((element) => {
        if (element > maxi)
            maxi = element;
    });
    return maxi;
}
console.log(getMax(arr));
//takign and array of interfaces as input
function isLegal(users) {
    return users.filter((x) => x.age >= 18);
}
console.log(isLegal([
    {
        firstName: "harkirat",
        lastName: "Singh",
        age: 21,
    },
    {
        firstName: "Raman",
        lastName: "Singh",
        age: 16,
    },
]));
