const miModulo = (() => {
  'use strict';

  /*
   * 2C: Trebol (two of club)
   * 2D: Diamantes (Diamonds)
   * 2H: Corazones (hearts)
   * 2S: Espadas (Spades)
   */

  let deck = [],
    puntosJugadores = [];

  const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'],
    htmlBtnPedir = document.querySelector('#btnPedir'),
    smallPuntosHtml = document.querySelectorAll('small'),
    htmlBtnDetener = document.querySelector('#btnDetener'),
    htmlBtnNuevoJuego = document.querySelector('#btnNuevo'),
    htmlDivCartasJugadores = document.querySelectorAll('.div-cartas');

  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    puntosJugadores = [];
    for (let idx = 0; idx < numJugadores; idx++) {
      puntosJugadores.push(0);
    }
    smallPuntosHtml.forEach((elem) => (elem.innerText = 0));
    htmlDivCartasJugadores.forEach((elem) => (elem.innerHTML = ''));

    htmlBtnPedir.disabled = false;
    htmlBtnDetener.disabled = false;
  };

  const crearDeck = () => {
    deck = [];
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

    return _.shuffle(deck);
  };

  // Solicitar una carta
  const solicitarCarta = () => {
    if (deck.length === 0) {
      throw 'No hay cartas en la baraja';
    }
    return deck.pop();
  };

  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
  };

  const determinarGanador = () => {
    const [puntajeMinimo, puntosComputadora] = puntosJugadores;
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

  // turno 0: primer jugador ... last: computadors
  const acumularPunto = (carta, turno) => {
    puntosJugadores[turno] += valorCarta(carta);
    smallPuntosHtml[turno].innerText = puntosJugadores[turno];

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    htmlDivCartasJugadores[turno].append(imgCarta);

    return puntosJugadores[turno];
  };

  const turnoComputadora = (puntajeMinimo) => {
    let puntosComputadora = 0;
    do {
      const carta = solicitarCarta();
      puntosComputadora = acumularPunto(carta, puntosJugadores.length - 1);
    } while (puntosComputadora < puntajeMinimo && puntajeMinimo <= 21);
    determinarGanador();
  };

  htmlBtnPedir.addEventListener('click', () => {
    const carta = solicitarCarta();
    acumularPunto(carta, 0);

    if (puntosJugadores[0] > 21) {
      accionDetener();
      turnoComputadora(puntosJugadores[0]);
    } else if (puntosJugadores[0] === 21) {
      accionDetener();
      turnoComputadora(puntosJugadores[0]);
    }
  });

  const accionDetener = () => {
    htmlBtnPedir.disabled = true;
    htmlBtnDetener.disabled = true;
  };

  htmlBtnDetener.addEventListener('click', () => {
    htmlBtnPedir.disabled = true;
    htmlBtnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
  });

  htmlBtnNuevoJuego.addEventListener('click', () => {
    inicializarJuego(2);
  });

  // solo sera publico lo que retornemos del modulo(todo es privado)
  return { nuevoJuego: inicializarJuego };
})();
