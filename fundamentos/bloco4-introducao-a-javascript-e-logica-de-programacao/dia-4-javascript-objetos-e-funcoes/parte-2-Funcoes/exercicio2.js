//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorIndice(array) {
    let maior = 0;
    let indiceMaior = 0;

    for (let indice in array) {
        if (array[indice] > maior) {
            maior = array[indice];
            indiceMaior = indice;
        }
    }

   return indiceMaior;
}

