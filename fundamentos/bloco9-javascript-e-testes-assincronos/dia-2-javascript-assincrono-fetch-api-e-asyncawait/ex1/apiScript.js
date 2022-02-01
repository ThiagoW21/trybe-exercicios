//  Como primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site
//  simples com um gerador de piadas ruins! . Como? Vamos praticar!    

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const h3 = document.getElementById('jokeContainer');

  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  .then(response => response.json())
  .then((pi) => h3.innerText = pi.joke)
};

window.onload = () => fetchJoke();