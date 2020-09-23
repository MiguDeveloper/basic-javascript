const sumar = (...sumandos) =>
  sumandos.reduce((acc, sumando) => acc + sumando, 0);

console.log(sumar(1, 2, 3, 4, 5, 6));

// podemos hacer uso de la desestructuracion la cual nos permite extraer
// datos de arrays u objetos usando la sintaxis de [] y {} para asignar variables
const [aa, bb, cc, ...resto] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(aa, bb, cc);
console.log(resto);

const { a, b, c, ...otros } = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
console.log(a, b, c);
console.log(otros);
