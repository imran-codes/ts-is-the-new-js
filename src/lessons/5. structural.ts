const person1 = {
  name: "John",
  age: 30,
};

const person2 = {
  name: "Jane",
  age: 25,
  hobbies: ["reading", "cooking"],
  active: true,
};

type PersonType = {
  name: string;
  age: number;
};

function logPerson(person: PersonType) {
  console.log(person);
}

logPerson(person1);
logPerson(person2);
