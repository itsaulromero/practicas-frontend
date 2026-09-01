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

function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const dogs: Dog[] = [dog];

const firstDog = getFirst(dogs);
const firstName = getFirst(["a", "b"]);

type DogPreview = Pick<Dog, "name" | "race">;

const dogPreview: DogPreview = {
  name: dog.name,
  race: dog.race,
};

type DogWithoutAge = Omit<Dog, "age">;

const dogWithoutAge: DogWithoutAge = {
  name: dog.name,
  canEat: dog.canEat,
  canDrink: dog.canDrink,
  canSleep: dog.canSleep,
  canFly: dog.canFly,
  race: dog.race,
};

type FrozenDog = Readonly<Dog>;

const frozenDog: FrozenDog = dog;

function updateDog(dog: Dog, changes: Partial<Dog>): Dog {
  return {
    ...dog,
    ...changes,
  };
}

const updatedDog = updateDog(dog, {
  age: 5,
  race: "Husky",
});

console.log(bird);
console.log(cat);
console.log(firstDog);
console.log(firstName);
console.log(dogPreview);
console.log(dogWithoutAge);
console.log(frozenDog);
console.log(updatedDog);