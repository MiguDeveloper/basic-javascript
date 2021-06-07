const reducer = [1, 2, 3, 4, 5].reduce((acc, item) => acc + item, 0);
console.log(reducer);

const mascotas = [
  { nombre: 'Pelusa', edad: 12, tipo: 'gato' },
  { nombre: 'Spike', edad: 12, tipo: 'perro' },
  { nombre: 'pulga', edad: 10, tipo: 'perro' },
  { nombre: 'Peluchin', edad: 3, tipo: 'perro' },
];

console.time('find');
console.log(mascotas.find((mascota) => mascota.nombre === 'Peluchin').edad);
console.timeEnd('find');

console.time('reduce');
const indexed = mascotas.reduce(
  (acc, el) => ({
    ...acc,
    [el.nombre]: el,
  }),
  {}
);
console.log(indexed);
console.log(indexed['Peluchin']);
console.timeEnd('reduce');

const anidado = [1, [2, 3], 4, [5]];
const plano = anidado.reduce((acc, el) => acc.concat(el), []);
console.log(plano);

// otro ejemplo de reduce
const users = [
  {
    firstName: 'Bob',
    lastName: 'Doe',
    age: 37,
  },
  {
    firstName: 'Rita',
    lastName: 'Smith',
    age: 21,
  },
  {
    firstName: 'Rick',
    lastName: 'Fish',
    age: 28,
  },
  {
    firstName: 'Betty',
    lastName: 'Bird',
    age: 44,
  },
  {
    firstName: 'Joe',
    lastName: 'Grover',
    age: 22,
  },
  {
    firstName: 'Jill',
    lastName: 'Pill',
    age: 19,
  },
  {
    firstName: 'Sam',
    lastName: 'Smith',
    age: 22,
  },
];
/* ENUNCIADO
 * necesitamos un array de todos los nombres completos de todos los usuarios
 * pero unicamente si estan en sus 20 y si su nombre tiene mas de 10 caracteres
 */

const enRango = users.filter((user) => {
  if (
    user.age >= 20 &&
    user.age < 30 &&
    (user.firstName + ' ' + user.lastName).length >= 10
  ) {
    return user;
  }
});
const arreglo = enRango.map((item) => `${item.firstName} ${item.lastName}`);
console.log(arreglo);

// probamos con filter y map
const estanEnVeintes = (user) => user.age >= 20 && user.age < 30;
const getNombreCompleto = (user) => `${user.firstName} ${user.lastName}`;
const getMayora10Caracteres = (fullName) => fullName.length >= 10;

const usuariosFiltrados = users
  .filter(estanEnVeintes)
  .map(getNombreCompleto)
  .filter(getMayora10Caracteres);

console.log(usuariosFiltrados);

// Usando reduce
const usersFilters = users.reduce((acc, user) => {
  const fullName = getNombreCompleto(user);
  if (estanEnVeintes(user) && getMayora10Caracteres(fullName)) {
    acc = [...acc, fullName];
  }
  return acc;
}, []);

console.log(usersFilters);

// docs array
const docs = [
  {
    id: 'id-1',
    name: 'K Dilkington',
    style: 'orange',
  },
  {
    id: 'id-2',
    name: 'Lanky Fellow',
    style: 'googly',
  },
];

// result
const result = {
  'id-1': {
    id: 'id-1',
    name: 'K Dilkington',
    style: 'orange',
  },
  'id-2': {
    id: 'id-2',
    name: 'Lanky Fellow',
    style: 'googly',
  },
};

const indexado = docs.reduce(
  (acc, doc) => ({
    ...acc,
    [doc.id]: doc,
  }),
  {}
);

console.log(indexado);
console.log(indexado['id-2']);
console.log(docs);

// modificado para enviar una key especifica de indexacion
const makeMap = (docs, key) => {
  return docs.reduce((acc, doc) => {
    acc[doc[key]] = doc;
    return acc;
  }, {});
};

const newDocs = makeMap(docs, 'id');
console.log(newDocs);

const perros = [
  {
    name: 'chanchito',
    edad: 4,
    raza: 'pastor',
  },
  {
    name: 'Koda',
    edad: 6,
    raza: 'samolledo',
  },
  {
    name: 'Soli',
    edad: 7,
    raza: 'cruzado',
  },
  {
    name: 'Rigo',
    edad: 9,
    raza: 'doberman',
  },
];
/*
{
  'chanchito':{}
}
*/
const objIndexado = perros.reduce(
  (acc, curr) => ({
    ...acc,
    [curr['name']]: curr,
  }),
  {}
);

console.log(objIndexado);
console.log(objIndexado.Soli);

/*
 * EJEMPLOS PARA CALCULOS DE MIN O MAX
 */

const califications = [1, 2, 3, 4, 5];
console.log(Math.min(...califications), Math.max(...califications));

const smaller = (acc, cur) => {
  if (acc <= cur) {
    acc = cur;
  }
  return cur;
};

const min1 = califications.reduce(smaller, 0);
const min2 = califications.reduce((acc, cur) => (cur >= acc ? cur : acc), 0);
console.log(min1, min2);

/*
 * MOSTRAR LAS CIUDADES DESDE LA MAS REPETIDAD HASTA LA MENOS REPETIDA
 */

const cities = [
  'nash',
  'nash',
  'los ang',
  'nash',
  'memp',
  'barc',
  'los ang',
  'sev',
  'mad',
  'cana',
  'barc',
  'mad',
  'nash',
  'barc',
  'lon',
  'ber',
  'mad',
  'nash',
  'lon',
  'mad',
];

const objCities = {};
cities.forEach((citie) => {
  objCities[citie] = objCities[citie] ? objCities[citie] + 1 : 1;
});

const showCitiesMostFamous = (firstPosition) => {
  const objResult = cities.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: acc[cur] ? acc[cur] + 1 : 1,
    }),
    {}
  );

  return Object.keys(objResult)
    .map((citie) => ({ name: citie, rating: objResult[citie] }))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, firstPosition)
    .map((citie) => citie.name);
};

console.log(showCitiesMostFamous(5));

const arrUsers = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' },
];

const conteo = arrUsers.reduce((acc, cur) => {
  acc[cur.age] = acc[cur.age] + 1 || 1;
  return acc;
}, {});

const conteo2 = arrUsers.reduce(
  (acc, cur) => ({
    ...acc,
    [cur.age]: acc[cur.age] + 1 || 1,
  }),
  {}
);

console.log(conteo);
console.log(conteo2);
