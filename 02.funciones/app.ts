// las funciones deben de realizar una labor especifica

// parametro por defecto
function sayHello(nombre = 'Miguel'){
    console.log(`Hello ${nombre}`);
}

sayHello();

// Funciones anonimas
const say = function(){

}

// funciones flecha son muy parecidas a las funciones anonimas
const message = (name: string) => `Hello ${name}`;

console.log(message('miguel'));

const sumarF = (sumando1: number, sumando2: number) => sumando1 + sumando2;
console.log(sumarF(12, 13));
