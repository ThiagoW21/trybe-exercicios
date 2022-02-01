const cotacoes = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const moedas = await fetch(url)
    .then(response => response.json())
    .then(obj => obj.data)
    .catch((error) => error.toString());

  return moedas;
}

const criaPs = async () => {
  const moedas = await cotacoes();

  const div = document.getElementById('cot');

  const filtraMoedas = moedas.filter(moeda => moeda.rank <= 10);

  filtraMoedas.map((moeda) => {
    const p = document.createElement('p');

    p.innerText = `${moeda.name} (${moeda.symbol}): ${moeda.priceUsd}`

    div.appendChild(p);
  })
}



window.onload = criaPs();