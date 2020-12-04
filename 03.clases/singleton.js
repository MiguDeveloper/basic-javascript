// son opcionales: 'static instancia'
class Singleton {
  static instancia;
  nombre = '';

  constructor(nombre = '') {
    if (!!Singleton.instancia) {
      return Singleton.instancia;
    }
    Singleton.instancia = this;
    this.nombre = nombre;
  }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');
console.log(`Nombre de la instancia1 ${instancia1.nombre}`);
console.log(`Nombre de la instancia2 ${instancia2.nombre}`);
console.log(`Nombre de la instancia3 ${instancia3.nombre}`);
