// las funciones deben de realizar una labor especifica y centralizan una logica

// parametro por defecto
// si a las funciones clasicas le mandamos mas de un parametro lo recibira en la
// propiedad 'arguments' de la siguente manera
function sayHello(nombre = 'Miguel') {
  console.log(arguments);
  console.log(`Hello ${nombre}`);
}

sayHello();
sayHello('Abrahan');
sayHello('Martin', 30, true);
/* Forma recomendada de declarar una funcion:
 * const sayHello = function (){ console.log('hola mundo')}
 * una de las principales motivos de ponerlo como const y declarar de esta forma una
 * funcion es que evitamos sobreescribirla, es decir, que pongamos un 'var' y modifiquemos
 * la funcion de esta manera:
 * var sayHello = 123;
 */

// Funciones anonimas
const say = function () {};

// funciones flecha son muy parecidas a las funciones anonimas
const message = (name) => `Hello ${name}`;

console.log(message('miguel'));

const sumarF = (sumando1, sumando2) => sumando1 + sumando2;
console.log(sumarF(12, 13));

// Usando funcion normal
function getRandomId(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}
console.log(getRandomId(150));

// Usando arrow function
const getRandomIdArrowFunction = (max) =>
  Math.floor(Math.random() * (max - 1) + 1);

console.log(getRandomIdArrowFunction(150));

const example1 = {
  max: 150,
  methGetRandomId: function () {
    return Math.floor(Math.random() * (this.max - 1) + 1);
  },
};

// imprime NaN ya que el this apunta al objeto contexto global Window
const example2 = {
  max: 150,
  methGetRandomId: () => {
    return Math.floor(Math.random() * this.max + 1);
  },
};

class API {
  BASE_URL = 'https://pokeapi.co/api/v2/';
  async fetchConsumeService(id) {
    const searchId = id || this.id;
    const response = await fetch(`${this.BASE_URL}pokemon/${searchId}`);
    const pokemon = await response.json();
    this.pokemon = pokemon;
  }
}

class Pokemon extends API {
  constructor(id) {
    super(id);
    this.id = id;
    // Este es un claro ejemplo en donde seria mejor usar una arrow function
    // y ya no usariamos el hack del self para referirnos al this del contexto superior
    const self = this;
    this.$type.addEventListener('click', function () {
      console.log(this);
      self.renderType();
    });
    this.$name.addEventListener('click', () => {
      console.log(this);
      this.renderName();
    });
    this.$random.addEventListener('click', () => {
      const idRandom = this.getRandomId;
      this.fetchConsumeService(idRandom).then(() => {
        this.renderName();
      });
    });
  }

  $container = document.querySelector('#container');
  $type = document.querySelector('#type');
  $name = document.querySelector('#name');
  $random = document.querySelector('#random');

  get getRandomId() {
    return Math.floor(Math.random() * (150 - 1) + 1);
  }
  renderName() {
    this.$container.textContent = `Pokemon encontrado ${this.pokemon.name}`;
  }
  renderType() {
    this.$container.textContent = `Es de tipo ${this.pokemon.types[0].type.name}`;
  }
}

const pokemon = new Pokemon(66);
pokemon.fetchConsumeService().then(() => {
  pokemon.renderName();
});

console.log('ejemplo con clases:');
console.log(example1.methGetRandomId());
console.log(example2.methGetRandomId());
