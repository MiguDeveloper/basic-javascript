// Ojo la comparacion del switch es de (===) tipo y valor
const dia = 3;
switch (dia) {
  case 0:
    console.log('Domingo');
    break;
  case 1:
    console.log('Lunes');
    break;
  case 2:
    console.log('Martes');
    break;
  default:
    console.log('no es Domingo, lunes o martes');
    break;
}
