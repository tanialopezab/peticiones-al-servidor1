'use strict'

const buttonElement = document.querySelector('.btn');
const inputElement = document.getElementById('text');
const paraNameElement = document.querySelector('.name');
const imageElement = document.querySelector('.avatar');
const paraRepoElement = document.querySelector('.repositorios');



function ButtonClickSearch (){
    let userName = inputElement.value;
    console.log(userName);

    fetch(`https://api.github.com/users/${userName}`)
    .then(function(response){
        return response.json();
    })
    .then(function(dataJson){
        console.log(dataJson);
    })


}



buttonElement.addEventListener('click', ButtonClickSearch);