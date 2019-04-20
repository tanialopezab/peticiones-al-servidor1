'use strict';

const buttonElement = document.querySelector('.btn');
const inputElement = document.getElementById('search__text');
const ulReposElement = document.querySelector('.repo__list');

//añadir click al boton
// crear la funcion del click, que deberá hacer:
        //recoger el valor del input
        //colocar el valor en la primera Url del fetch
        //lanzar el primer fetch
        //recoger promesa (then) con respuesta y pasarla a Json// return
        //recoger la nueva promesa que tendrá los datos de repos_url
        //hacer otro fetch a repos_url
        //traducir de nuevo a Json
        //el json sera un vector que deberé recorrer con un for para eextraer el name de cada elemento
        //recoger de nuevo la informacion y ya si que si pintarla en HTML con lis

        //pintar
