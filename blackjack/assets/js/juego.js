/*
 * 2C: Trebol (two of club)
 * 2D: Diamantes (Diamonds)
 * 2H: Corazones (hearts)
 * 2S: Espadas (Spades)
 */

let deck = [],
  puntosJugador = 0,
  puntosComputadora = 0;

const tipos = ['C', 'D', 'H', 'S'],
  especiales = ['A', 'J', 'Q', 'K'],
  cartasJugador = [],
  htmlBtnPedir = document.querySelector('#btnPedir'),
  smallPuntosHtml = document.querySelectorAll('small'),
  divJugadorCartas = document.querySelector('#jugador-cartas'),
  divComputadoraCartas = document.querySelector('#computadora-cartas'),
  htmlBtnDetener = document.querySelector('#btnDetener'),
  htmlBtnNuevoJuego = document.querySelector('#btnNuevo');

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
  return carta;
};

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};

htmlBtnPedir.addEventListener('click', () => {
  const carta = solicitarCarta();
  puntosJugador += valorCarta(carta);
  smallPuntosHtml[0].innerText = puntosJugador;

  const imgCarta = document.createElement('img');
  imgCarta.classList.add('carta');
  imgCarta.src = `assets/cartas/${carta}.png`;
  divJugadorCartas.append(imgCarta);

  if (puntosJugador > 21) {
    accionDetener();
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    accionDetener();
    turnoComputadora(puntosJugador);
  }
});

const turnoComputadora = (puntajeMinimo) => {
  do {
    const carta = solicitarCarta();
    puntosComputadora += valorCarta(carta);
    smallPuntosHtml[1].innerText = puntosComputadora;

    const imgCarta = document.createElement('img');
    imgCarta.classList.add('carta');
    imgCarta.src = `assets/cartas/${carta}.png`;
    divComputadoraCartas.append(imgCarta);
    if (puntajeMinimo > 21) {
      break;
    }
  } while (puntosComputadora < puntajeMinimo && puntajeMinimo <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntajeMinimo) {
      alert('Nadie gana :(');
    } else if (puntajeMinimo > 21) {
      alert('Computadora gana');
    } else if (puntosComputadora > 21) {
      alert('Jugador gana');
    } else {
      alert('Computador gana');
    }
  }, 1000);
};

const accionDetener = () => {
  htmlBtnPedir.disabled = true;
  htmlBtnDetener.disabled = true;
};

htmlBtnDetener.addEventListener('click', () => {
  htmlBtnPedir.disabled = true;
  htmlBtnDetener.disabled = true;
  turnoComputadora(puntosJugador);
});

htmlBtnNuevoJuego.addEventListener('click', () => {
  deck = [];
  deck = crearDeck();

  puntosComputadora = 0;
  puntosJugador = 0;

  smallPuntosHtml[0].innerText = 0;
  smallPuntosHtml[1].innerText = 0;

  htmlBtnPedir.disabled = false;
  htmlBtnDetener.disabled = false;

  divComputadoraCartas.innerHTML = '';
  divJugadorCartas.innerHTML = '';
});
