/*
Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo
que retorne o maior número primo entre 0 e 50.
*/

function verificaPrimo(num) {
  for (let valor = 2; valor < num; valor += 1) {
    if (num % valor == 0) {
      return false;
    }
  }

  return true;
}

let maiorPrimo = 0;

for(let valor = 0; valor < 50; valor += 1) {
  ehPrimo = verificaPrimo(valor);

  if (ehPrimo) {
    if (valor > maiorPrimo){
      maiorPrimo = valor;
    }
  }
}

console.log(maiorPrimo);