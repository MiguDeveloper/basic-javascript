const usuarios = [
  { id: 1, nombre: 'Miguel' },
  { id: 2, nombre: 'Lena' },
];

const telefonos = [
  { id: 1, telefono: '53636842' },
  { id: 2, telefono: '86949426' },
];

const edades = [
  { id: 1, edad: 10 },
  { id: 2, edad: 20 },
];

const obtenerUsuario = (id) => {
  return new Promise((resolve, reject) => {
    if (usuarios.find((usuario) => usuario.id === id)) {
      console.log('El usuario existe');
      resolve(obtenerTelefono(id));
    } else {
      reject('El usuario no existe');
    }
  });
};

const obtenerTelefono = (id) => {
  return new Promise((resolve, reject) => {
    if (telefonos.find((telefono) => telefono.id === id)) {
      console.log('El telefono si existe');
      resolve(obtenerEdad(id));
    } else {
      reject('El telefono no existe');
    }
  });
};

const obtenerEdad = (id) => {
  return new Promise((resolve, reject) => {
    const edad = edades.find((edad) => edad.id === id);
    if (edad) {
      resolve(`El usuario tiene ${edad.edad} años`);
    } else {
      reject('La edad no existe');
    }
  });
};

obtenerUsuario(2)
  .then((resp) => resp)
  .then((resp) => resp)
  .then((resp) => console.log(resp))
  .catch(console.log);

const obtenerUsuario2 = (id, callback, error) => {
  if (usuarios.find((usuario) => usuario.id === id)) {
    console.log('El usuario existe');
    callback(id);
  } else {
    error('el usuario no existe');
  }
};

const obtenerTelefono2 = (id, callback, error) => {
  if (telefonos.find((telefono) => telefono.id === id)) {
    console.log('El telefono si existe');
    callback(id);
  } else {
    error('El telefono no existe');
  }
};

const obtenerEdad2 = (id, callback, error) => {
  const edad = edades.find((edad) => edad.id === id);
  if (edad) {
    callback(`El usuario tiene ${edad.edad} años`);
  } else {
    error('No se encontro la edad');
  }
};

obtenerUsuario2(
  2,
  (id) => {
    obtenerTelefono2(
      id,
      (respTelefono) => {
        obtenerEdad2(
          respTelefono,
          (resEdad) => {
            console.log(resEdad);
          },
          (errorEdad) => {
            console.log(errorEdad);
          }
        );
      },
      (errorTelefono) => {
        console.log(errorTelefono);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
