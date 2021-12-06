/*
 Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria
 invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se
 seu algoritmo está funcionando corretamente.
*/

let word = 'banana';
let newWord = '';

for (let letra = word.length -1; letra >= 0; letra -= 1) {
  newWord += word[letra];
}

console.log(newWord);