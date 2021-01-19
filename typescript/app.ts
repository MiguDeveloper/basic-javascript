// ejecutar en consola => tsc -w
(function () {
  // tipos de datos
  let cadena: string = 'Miguel';
  let numero: number = 234;
  let booleano: boolean = true;
  let hoy: Date = new Date();

  // cuidado con las variables de tipo any, ya que soportan todos los tipos de datos
  let variableAny;
  variableAny = cadena;
  variableAny = numero;
  variableAny = booleano;
  // si queremos que acepte distintos tipos de variable podemos usar el pipe
  let variebleMulti: string | number | boolean;

  let superheroe = {
    nombre: 'miguel',
    edad: 36,
  };

  // uso de templates literales
  function saludar(nombre: string) {
    console.table(`Hola ${nombre}`); // Templates literales
  }

  const wolverine = {
    nombre: 'Logan',
  };

  saludar(wolverine.nombre);

  let mensaje = 'Hola';

  // Aqui aplicamos el scope el cual nos proporciona typescript
  if (true) {
    let mensaje = 'Mundo';
  }

  console.log(mensaje);

  // Dentro de los templates literales tambien podemos llamar a funciones
  function edad() {
    return 100 + 20 + 12;
  }
  const nombre1 = 'Miguel';
  const salida = `${nombre1} ${edad()}`;
  console.log(salida);

  // Parametros obligatorios, por defecto, opcionales
  function activar(
    quien: string,
    objeto: string = 'batiseñal',
    momento?: string
  ) {
    if (momento) {
      console.log(`${quien} activó la ${objeto} en la ${momento}.`);
    } else {
      console.log(`${quien} activó la ${objeto}`);
    }
  }

  activar('Gordon');

  // funciones de flecha
  const miFuncion = (a: string) => a.toUpperCase();
  const sumar = (a: number, b: number) => a + b;

  // ejemplo con el puntero this, la funciones de flecha no modifican a donde apunta
  // el puntero this
  const hulk = {
    nombre: 'hulk',
    smash() {
      setTimeout(() => {
        console.log(`${this.nombre} smash!!!`);
      }, 1000);
    },
  };

  hulk.smash();

  // Desustructuracion de clases
  const avenger = {
    nombre: 'Steve',
    clave: 'Capitan america',
    poder: 'Droga',
  };

  const { nombre, clave, poder } = avenger;

  console.log(nombre);
  console.log(clave);
  console.log(poder);

  // lo podemoa aplicar en funciones
  function testConFunciones({ nombre, poder }: any) {
    console.log('nombre: ', nombre);
    console.log('poder: ', poder);
  }

  testConFunciones(avenger);

  // Desestructuracion de arreglos
  const avengers: string[] = ['Thor', 'Iroman', 'Spiderman'];

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
      resolve('Se termino el timeout');
    }, 1000);
  });

  promesa1
    .then((mensaje) => console.log(mensaje))
    .catch((err) => console.warn(err));

  const retirarDinero = (montoRetirar: number): Promise<number> => {
    let dineroActual = 1000;
    return new Promise((resolve, reject) => {
      if (montoRetirar > dineroActual) {
        reject('No hay suficiente saldo');
      } else {
        dineroActual -= montoRetirar;
        resolve(dineroActual);
      }
    });
  };

  retirarDinero(500)
    .then((montoActual) => console.log(`Me queda ${montoActual}`))
    .catch((err) => console.warn(err));

  // interfaces
  interface Heroe {
    nombre: string;
    edad: number;
  }

  const enviarMision = (heroe: Heroe) => {
    console.log(`Enviando mision a ${heroe.nombre}`);
  };
  const enviarMisionDesestructuracion = ({ nombre }: any) => {
    console.log(`Desestructuracion Enviando mision a ${nombre}`);
  };
  const Spider: Heroe = {
    nombre: 'Miguel',
    edad: 36,
  };
  enviarMision(Spider);
  enviarMisionDesestructuracion(Spider);

  // Clases
  /*
  class AvengerClase {
    nombre: string;
    equipo: string;
    nombreReal: string;
    puedePelear: boolean;
    peleasGanadas: number;
    constructor(
      nombre: string,
      equipo: string,
      nombreReal: string,
      puedePelear: boolean,
      peleasGanadas: number
    ) {
      this.nombre = nombre;
      this.equipo = equipo;
      this.nombreReal = nombreReal;
      this.puedePelear = puedePelear;
      this.peleasGanadas = peleasGanadas;
    }
  }
*/

  class AvengerClase {
    constructor(
      public nombre: string,
      public equipo: string,
      public nombreReal: string,
      public puedePelear: boolean,
      public peleasGanadas: number
    ) {}
  }
  const antman = new AvengerClase('antman', 'Capi', 'Scott', true, 2);
  console.log(antman);
})();
