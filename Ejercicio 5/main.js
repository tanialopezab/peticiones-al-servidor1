'use strict';
const ulElement = document.querySelector('.list__breed');
let arrJson ;
//PASOS

//pedir un listado de razas de perros Dog API
// pedir un número aleatorio Rand FUN desde 0 hasta el numero de datos del array de la lista de razas

fetch('https://jsonplaceholder.typicode.com/todos')
.then (function(response){
    console.log(response);
    return response.json();
})
.then(function(dataJson){
    console.log(dataJson);
    for (let i= 0; i < dataJson.length; i++){
        ulElement.innerHTML = ulElement.innerHTML + (`<li> ${dataJson[i].id}</li>`);
    }
    arrJson = dataJson; 
    return fetch (`https://api.rand.fun/number/integer?max=${arrJson.length}`)
})
.then(function(response2){
    return response2.json();
})
.then(function(dataJson2){
    console.log(dataJson2);//segundo Json
   ;
    console.log(arrJson[dataJson2.result].id);

//arrJson es el array anterior, se va a mover a la posicion del segundo json que le indique.result(numero aleatorio) vinculado al id)  

    return dataJson2.result;
})


