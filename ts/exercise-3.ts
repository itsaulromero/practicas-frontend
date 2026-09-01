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

interface Cat {
  name: string;
  color: string;
  canSleep: boolean;
}

interface SnakeData {
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
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

const cat: Cat = {
  name: "Milo",
  color: "Naranja",
  canSleep: true,
};

const Snake: SnakeData = {
  canEat: true,
  canDrink: true,
  canSleep: true,
};

console.log(bird);
console.log(dog);
console.log(cat);
console.log(Snake);