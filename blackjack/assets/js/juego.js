/*
 * 2C: Trebol (two of club)
 * 2D: Diamantes (Diamonds)
 * 2H: Corazones (hearts)
 * 2S: Espadas (Spades)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
const cartasJugador = [];

const crearDeck = () => {
  for (let nroCarta = 2; nroCarta < 11; nroCarta++) {
    for (const tipo of tipos) {
      deck.push(`${nroCarta}${tipo}`);
    }
  }

  for (const especial of especiales) {
    for (const tipo of tipos) {
      deck.push(`${especial}${tipo}`);
    }
  }
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};

crearDeck();

// Solicitar una carta
const solicitarCarta = () => {
  if (deck.length === 0) {
    throw 'No hay cartas en la baraja';
  }
  const carta = deck.pop();
  cartasJugador.push(carta);
  console.log(deck);
  console.log(cartasJugador);
  return carta;
};

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};
const valor = valorCarta(solicitarCarta());
console.log({ valor });
