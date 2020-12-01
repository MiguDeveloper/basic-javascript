const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje; // Abierto, Cerrado, 'Hoy abrimos a las XX'

//if (dia === 0 || dia === 6) {
/*
if ([0, 6].includes(dia)) {
  console.log('fin de semana');
  horaApertura = 9;
} else {
  console.log('dia de semana');
  horaApertura = 11;
}
*/

horaApertura = [0, 6].includes(dia) ? 9 : 11;

/*
if (horaActual >= horaApertura) {
  mensaje = 'Abierto';
} else {
  mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
}
*/

mensaje =
  horaActual >= horaApertura
    ? 'Abierto'
    : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ mensaje, horaApertura });
