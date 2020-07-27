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