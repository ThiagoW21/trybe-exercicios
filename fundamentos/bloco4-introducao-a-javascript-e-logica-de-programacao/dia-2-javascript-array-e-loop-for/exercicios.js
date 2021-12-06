/*
Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse 
array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

//Nesse primeiro exercício, percorra o array imprimindo todos os
//valores nele contidos com a função console.log();
function exer1(array) {
  for (let valor of array) {
    console.log(valor);
  }
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
function exer2(array) {
  let soma;

  for (let valor of array){
    soma += valor;
  }
  console.log(soma);

}

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
function exer3(array) {
  let media = 0;

  for (let valor of array){
    media += valor
  }
  media /= array.length;

  return media;
}

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem:
//"valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
function exer4(array) {
  let valor = exer3(array);

  if ( valor > 20) {
    console.log ('valor maior que 20');
  }

  else {
    console.log('valor menor ou igual a 20');
  }
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
function exer5(array) {
  let maior = 0;

  for (let valor of array) {
    if (valor > maior) {
      maior = valor;
    }
  }
  
  return maior;
}

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima
//a mensagem: "nenhum valor ímpar encontrado";

function exer6(array) {
  let impar = 0;

  for (let valor of array) {
    if (valor % 2 != 0) {
      impar += 1
    }
  }

  return impar;
}

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
function exer7(array) {
  let menor = array[array.length - 1];

  for (let valor of array) {
    if (valor < menor) {
      menor = valor;
    }
  }

  return menor;
}

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
function exer8(de, ate) {
  let array = []
  for (de; de <= ate; de+=1) {
    array.push(de);
  }

  return array;
}

//Utilizando o array criado no exercício anterior imprima o resultado da 
//divisão de cada um dos elementospor 2.
function exer9(array) {
  for (let elemento of array){
    console.log(elemento + ' / 2 = '+ elemento / 2);
  }
}

exer9(exer8(1, 25))