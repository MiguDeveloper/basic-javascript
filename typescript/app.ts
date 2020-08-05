(function () {
  function saludar(nombre: string) {
    console.table(`Hola ${nombre}`); // Templates literales
  }

  const wolverine = {
    nombre: "Logan",
  };

  saludar(wolverine.nombre);

  let mensaje = "Hola";

  // Aqui aplicamos el scope el cual nos proporciona typescript
  if (true) {
    let mensaje = "Mundo";
  }

  console.log(mensaje);

  const nombre = "Miguel";
  const salida = `${nombre} ${edad()}`;

  console.log(salida);

  function edad() {
    return 100 + 20 + 12;
  }

  // Parametros opciones, obligatorios, por defecto
  function activar(
    quien: string,
    objeto: string = "batiseñal",
    momento?: string
  ) {
    if (momento) {
      console.log(`${quien} activó la ${objeto} en la ${momento}.`);
    } else {
      console.log(`${quien} activó la ${objeto}`);
    }
  }

  activar("Gordon");
});
