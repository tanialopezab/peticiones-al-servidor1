'use strict';

const buttonElement = document.querySelector('.btn');
const inputElement = document.getElementById('search__text');
const ulReposElement = document.querySelector('.repo__list');


//recoger la nueva promesa que tendrá los datos de repos_url
//hacer otro fetch a repos_url
//traducir de nuevo a Json
//el json sera un vector que deberé recorrer con un for para eextraer el name de cada elemento
//recoger de nuevo la informacion y ya si que si pintarla en HTML con lis

//pintar

function handlerButtonClick() {
        let inputOrgName = inputElement.value;

        fetch(`https://api.github.com/orgs/${inputOrgName}`)
        .then(function(response1){
                console.log(response1);
                return response1.json();
        })
        .then(function(dataJson){
                let repos = dataJson.repos_url;// esta variable es lo que contiene data json.repos(contiene una url, por eso uso la variable);
                return fetch(repos);
        })
        .then(function(respuestaRepos){
                return respuestaRepos.json();
   
        })
        .then(function(datosRepoJson){
                for (let i= 0; i < datosRepoJson.length; i++){
                        ulReposElement.innerHTML = ulReposElement.innerHTML + `<li>${datosRepoJson[i].name}</li>`
                }

        })

}


buttonElement.addEventListener('click', handlerButtonClick);