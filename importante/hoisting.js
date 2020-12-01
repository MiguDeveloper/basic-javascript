/* Hoisting(levantar, izar): esta característica consiste en que con independencia de
 * donde este declarado tu variables esta es movida al inicio del ámbito donde
 * pertenece(solo la declaración y no la asignación).
 * Lo mismo pasara con las funciones, si pones primero su ejecución no habrá problemas
 * ya que su declaración se subirá al inicio del ámbito al que pertenece
 */

var name = 'miguel';
function getName() {
  console.log(name);
  var name = 'michael';
}

getName();
// la salida de la funcion seria 'undefined' ya que estaria pasando lo siguiente:
var name;
name = 'miguel';
function getName() {
  var name;
  console.log(name);
  name = 'ana';
}

getName();

// es importante recalcar que los bloques 'for' e 'if' no habren nuevos ambitos
function getObjetos() {
  var item = { i: 'value' };
  for (var idx in [3, 4]) {
    var item = { i: idx };
    console.log(item);
  }
  console.log(item);
}

//getObjetos();

// Hoisting: otra vez lo que esta pasando
function getObjetos() {
  var item; // primera item declaracion
  var item; // segundo item: dentro del for
  var idx;
  item = { i: 'value' };
  console.log(item);
  for (var idx in [3, 4]) {
    item = { i: idx };
    console.log(item);
  }
  console.log(item);
}

getObjetos();
