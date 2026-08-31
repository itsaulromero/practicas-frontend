const usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

function nombreUsuario(user) {
  const nombreCompleto = `Me llamo ${user.nombre} ${user.apellido}`;

  return nombreCompleto;
}

console.log(nombreUsuario(usuario));


const salaryUser = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userData(user) {
  const annualSalary = user.salary * 12;
  const fullName = `${user.name} ${user.last}`;

  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(userData(salaryUser));


const aidUser = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function esAptoParaAyuda(user) {
  const esExtranjero = user.nationality !== "España";
  const tieneEdadRequerida = user.age === 30;

  if (esExtranjero && tieneEdadRequerida) {
    return "Apto para la ayuda del gobierno";
  }

  return "No es apto para la ayuda del gobierno";
}

console.log(esAptoParaAyuda(aidUser));