// Parte 1: Hoisting

console.log(a); // undefined
var a = "hola";

// let está en la Temporal Dead Zone hasta su declaración.
// El acceso antes de declararla lanza ReferenceError.
try {
  console.log(b);
  let b = "hola";
} catch (error) {
  console.log(error.name); // ReferenceError
}

// const también está en la Temporal Dead Zone hasta su declaración.
// El acceso antes de declararla lanza ReferenceError.
try {
  console.log(c);
  const c = "hola";
} catch (error) {
  console.log(error.name); // ReferenceError
}

sayHi();

function sayHi() {
  console.log("Hola desde sayHi!");
}

function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye();

// Parte 2: Comparaciones

// == vs ===
console.log(1 == "1"); // true
console.log(1 === "1"); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// Valores falsy
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// NaN
console.log(NaN == NaN); // false
console.log(Number.isNaN(Number("hola"))); // true