// javascript no soporta multiple constructores
class Persona {
  static proObjeto({ nombre, persona, pais }) {
    return new Persona(nombre, persona, pais);
  }
  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`info: ${this.nombre}, ${this.apellido} ${this.pais}`);
  }
}

const nombre1 = 'Miguel',
  apellido1 = 'Chinchay',
  pais1 = 'Perú';

const persona = {
  nombre: 'Mario',
  apellido: 'Vargas',
  pais: 'Perú',
};
const persona1 = new Persona(nombre1, apellido1, pais1);
persona1.getInfo();
const persona2 = Persona.proObjeto(persona);
persona2.getInfo();
