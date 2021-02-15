const fetch = require('node-fetch');

const arr = [
  { id: 1, title: 'Iron man', anioEstreno: 2008 },
  { id: 2, title: 'Spiderman', anioEstreno: 2017 },
  { id: 3, title: 'Avengers', anioEstreno: 2019 },
];

const getDatos = () => {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) {
      reject(new Error('No existen datos'));
    }
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  });
};

getDatos()
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));

// ahora con await nos da la impresion de hacerlo de una manera secuencial

const fetching = async () => {
  try {
    const datos = await getDatos();
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
};

fetching();

const p1 = Promise.resolve(1);
console.log(p1);

p1.then((x) => x + 5)
  .then((x) => Promise.resolve(x + 5))
  .then((x) => Promise.reject('Algo sucedio mal'))
  .then((x) => console.log('Esto no se va a llamar'))
  .catch((err) => console.log(err));

const delayed = (x) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });

delayed(100).then((x) => console.log(x));

// probando con la api de jsonplaceholder
/*
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
fetch(apiUrl, { method: 'GET' })
  .then((resp) => resp.json())
  .then((data) => console.log(data));
*/
// complementando la teoria de promesas
const param1 = 10;
const pro1 = new Promise((res, rej) => {
  if (param1 === 10) {
    res('La variable es igual a 10');
  } else {
    rej('La variable no es igual a 10');
  }
});

pro1.then((x) => console.log(x)).catch((err) => console.log(err));
