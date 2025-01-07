// Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input

//types provide union
type UserTypee = {
  name: string;
  age: number;
  func: () => void;
};
let User: UserTypee = {
  name: "Jake",
  age: 24,
  func: () => {
    return "Hello!";
  },
};

// interface UserType {
//   name: string;
//   age: number;
// }

// function solve(user: UserType): boolean {
//   if (user.age >= 18) return true;
//   else return false;
// }

// console.log(solve(User));

//Assignment 2: Todo in React
