//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(nomes) {
    let maior = ''
    for (let nome of nomes) {
        if (nome.length > maior.length) {
            maior = nome;
            }
        }
    return maior;
}
