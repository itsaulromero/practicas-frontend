const response = {
  user: {
    name: "Lucía",
    address: {
      city: "Vigo",
    },
  },
  settings: null,
  visits: 0,
};

const street = response.user.address?.street;
const companyName = response.company?.name;

console.log(street);
console.log(companyName);

const country = response.user.address?.country ?? "España";

console.log(country);

const visitsWithOr = response.visits || "Sin visitas";
const visitsWithNullish = response.visits ?? "Sin visitas";

console.log(visitsWithOr);
console.log(visitsWithNullish);

const { name, role = "invitado" } = response.user;

console.log(name);
console.log(role);

const updatedUser = {
  ...response.user,
  address: {
    ...response.user.address,
    city: "Madrid",
  },
};

console.log(updatedUser);
console.log(response.user);

function sumar(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(sumar(1, 2, 3, 4, 5));