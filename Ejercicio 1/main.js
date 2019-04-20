'use strict';
fetch('https://api.rand.fun/text/string?length=90')
  .then(function(response) {
      console.log(response);
    return response.json();

  })
  .then(function(data) { 
    document.body.innerHTML = data.result;
  });
//COSAS ENTENDIDAS :: la url base se puede modificar para añadir caracteristicas a lo que deseo buscar.

  ///el console log de response devuelve un OBJETO  cl clas claves ; type: url; redirected; status: ok....etc

  ///el console log de data devuelve cosas raras ?????????????''

  //para pedir informacion distinte de la api debo cambiar la URL
 // despues de ? las características adicionales de ese tipo de informacion

