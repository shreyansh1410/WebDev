//problem: Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.

// How would you solve this problem?

//using generics (<T>)

export function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

export const el = getFirstElement<string>(["Hello", "Hi"]);
export const el2 = getFirstElement<number>([2, 3, 4, 5]);
console.log(el2);
console.log(el.toLowerCase());
