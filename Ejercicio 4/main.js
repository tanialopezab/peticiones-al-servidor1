'use strict';

const buttonElement = document.querySelector('.btn');
const inputElement = document.getElementById('search__text');
const ulReposElement = document.querySelector('.repo__list');


function handlerButtonClick() {
        //recojo el valor del input
        let inputOrgName = inputElement.value;
        //hago fetch a la url sustituyendo la variable del nombre de la organizacion q inserta la usuarioa

        fetch(`https://api.github.com/orgs/${inputOrgName}`)

        //paso a json la primera respuesta

        .then(function(response1){
                console.log(response1);
                return response1.json();
        })
        //los datos que me devuelve tienen forma de archivo json

        .then(function(dataJson){
                let repos = dataJson.repos_url;// esta variable es lo que contiene data json.repos(contiene una url, por eso uso la variable);
                //hago fetch sobre la url que he conseguido del primer json y asi paso al siguiente nivel
                return fetch(repos);
        })
        //en esta respuesta VUELVO A recibir datos que no puedo asimilar, He de pasarlos a JSON OTRA VEZ
        .then(function(respuestaRepos){
                return respuestaRepos.json();
   
        })
        //Ya tengo los datos en formato Json, ahora recorro el array de objetos con un For
        .then(function(datosRepoJson){
                for (let i= 0; i < datosRepoJson.length; i++){
                        ulReposElement.innerHTML = ulReposElement.innerHTML + `<li>${datosRepoJson[i].name}</li>`
                }
//cojo el array y lo recorro con la [i] y dentro busco .name ira buscando del primero.name, del segundo.name y así
        })

}


buttonElement.addEventListener('click', handlerButtonClick);