interface People {
  name: string;
  age: number;
  isLegal: () => boolean;
}

// object of interface
let person: People = {
  name: "Harkirat",
  age: 21,
  isLegal() {
    return this.age >= 18;
  },
};

//implementing interfaces using classes
class Manager implements People {
  //these two are definiitely required
  name: string;
  age: number;
  //can add more fields
  random: string;
  constructor(name: string, age: number) {
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
