//types of variables:
//string, number, boolean, any, undefined, null, void, never, symbol, bigint

function greet(firstName: string): void {
  console.log("Good morning " + firstName);
}

//any type: when the type of the variable is not fixed
// greet(777);
greet("Shreyansh");

//type inference:
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

function isLegal(age: number): boolean {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log("Is legal: " + isLegal(12));

function raand(s: string) {
  console.log(s);
}

function runAfter1Second(func: (s: string) => void) {
  setTimeout(func, 2000);
}

let str = "Hello world!";

runAfter1Second((str) => raand(str));

//other examples:
let x: number = 1; //cant change type of x

let y: number | string = "Shreyansh"; //can change type of y

console.log("x: " + x);
console.log("y: " + y);

//function with objects as arguments
function greeet(user: { name: string; age: number }) {
  return user.age;
}
greeet({ name: "Harkirat", age: 24 });
