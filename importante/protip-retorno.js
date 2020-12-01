function crearPersona(nombre, apellido) {
  return { nombre, apellido };
}

const crearPersonaFlecha = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Miguel', 'Chinchay');
console.log(persona);

console.log(crearPersonaFlecha('Martin', 'Adan'));

function imprimeArgumentos() {
  console.log(arguments);
}

imprimeArgumentos(10, true, false, 'fernando', 'hola');

// en la funcion de flecha no podemos usar directamente arguments pero podemos usa
// el parametro 'rest'. ojo: despues del parametro 'rest' no debe ir ningun argumento mas
// antes si y sera usados directamente, por ejemplo
const imprimeArgumentosFlecha = (edad, ...args) => {
  // console.log({ edad, args })
  return args;
};

const [casado, vivo, nombre, saludo] = imprimeArgumentosFlecha(
  10,
  true,
  false,
  'fernando',
  'hola'
);
console.log({ casado, vivo, nombre, saludo });

// desestructuracion
const { apellido } = crearPersonaFlecha('Mario', 'Vargas');
console.log({ apellido });
// si queremos cambiarle el nombre a la variable debemos de hacer los siguiente
const { apellido: nuevoApellido } = crearPersonaFlecha('Cesar', 'Vallejo');
console.log({ nuevoApellido });

// Desestructuracion
const personaje = {
  nombre: 'Tony stark 3',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(personaje);
