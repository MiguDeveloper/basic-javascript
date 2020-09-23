// Map genera un nuevo arreglo con la misma longitud del arreglo principal
const numeros = [1, 2, 3, 4, 5];
const multiplicados = numeros.map((numero) => numero * 2);
console.log(multiplicados);
console.log(numeros);
const parejas = numeros.map((numero) => [numero, numero]);
console.log(parejas);

const mascotas = [
  { nombre: 'Pelusa', edad: 12, tipo: 'gato' },
  { nombre: 'Spike', edad: 12, tipo: 'perro' },
  { nombre: 'pulga', edad: 10, tipo: 'perro' },
  { nombre: 'Peluchin', edad: 3, tipo: 'perro' },
];

const edades = mascotas.map((mascota) => mascota.edad);
const sumaEdades = edades.reduce((acc, edad) => acc + edad, 0);
console.log(sumaEdades / edades.length);

const almuerzos = [
  { principal: 'arepa', postre: 'helado' },
  { principal: 'tacos', postre: 'torta de queso' },
  { principal: 'pizza', postre: 'gallteas' },
  { principal: 'sushi', postre: 'quesillo' },
];

const principales = almuerzos.map((almuerzo) => almuerzo.principal);
console.log(principales);
