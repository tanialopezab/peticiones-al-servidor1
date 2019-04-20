'use strict';
const ul = document.querySelector('.list');

fetch('https://dog.ceo/api/breeds/list')
    .then(function(response1){
        return response1.json();

    })
    .then(function(dataJson){
        console.log(dataJson);
        const breeds = dataJson.message;
        console.log(breeds);
      for(let i= 0; i < breeds.length; i++){
          ul.innerHTML = ul.innerHTML + `<li>${breeds[i]}</li>`;
      }

        
    })
    