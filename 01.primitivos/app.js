/*
 * Tipo de datos:
 * Numbers: números
 * String: textos
 * Booleans: true/false
 * Undefined: no definido
 * Null: valor nulo
 */

const objParticipante = [
  {
    nombre: 'Miguel',
    edad: 35,
  },
  {
    nombre: 'Mary C.',
    edad: 29,
  },
];

const total = objParticipante.reduce(
  (accumulator, participante) => accumulator + participante.edad,
  0
);
console.log('Total: ' + total);

/*
 * Operaciones:
 * typeof: nos dice que tipo de variable es
 * NaN: no numerico
 * isNaN(): is not a number
 * toString(): para cuando tenemos numero la convertimos a string
 * .toFixed(): nos ayuda al momento de redondear o dar un formato especifico
 */
const num = 20.1564;
console.log(typeof num);
console.log(num.toFixed(2));

/*
 * Strings
 * que operaciones:
 * concatenar textos
 * template literals
 * typeof
 * .length
 * .includes
 * .slice(start, end)
 * .replace('este tecto', 'por este otro')
 * trim()
 * split(',')
 */

// concatenacion simple
console.log('hello ' + 'world');

// template literals
const user = 'Miguel';
console.log(`Hello ${user}`);

// typeof
console.log(typeof user);

// longitud
console.log(user.length);

// includes: comprueba si el texto del parametro esta incluido
console.log(user.includes('l'));

// slice: cortar el texto
console.log(user.slice(2, 4));

// replace
console.log(user.replace('el', 'elon'));

// trim: para limpiar los espacios de mas
const texto = '  este   es un  texto con espacio al inicio    y al final      ';
console.log(texto.trim());

// split: divide la cadena y genera un array
const lenguaje = 'python,java,javascript,typescript';
const lenguajes = lenguaje.split(',');
console.log(lenguajes);
const objLenguajes = lenguajes.reduce(
  (acc, el) => ({
    ...acc,
    [el]: el,
  }),
  {}
);
console.table(lenguajes);
console.table(objLenguajes);

/* Tipo Booleanos
 * retornan false => NaN, null, undefined
 * undefined: ausencia de valor, es decir, esta definida pero no tiene valor asociado
 * null: la variable esta definida pero su valor es nulo
 * si aplicamos el typeof a null nos resulta un object y si aplicamos al undefined no da undefined
 */
let variable;
console.log(variable);

const esNull = null;
console.log(typeof esNull);

const symbol1 = Symbol('a');
const symbol2 = Symbol('b');
console.log(typeof symbol1);
console.log(symbol1 === symbol2);
