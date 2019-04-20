// 'use strict';
// const ul = document.querySelector('.list');

// fetch('https://dog.ceo/api/breeds/list')
//     .then(function (response1) {
//         return response1.json();

//     })
//     .then(function (dataJson) {
//         console.log(dataJson);
//         const breeds = dataJson.message;
//         console.log(breeds);
//         for (let i = 0; i < breeds.length; i++) {
//             ul.innerHTML = ul.innerHTML + `<li>${breeds[i]}</li>`;
//         }

//     })

//esta funcion recoje la primera promesa con datos
//la pasa a formato Json
//los datos del Json devueltos escoje el elemento message y lo mete en otra constante para trabajar con ella
//ver el console.log()
//hace un bucle que recorre el array
//para el interior el ul introduce sy contenido mas un li por cada elemento que lee dentro del array
//se podria haber hecho con for... of
//const breed of breads

//PEDIMOS UNA FOTO DE UNA RAZA CONCRETA DE PERRO
fetch('https://dog.ceo/api/breeds/list')
    .then(function (breedsResponse) {
        return breedsResponse.json();
    })
    .then(function (breedsDataJson) {
        const breeds = breedsDataJson.message;
        return fetch(`https://dog.ceo/api/breed/' ${breeds[0]}+ '/images/random`);

    })

    .then(function (imageResponse){
        return imageResponse.json
    })
    .then(function (imageData){
        const img = document.querySelector('.photo_dog');
        img.src = imageData.message;
        img.alt = "un perrete";
    });