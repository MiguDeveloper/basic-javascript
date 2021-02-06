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

// lo tipo primitivos no se pasan por refencia
// boolan, null, undefined, Number, String y Symbol
let str1 = 'nuevo';
let str2 = str1;

str1 += ' curso';
console.log(str1);
console.log(str2);

let num1 = 5;
let num2 = num1;

num2 += 10;

console.log(num1);
console.log(num2);

// los Object, Array y function se pasan por referencia
// es decir que no se asignan valores sino referencias
const a = [1, 2, 3];
const b = a;
a.push(6);
b.push(5);

console.log(a, b);
