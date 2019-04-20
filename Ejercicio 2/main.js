'use strict';


// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(function(response){
//         console.log(response);
//         return response.json();
//     })
//     .then(function(datosJson){
//         console.log(datosJson);
//         const img = document.querySelector('img');
//         img.src = datosJson.message;
//         Image.alt = 'un perrete';
//     })

//línea 16 responde con un objeto con muchos datos
// linea 20 ya aparece el objeto cons sus claves y sus valores entonces desde ahí ya creo una etiqueta que me almacena el elemento HTML imagen 
// en img luego coloco en sus atributos el elemento message del json
// en img coloco en el atributo alt el texto "un perrete";

///MODIFICACION PARA QUE SOLO SALGAN CHIHUAHUAS

const buttonEl = document.querySelector('.btn');


function buttonClickRandomImage() {

    fetch('https://dog.ceo/api/breed/Chihuahua/image/random')
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (datosJson) {
            console.log(datosJson);
            const img = document.querySelector('.photo');
            img.src = datosJson.message;
            Image.alt = 'un chihuahua';
        })
}
buttonEl.addEventListener('click', buttonClickRandomImage);

///LA PETION FALLA, INTENTAR MAS TARDE;
