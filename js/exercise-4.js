const products = [
  { id: 1, name: "Teclado", price: 45, stock: 10, category: "periféricos" },
  { id: 2, name: "Monitor", price: 220, stock: 0, category: "pantallas" },
  { id: 3, name: "Ratón", price: 25, stock: 3, category: "periféricos" },
  { id: 4, name: "Webcam", price: 60, stock: 7, category: "periféricos" },
  { id: 5, name: "Portátil", price: 950, stock: 2, category: "ordenadores" },
];

const productNames = products.map((product) => product.name);
console.log(productNames);
console.log(products);

const productsWithStock = products.filter((product) => product.stock > 0);
console.log(productsWithStock);
console.log(products);

const productWithIdFour = products.find((product) => product.id === 4);
console.log(productWithIdFour);
console.log(products);

const inventoryValue = products.reduce(
  (total, product) => total + product.price * product.stock,
  0,
);
console.log(inventoryValue);
console.log(products);

const hasProductOverFiveHundred = products.some(
  (product) => product.price > 500,
);
console.log(hasProductOverFiveHundred);
console.log(products);

const allProductsUnderOneThousand = products.every(
  (product) => product.price < 1000,
);
console.log(allProductsUnderOneThousand);
console.log(products);

const productsByPrice = [...products].sort(
  (firstProduct, secondProduct) => firstProduct.price - secondProduct.price,
);
console.log(productsByPrice);
console.log(products);

const peripheralsWithHigherPrice = products.reduce((result, product) => {
  if (product.category === "periféricos") {
    result.push({
      ...product,
      price: Math.round(product.price * 1.1 * 100) / 100,
    });
  }

  return result;
}, []);

console.log(peripheralsWithHigherPrice);
console.log(products);