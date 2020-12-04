// Para declarar como privada una propiedad debemos de usar '#' delante de las variables
// por ejemplo  tenemos una propiedad calculada 'area' la cual no debe de ser 'seteada'
class Rectangulo {
  #area = 0;
  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
    this.#area = this.base * this.altura;
  }
}

const rectangulo = new Rectangulo(10, 2);
// cuando intentemos asignarle un valor no podremos a través del objeto(instancia)
console.log(rectangulo);
