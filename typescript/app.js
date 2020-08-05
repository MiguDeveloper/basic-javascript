(function () {
    function saludar(nombre) {
        console.table("Hola " + nombre); // Templates literales
    }
    var wolverine = {
        nombre: "Logan"
    };
    saludar(wolverine.nombre);
    var mensaje = "Hola";
    // Aqui aplicamos el scope el cual nos proporciona typescript
    if (true) {
        var mensaje_1 = "Mundo";
    }
    console.log(mensaje);
    /*
      const nombre = 'Miguel';
      const salida = `${nombre} ${edad()}`;
    
      console.log(salida);
    
      function edad() {
        return 100 + 20 + 12;
      }*/
});
