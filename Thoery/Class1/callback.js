// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
//     // return result;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum

// //callback - passing function as an argument
// console.log(sum(1, 2, displayResult));



//callback: function calls back another function--->
function calculateArithmetic(a, b, finalFunction){
    const ans = finalFunction(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}

const val = calculateArithmetic(1,2,sum);
console.log(val);


//another example:
function square(a){
    return a * a;
}
function sumOfSomething(a, b ,fn){
    const val1 = square(a);
    console.log(fn);
    const val2 = square(b);
    return val1 + val2;
}

console.log(sumOfSomething(2, 3, function cube(a){
    return a*a*a;
}));