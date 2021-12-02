//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repete(array) {
    let repeteMais = 0;
    let contMais = 0;

    for (let indice of array) {
        let cont = 0
        for (valor of array) {
            if (valor == indice) {
                cont += 1;
            }
        }

        if (cont >= contMais && indice > repeteMais) {
            contMais = cont;
            repeteMais = indice;
        }
    }
    return repeteMais;
}

re = repete([1, 2, 3, 4, 5, 5, 6])
console.log(re)