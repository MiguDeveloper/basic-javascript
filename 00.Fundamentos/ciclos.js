// Ciclo: while
const carros = ['Ford', 'Mazda', 'Toyota', 'Honda'];
let posicion = 0;

/* Forma clasica
while (posicion < carros.length) {
  console.log(carros[posicion]);
  posicion++;
}
*/

// retorna 'false' => undefined, null
/* Forma mas legible
while (carros[posicion]) {
  console.log(carros[posicion]);
  posicion++;
}
*/

// Recordar que tambié podemo aplicar el 'break' y 'continue' ojo no olvidar en el continue
// poner el incrementador
while (carros[posicion]) {
  if (posicion === 1) {
    posicion++; // ojo importante cuando se usa un continue
    continue;
  }
  console.log(carros[posicion]);
  posicion++;
}

// Ciclo: do while
let idx = 0;
do {
  console.log(carros[idx]);
  idx++;
} while (carros[idx]);

// ciclo: For
const heroes = ['Batman', 'Superman', 'Mujer maravilla', 'Aquaman'];
for (let index = 0; index < heroes.length; index++) {
  const element = heroes[index];
  console.log(element);
}

for (const idx in heroes) {
  if (heroes.hasOwnProperty(idx)) {
    const element = heroes[idx];
    console.log(element);
  }
}

for (const heroe of heroes) {
  console.log(heroe);
}
