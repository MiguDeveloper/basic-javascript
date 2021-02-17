const promesa = new Promise((res, rej) => {
  if (true) {
    res('La operación fue un éxito');
  } else {
    rej('Ocurrió un error');
  }
});

promesa
  .then((rpta) => {
    console.log('Response: ', rpta);
  })
  .catch((err) => console.log('Error: ', err));

const promesa1 = new Promise((res, rej) => {
  res('Primera promesa resuelta');
});

const promesa2 = new Promise((res, rej) => {
  setTimeout(() => {
    res('Segunda promesa resuelta');
  }, 1000);
});

const promesa3 = new Promise((res, rej) => {
  setTimeout(() => {
    res('Tercera promesa resuelta');
  }, 3000);
});

const promesa4 = new Promise((res, rej) => {
  setTimeout(() => {
    res('Cuarta promesa resuelta');
  }, 4000);
});

const promesa5 = Promise.resolve('Quinta promesa resuelta');

// usando async - await
const promesasFun = async () => {
  const [prom1, prom2, prom3, prom4, prom5] = await Promise.all([
    promesa1,
    promesa2,
    promesa3,
    promesa4,
    promesa5,
  ]);

  console.log({ prom1, prom2, prom3, prom4, prom5 });
};

promesasFun();

// usando then()

/*
Promise.all([
  promesa1,
  promesa2,
  promesa3,
  promesa4,
  promesa5,
]).then(([prom1, prom2, prom3, prom4, prom5]) =>
  console.log({ prom1, prom2, prom3, prom4, prom5 })
);*/
