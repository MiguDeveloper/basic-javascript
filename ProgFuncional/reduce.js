const reducer = [1, 2, 3, 4, 5].reduce((acc, item) => acc + item, 0);
console.log(reducer);

const mascotas = [
  { nombre: 'Pelusa', edad: 12, tipo: 'gato' },
  { nombre: 'Spike', edad: 12, tipo: 'perro' },
  { nombre: 'pulga', edad: 10, tipo: 'perro' },
  { nombre: 'Peluchin', edad: 3, tipo: 'perro' },
];

console.log(mascotas.find((mascota) => mascota.nombre === 'Peluchin').edad);
const indexed = mascotas.reduce(
  (acc, el) => ({
    ...acc,
    [el.nombre]: el,
  }),
  {}
);
console.log(indexed);
console.log(indexed['Peluchin']);

const anidado = [1, [2, 3], 4, [5]];
const plano = anidado.reduce((acc, el) => acc.concat(el), []);
console.log(plano);
