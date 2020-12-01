const elMayor = (a, b) => (a > b ? a : b);
const tieneMembresia = (miembro) => (miembro ? '2 dolares' : '10 dolares');

console.log(elMayor(20, 15));
console.log(tieneMembresia(true));

const amigo = false;
const amigos = [
  'Peter',
  'Tony',
  'Dr. Strange',
  amigo ? 'Thor' : 'Loki',
  (() => 'Nick Fury')(),
  elMayor(10, 15),
]; // ejemplo de funcion anonima autoinvocada ()()

console.log(amigos);

const nota = 82.5;
const resultado =
  nota >= 95
    ? 'A+'
    : nota >= 90
    ? 'A'
    : nota >= 85
    ? 'B+'
    : nota >= 80
    ? 'B'
    : nota >= 75
    ? 'C+'
    : nota >= 70
    ? 'C'
    : 'F';

console.log({ nota, resultado });
