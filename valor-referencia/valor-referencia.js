let a = 10;
let b = a;

a = 30;
console.log({ a, b });

let juan = { nombre: 'Juan' };
let ana = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiarNombre = ({ ...persona }) => {
  persona.nombre = 'Tony';
  return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiarNombre(peter);

console.log({ peter, tony });

// Ahora con arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];
// para romper la referencia podemos usar el operador 'spread' o slice: retorna un nuevo
// arreglo si no se le manda parametros
// const otrasFrutas = [...frutas];
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });
