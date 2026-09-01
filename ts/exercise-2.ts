interface Animal {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
}

type DogRace = "Husky" | "Labrador" | "Chucho";

interface Dog extends Animal {
  race: DogRace;
  age: number;
}

const bird: Animal = {
  name: "Canario",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
};

const dog: Dog = {
  name: "Toby",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Labrador",
  age: 4,
};

console.log(bird);
console.log(dog);