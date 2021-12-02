// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(word, ending) {
    for(let letra = 1; letra <= ending.length; letra+=1) {
        if (ending[ending.length - letra] != word[word.length - letra]) {
            return false
        }
        return true
    }
}
