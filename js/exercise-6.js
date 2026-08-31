const user = { name: "Pedro", age: 45 };
const user2 = { name: "Lucía", age: 31 };
const findAnimal = (name) => `Buscando ${name}...`;
const color = "azul";

const myMap = new Map();

myMap.set("moroso", user);
myMap.set("agarrado", user);
myMap.set("generoso", user2);
myMap.set("funcion", findAnimal);
myMap.set("color", color);

console.log(myMap);

console.log(myMap.get("funcion")("perro"));

user.age = 50;
console.log(myMap);

console.log(myMap.get("moroso"));

console.log(myMap.has("hola"));

console.log(myMap.size);

myMap.forEach((value, key) => {
  console.log(key, value);
});

myMap.set(user, "es el moroso");

console.log(myMap.get(user));
console.log(myMap.get({ name: "Pedro", age: 45 }));

myMap.delete("agarrado");
console.log(myMap);

myMap.clear();
console.log(myMap);

const numeros = [1, 2, 2, 3, 4, 4, 4, 5];
const etiquetas = ["vue", "nuxt", "vue", "css", "nuxt"];

const numerosSinDuplicados = [...new Set(numeros)];
console.log(numerosSinDuplicados);

const etiquetasSinDuplicados = [...new Set(etiquetas)];
console.log(etiquetasSinDuplicados);

const mySet = new Set();

mySet.add("vue");
mySet.add("nuxt");
mySet.add("css");
mySet.add("vue");

console.log(mySet);
console.log(mySet.size);

console.log(mySet.has("nuxt"));

mySet.delete("css");
console.log(mySet);

mySet.forEach((value) => {
  console.log(value);
});

const objectSet = new Set([{ id: 1 }, { id: 1 }]);

console.log(objectSet);
console.log(objectSet.size);