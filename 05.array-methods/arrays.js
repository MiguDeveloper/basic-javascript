const items = [
  { name: 'bike', price: 100 },
  { name: 'tv', price: 200 },
  { name: 'album', price: 10 },
  { name: 'book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

// operador filter
const filteredItems = items.filter(({ price }) => price <= 100);
console.log(filteredItems);

// operador map
const names = items.map(({ name }) => name);
console.log(names);

// operador find
const book = items.find(({ name }) => name === 'book');
console.log(book);

// operador forEach
items.forEach(({ name }) => console.log(name));

// operador some: cuando algunos cumplen la condicion, return true
const hasInexpensiveItems = items.some(({ price }) => price <= 100);
console.log(hasInexpensiveItems);

// operador every: cuando todos cumple la condicion return true
const itemsPriceLessThan1000 = items.every(({ price }) => price <= 1000);
console.log(itemsPriceLessThan1000);

// operador reduce
const total = items.reduce((acc, { price }) => acc + price, 0);
console.log(total);

const objItems = items.reduce(
  (acc, item) => ({
    ...acc,
    [item.name]: item,
  }),
  {}
);
console.log(objItems);
console.log(objItems.book);

// operador includes, retorna true si el elemento pertenece al arreglo
const numeros = [1, 2, 3, 4];
const includesTwo = numeros.includes(2);
console.log(includesTwo);
