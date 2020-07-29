## Javascrpit básico
(Js: lenguaje de programación que nos ayuda a definir la lógica o comportamiento.)

- Lo usan como lenguaje base de librerias y frameworks
- Es utilizado en el lado front y back
- Por lo tanto se puede ejecutar en el navegador y servidor.
- Js es monohilo(solo se ejecuta una cosa a la vez), los webworkers permiten abrir hilos coordinados(con ciertas restricciones) con el main thread.
- Js es de tipado dinámico

### Estándares

- Ecmascript, es implementado en menor o mayor grado por los navegadores

### runtimes o engines

Funciones

- Parsear el código
- Optimizarlo
- Coordinar la ejecución

### Formas de incluir código javascript

```js
// como manejador de eventos
<button onclick="javascript:console.log('clic en boton')">mostrar en consola</button>
// inline
<script src="path/tujs.js"></script>
// esperar a que se parsee todo el html para ejecutarse
<script defer src="path/tujs.js"></script>
```

### Datos primitivos

- Es un dato que no es un objeto y que carece de métodos.
- Es inmutable.
- Otros nombres: Primitive data type, primitive value.
- string -> (String), numbre -> (Number), boolean -> (Boolean), null undefined, symbol(ES6 -> Symbol), object -> (Object)

### Copiar objetos sin referencia
```js
const obj1 = {nombre: 'Miguel', hobby: 'futbol'};
const obj2 = {...obj1};
// comprobacion
obj2.hobby = 'programar';
console.log(obj1);
console.log(obj2);

// Por ejemplo para array podemos hacer lo siguiente
let lista = [1,4,7,9];
let listaCopy = lista.slice();
lista[1] = 11;
console.log(lista);
console.log(listaCopy);
```

### Variables

- let, const. Son los recomendados
- var ya no se recomienda usar

```js
var mensaje = 'este es un mensaje';
console.log(mensaje); // imprime 'este es un mensaje'
{
    var mensaje = 'otro mensaje';
    console.log(mensaje); // imprime 'otro mensaje'
}
console.log(mensaje); // imprime 'otro mensaje'

// let viene a resolver el tema de los scopes
let mensaje = 'este es un mensaje';
console.log(mensaje); // imprime 'este es un mensaje'
{
    let mensaje = 'otro mensaje';
    console.log(mensaje); // imprime 'otro mensaje'
}
console.log(mensaje); // imprime 'este es un mensaje'
```

### Scope

- Shadowing
- function scope vs block scope

### Event Loop

El event loop es posiblemente una de las partes mas importantes para entender Js:
- Es el mecanismo que utiliza Js par emular la asincronía.
- Es un bucle en el que en cada iteración(ticks) se pasa por fases.
- La duración de un tick no es fija(depende de las tareas ne cada fase).
- Stack + heap + message queue
