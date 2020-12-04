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

// Cuando heredamos debemos de tener en cuenta que el 'this' en el constructor debe ir
// despues del metodo 'super()', sino nos dara erro
class Heroe extends PersonaNatural {
  clan = 'Sin clan';

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);
    this.clan = 'Los Avengers';
  }

  // si sobreescribimos un metodo y queremos acceder al metodo del padre
  // hacemos lo siguiente
  quienSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    // Accedemos al metodo del padre
    super.quienSoy();
  }
}

const spiderman = new Heroe(
  'Peter parker',
  'Spiderman',
  'Soy tu amigable vecino spiderman'
);

console.log(spiderman);
spiderman.quienSoy();
