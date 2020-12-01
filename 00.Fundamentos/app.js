// Clasico 'Hello wordl' de todo lenguaje
console.log('Hello wordl');
console.warn('message wanr');
console.error('message error');
console.info('message info');

// error clasico de hoisting
console.log(variableHoisting);

// Método para imprimir texto en el html
document.write('Hola Miguel');
//debugger;
console.log('After debuger');

// variables globales
const whatever = 'whatever';
console.log(whatever);
// variables locales
if (true) {
  const helloWorld = 'hello world';
  console.log(helloWorld);
}
/*
 * tipos de variables: siemore es buena practica declarar una variable con let, const o var
 * pero nunca de esta manera 'b=10'
 * var: evitar el uso de este tipo(foma antigua, pero todavia es valida)
 * 'var' siempre parte del objeto window
 * const: son mas ligeras al no tener tantos metodos como el 'let', ademas no cambian su valor
 * y siempre el navegador nos dara como error si intentamos modificarla
 * let: son aquellas que por el contrario, si pueden variar su valor
 * IMPORTANTE: 'let' y 'const' no sobreescriben las variables del objeto window
 * undefined: quiere decir que no se le a asignado un valor
 */

let a1 = 10;
var b1 = 10;
const c1 = 10;

// Creación de variables en linea, mas de una
let a = 10,
  b = 10,
  c = 29,
  d = a + b,
  e = 'whater';

console.log(d);
console.log('a', a);
console.log('b', b);
console.log('c', c);

// otra opcion es:
console.log({ a });
console.log({ b });
console.log({ c });

/* 'console.table': nos va a mostrar una table con las columnas: 'index', 'value',
 * con el table podemos usar [] o {}
 * [] nos mostrara los indices en la columna 'index'
 * {} nos mostrara las claves en la columna 'index'
 */
console.table({ a, b, c, d, e });

/* Cuando creemos nuestras carpetas que contendra nuestros Js es recomendable la sigueinte:
 * estructura:
 * assets > js (Para todos los javascript)
 * assets > css (para las hojas de estilo)
 */

var variableVar = 'declado con var';

let outerHeight = 100;

var variableHoisting = 'Miguel';
console.log('////////////////////');
console.log(whatever2);
var whatever2 = 'whatever';
console.log(whatever2);

// Arreglos
let conTamanio = new Array(11);
let videoJuegos = []; // inicializado sin elementos
let cosas = [
  true,
  123,
  'Miguel',
  2 * 3,
  function () {},
  () => {},
  { a: 1 },
  ['X', 'Megaman', 'Zero', 'Dr. Light', ['Dr. willy', 'Woodman']],
];

// Accediendo a posiciones dentro de un arreglo
console.log(cosas[7][4][1]);

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Tamanio arreglo', juegos.length);
let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1];
console.log(primero, ultimo);
juegos.forEach((elemento, indice, array) => {
  console.log({ elemento, indice, array });
});

// agregamos un nuevo elemento al array, nos retorna la nueva longitud
let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos });

// agregamos un elemento al inicio del array y nos retorna la nueva longitud
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

// retiramos un elemento del arreglo y nos retorna el elemento eliminado
const itemRemoved = juegos.pop();
console.log({ itemRemoved, juegos });

console.log(juegos);
// Eliminar elementos de un array
let juegosBorrados = juegos.splice(1, 2);
console.log({ juegosBorrados, juegos });

// Retornar el indice de un elemento que estemos buscando
let idxMetroid = juegos.indexOf('Metroid');
console.log({ idxMetroid });

// *************** OBJETOS LITERALES ***************
let personaje = {
  nombre: 'Tony stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  cords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu california',
  },
  'ultima-pelicula': 'Infinity war', // aqui aplicamos la notacion de corchete
};
console.log(personaje);
console.log('Nombre', personaje.nombre); // notación punto
console.log('Nombre', personaje['nombre']); // notación de corchete
console.log('Edad', personaje.edad);

console.log('Cords', personaje.cords);
console.log('Lat', personaje.cords.lat);

console.log('Nro. trajes', personaje.trajes.length);
console.log('último traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
// uso notacion de corchete: nos sirve en este caso ya que no podiamos hacer los sgte:
// ERROR: peronsaje.ultima-pelicula
console.log('ultima pelicula', personaje['ultima-pelicula']);

// Eliminando propiedades de un objeto
delete personaje.edad;
console.log(personaje);

// agregar propiedad: solo ponemos directamente la propiedad
personaje.casado = true;

// obtener un array de las clave valor del objeto
const entiresPares = Object.entries(personaje);
console.log(entiresPares);

// Impedir que se pueda cambiar los valores del objeto: Ojo solo de las propiedades
// como string, booleanos ya que las que son objetos si prodremos modificarlas
// a menos que le apliquemos el 'freeze' tambien a esa propiedad
Object.freeze(personaje);
personaje.dinero = 1000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Lima-Perú'; // ejemplo de no freeze aplicado
console.log(personaje);

// obtener las propiedades del objeto
const propiedades = Object.getOwnPropertyNames(personaje);
console.log({ propiedades });

const valores = Object.values(personaje);
console.log(valores);
