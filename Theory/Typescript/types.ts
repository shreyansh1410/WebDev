type GoodUser = {
  name: string;
  gift: string;
};

type BadUser = {
  name: string;
  ip: string;
};

//union:
type UnionUser = GoodUser | BadUser;

//intersection:
type AndUser = GoodUser & BadUser;

export const user1: UnionUser = {
  name: "Harkirat",
  gift: "Pen",
  ip: "asdasfas", //why does it still work with OR?
};

export const user2: AndUser = {
  name: "Harkirat",
  gift: "asvd",
  ip: "13123",
};

//create two types called user and admin
//create a function that takes either user or admin and returns a string saying "Hello"

type User = {
  name: string;
  age: number;
};

type Admin = {
  name: string;
  permissions: string[];
};

function func(obj: User | Admin) {
  console.log(`Hello${obj.name}`);
}
