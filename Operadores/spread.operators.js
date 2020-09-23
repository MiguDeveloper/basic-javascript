// ejemplo spread
const multiplica = (a, b, c) => a * b * c;
const numeros = [4, 5, 6];

console.log(multiplica(2, 3, 4));
console.log(multiplica(...numeros));

// podemos usarlo para clonar los array, como vemos podemos combinarlo y agregar
// mas elementos pero el operador con la variable deben ir al inicio o al final
const numerosCopy = [1, 2, 3, ...numeros];
console.log(numeros);
console.log(numerosCopy);

// podemos crear uno nuevo
const unionArrays = [...numeros, ...numerosCopy];
console.log(unionArrays);

// podemos tambien clonar objetos y no hacerlo por referencia
const persona = { nombre: 'Miguel', edad: 36 };
const persona2 = { ...persona };
persona2.frontend = true;

const persona3 = { frontend: true, ...persona };
const persona4 = { frontend: true, backend: true };
const persona5 = { ...persona, ...persona4 };

console.log(persona);
console.log(persona2);
console.log(persona3);
console.log(persona5);
