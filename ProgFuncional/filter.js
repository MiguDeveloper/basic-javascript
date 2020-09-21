// filter: genera un nuevo arreglo con igual o menor nuemero de elementos
// del arreglo principal
const numeros = [1, 2, 3, 4, 5];

const mascotas = [
  { nombre: 'Pelusa', edad: 12, tipo: 'gato' },
  { nombre: 'Spike', edad: 12, tipo: 'perro' },
  { nombre: 'pulga', edad: 10, tipo: 'perro' },
  { nombre: 'Peluchin', edad: 3, tipo: 'perro' },
];

const numerosFiltados = numeros.filter((item) => item < 5);
console.log(numerosFiltados);

const soloPerros = mascotas.filter((mascota) => mascota.tipo === 'perro');
console.log(soloPerros);
