interface Animal {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
}

interface Dog extends Animal {
  race: string;
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