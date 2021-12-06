let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Ordene o array numbers em ordem crescente e imprima seus valores;

for (let indice = 1; indice < numbers.length; indice += 1) {
  for (let segundoIndice = 0; segundoIndice < indice; segundoIndice += 1) {
    if (numbers[indice] < numbers[segundoIndice]) {
      let posicao = numbers[indice];
      numbers[indice] = numbers[segundoIndice];
      numbers[segundoIndice] = posicao;
    }
  }
}

//Ordene o array numbers em ordem decrescente e imprima seus valores;

for (let indice = 1; indice < numbers.length; indice += 1) {
  for (let segundoIndice = 0; segundoIndice < indice; segundoIndice += 1) {
    if (numbers[indice] > numbers[segundoIndice]) {
      let posicao = numbers[indice];
      numbers[indice] = numbers[segundoIndice];
      numbers[segundoIndice] = posicao;
    }
  }
}

/*Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser 
igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do 
novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo 
valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e 
assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando 
o for e o método push . O resultado deve ser o array abaixo:

[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
*/

let numbersDois = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let array = [];
for (let valor = 0; valor <numbersDois.length; valor+=1) {
  let atual = numbersDois[valor];
  let proximo = numbersDois[valor + 1] 

  if (proximo == undefined) {
    array.push(atual * 2);
  }
  else {
    array.push(atual * proximo);
  }
}
