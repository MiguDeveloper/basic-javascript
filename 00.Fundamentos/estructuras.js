// Estructuras de control
let a = 5;
if (a < 5) {
  console.log('menor a 5');
} else {
  console.log('mayor o igual a 5');
}

const fecha = new Date();
const dia = fecha.getDay();
const diasObj = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado',
};
const dias = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];
console.log('hoy es: ', dias[dia] || 'Día no definido');
console.log('hoy es: ', diasObj[dia] || 'Día no definido');
