// todas las clases tienne habilitado el 'use strict'
/*
 * recordar que cuando tenemos Gets: no tiene que tener parametros y cuando las llamemos
 * no es necesario usar los parentesis como una funcion normal
 * set: no es necesario usar los parentesis como una funcion normal
 */
class PersonaNatural {
  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  static _conteo = 0;

  constructor(
    nombre = 'sin nombre',
    codigo = 'sin codigo',
    frase = 'sin frase'
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    console.log('instancia iniciada');
    PersonaNatural._conteo++; // contamos las instancias creadas por ello no usamos el 'this'
  }

  static get conteo() {
    return `${PersonaNatural._conteo} instancias`;
  }

  static mensaje() {
    console.log('Hola soy un metodo "static"');
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    console.log(`${this.codigo} dice ${this.frase}`);
  }
}

const ironman = new PersonaNatural('Tony Stark', 'Ironman', 'Yo soy Ironman');
const spiderman = new PersonaNatural(
  'Peter parker',
  'Spiderman',
  'Soy tu amigable vecino spiderman'
);
ironman.quienSoy();
ironman.miFrase();

spiderman.quienSoy();
// Importante: tambien es posible y lograria chancar: spiderman.comida = 'Pizza';
spiderman.setComidaFavorita = 'El pie de cereza de la tia May';

console.log(spiderman);
console.log(spiderman.getComidaFavorita);

/* Uso del 'static'
 * recordemos que cuando se trabaja con 'static' no se esta trabajando con una instancia por
 * lo tanto "no tendremos" acceso a todas las propiedades(si podremos acceder pero no tendran
 * ningun valor) recordar que se esta trabajando con la estructura, propiedades y metodos
 * estaticos
 */
console.log(`conteo: ${PersonaNatural._conteo}`);
console.log(PersonaNatural.conteo);
PersonaNatural.mensaje();
