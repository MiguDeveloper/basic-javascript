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

const getType = (type) => {
  switch (type) {
    case 'error':
    case 0:
      return 'Error';
    case 'success':
    case 1:
      return 'success';
    case 'warning':
    case 2:
      return 'warning';
    case 'info':
    case 3:
      return 'info';
    default:
      return;
  }
};

console.log(getType('info'));
