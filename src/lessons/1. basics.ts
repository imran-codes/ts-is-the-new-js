// Inferred types

type Animal = string;

let animal: Animal = "dog";
animal = "cat";

console.log(animal);

type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "John",
  age: 30,
};

console.log(person);
