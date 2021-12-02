//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorIndice(array) {
    let menor = 0;
    let indiceMenor = 0;

    for (let indice in array) {
        if (indice == 0){
            menor = indice;
        }
        else if (array[indice] < menor) {
            menor = array[indice];
            indiceMenor = indice;
        }
    }
    console.log(indiceMenor)
    return indiceMenor;
}

menorIndice([2, 4, 6, 7, 10, 0, -3])