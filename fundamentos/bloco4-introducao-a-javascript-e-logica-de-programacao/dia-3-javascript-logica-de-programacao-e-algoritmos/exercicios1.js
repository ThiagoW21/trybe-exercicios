/*O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
*/

let fatorial = 20;
let valorFatorial = 1;

for (let num = fatorial; num > 0; num -= 1) {
  valorFatorial *= num 
}

console.log(valorFatorial);