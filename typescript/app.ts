(function () {
  function saludar(nombre: string) {
    console.table(`Hola ${nombre}`); // Templates literales
  }

  const wolverine = {
    nombre: "Logan",
  };

  saludar(wolverine.nombre);

  let mensaje = "Hola";

  // Aqui aplicamos el scope el cual nos proporciona typescript
  if (true) {
    let mensaje = "Mundo";
  }

  console.log(mensaje);

  const nombre1 = "Miguel";
  const salida = `${nombre1} ${edad()}`;

  console.log(salida);

  function edad() {
    return 100 + 20 + 12;
  }

  // Parametros opciones, obligatorios, por defecto
  function activar(
    quien: string,
    objeto: string = "batiseñal",
    momento?: string
  ) {
    if (momento) {
      console.log(`${quien} activó la ${objeto} en la ${momento}.`);
    } else {
      console.log(`${quien} activó la ${objeto}`);
    }
  }

  activar("Gordon");

  // Desustructuracion de clases
  const avenger = {
    nombre: "Steve",
    clave: "Capitan america",
    poder: "Droga",
  };

  const { nombre, clave, poder } = avenger;

  console.log(nombre);
  console.log(clave);
  console.log(poder);

  // lo podemoa aplicar en funciones
  function testConFunciones({ nombre, poder }: any) {
    console.log(nombre);
    console.log(poder);
  }

  // Desestructuracion de arreglos
  const avengers: string[] = ["Thor", "Iroman", "Spiderman"];

  // Forma mas optima si es  q se sabe el orden
  const [primero, segundo, tercero] = avengers;
  console.log(primero);
  console.log(segundo);
  console.log(tercero);

  // Forma normal
  console.log(avengers[0]);
  console.log(avengers[1]);
  console.log(avengers[2]);

  // promesas
  const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Se termino el timeout");
    }, 1000);
  });

  promesa1
    .then((mensaje) => console.log(mensaje))
    .catch((err) => console.warn(err));

  const retirarDinero = (montoRetirar: number): Promise<number> => {
    let dineroActual = 1000;
    return new Promise((resolve, reject) => {
      if (montoRetirar > dineroActual) {
        reject("No hay suficiente saldo");
      } else {
        dineroActual -= montoRetirar;
        resolve(dineroActual);
      }
    });
  };

  retirarDinero(500)
    .then((montoActual) => console.log(`Me queda ${montoActual}`))
    .catch((err) => console.warn(err));
});
