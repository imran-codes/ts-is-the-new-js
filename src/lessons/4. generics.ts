function logData<T>(data: T): void {
  console.log(data);
}

logData("hello world");
// ^?

logData(123);
// ^?

logData({ name: "Imran" });
// ^?

interface User<I> {
  name: string;
  age: number;
  location: I;
}

const user: User<string> = {
  name: "Imran",
  age: 25,
  location: "Dhaka",
};

type Lat = number | string;

type LocationType = {
  lat: Lat;
};

const user2: User<LocationType> = {
  name: "John",
  age: 30,
  location: {
    lat: "231422",
  },
};

console.log(user);
console.log(user2);
