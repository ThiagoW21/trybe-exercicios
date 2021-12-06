/*
Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere
o número de caracteres de cada palavra.
*/

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = '';

for (let palavra of array) {
  if (array.indexOf(palavra) == 0) {
    maior = palavra;
    menor = palavra;
  }

  else {
    if (palavra.length > maior.length) {
      maior = palavra;
    }

    else if (palavra.length < menor.length) {
      menor = palavra;
    }
  }
}

console.log(`Menor: ${menor}\nMaior: ${maior}`)