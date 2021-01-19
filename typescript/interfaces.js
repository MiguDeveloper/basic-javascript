"use strict";
const enviarMision = (xmen) => {
    console.log(`Enviando a ${xmen.nombre} a la misión`);
};
const wolverine = {
    nombre: "Logan",
    edad: 60,
};
enviarMision(wolverine);
class Avenger {
    constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
}
const antman = new Avenger('ironman', 'avenger', 'iron', true, 4);
