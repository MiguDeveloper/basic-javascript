enum MessageType {
  Error = 0,
  Success = 1,
  Warning = 2,
  Info = 3,
}

type ToastType = 'success' | 'warning' | 'info' | 'error' | MessageType;

const getType = (key: ToastType) => {
  switch (key) {
    case 'error':
    case 0:
      return 'error';
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
      return 'error';
  }
};

getType('success');

class Usuario {
  nombre: string;
  edad?: number;
}

const user: Usuario = {
  nombre: 'miguel',
};
console.log(user.edad);
if (user.edad) {
  console.log('tiene edad');
} else {
  console.log('no tiene edad');
}
