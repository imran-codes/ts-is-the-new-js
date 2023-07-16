// Union types

const myCar: MyCar = 26;

type MyCar = "BMW" | "Mercedes" | "Audi" | "Ford" | ExoticCar | 26;

type ExoticCar = "Ferrari" | "Lamborghini" | "Porsche";

console.log(myCar);

type GetTopping = Pizza | null | undefined;

function getToppings(pizza: GetTopping) {
  if (typeof pizza === "undefined") return "recieved undefined";
  if (!pizza) return "no toppings";
  return pizza.toppings;
}

type Pizza = {
  name: string;
  toppings: string[];
  price: number;
};

const pepperoniPizza: Pizza = {
  name: "Pepperoni",
  toppings: ["pepperoni", "cheese"],
  price: 15,
};

getToppings(pepperoniPizza);
getToppings(null);
getToppings(undefined);
