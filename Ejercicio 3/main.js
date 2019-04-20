'use strict'

const buttonElement = document.querySelector('.btn');
let inputElement = document.getElementById('text');
let paraNameElement = document.querySelector('.name');
let imageElement = document.querySelector('.avatar');
let paraRepoElement = document.querySelector('.repositorios');



function ButtonClickSearch (){
    let userName = inputElement.value;
    console.log(userName);

    fetch(`https://api.github.com/users/${userName}`)
    .then(function(response){
        return response.json();
    })
    .then(function(dataJson){
        console.log(dataJson);
        paraNameElement.innerHTML = dataJson.login;
        imageElement.src = dataJson.avatar_url;
        paraRepoElement.innerHTML = dataJson.public_repos;
    })


}



buttonElement.addEventListener('click', ButtonClickSearch);