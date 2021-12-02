//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo(str) {
    let strSplit = str.split('');
    let strSplitReverse = str.split('').reverse();

    for(let indice in strSplit) {
        if (strSplitReverse[indice] != strSplit[indice]) {
            return false;
        }
    }

    return true
}




