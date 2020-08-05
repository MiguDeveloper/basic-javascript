const enviarMision = (xmen: Xmen) => {
  console.log(`Enviando a ${xmen.nombre} a la misión`);
};

const wolverine = {
  nombre: "Logan",
  edad: 60,
};

enviarMision(wolverine);

// una interface no tiene constructures
interface Xmen {
  nombre: string;
  edad: number;
}

class Avenger {
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

const antman = new Avenger('ironman', 'avenger', 'iron', true, 4);
