let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
console.log("\nTodos os valores da array:")
for(var valor of numbers){
    console.log(valor);
    valor += valor;
    if (valor % 2 != 0){
        qtImpar += 1;

    }
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
console.log("\nSoma de todos os itens de numbers:")
console.log(valor);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
console.log("\nMédia aritmética:")
console.log(valor / numbers.length);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if(valor > 20){
    console.log('\nValor maior que 20');
}

else {
    console.log('\nValor menor que 20')
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maior = 0;

for(item of numbers){
    if (item > maior) {
        maior = item;
    }
}

console.log('\nO maior valor é:',maior)

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let qtImpar = 0

for (num of numbers) {
    if (num % 2 == 0) {
        qtImpar += 1
    }
   
}

if (qtImpar > 0) {
    console.log('\nTem', qtImpar, 'números impares');
   
}

else {
    console.log('\nnenhum valor ímpar encontrado');
}

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = 0;

for(item of numbers){
    if (menor == 0) {
        menor = item;
    }

    if (item < menor) {
        menor = item;
    }
}

console.log('\nO menor valor é:',menor)

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
var array = []

for (valor = 1; array.length < 25; valor++){
    array.push(valor)
}

console.log('\nItems da Array: ' + array);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
console.log('\nImprimindo valores dividos por 2')

for (item of array){
    console.log(item / 2)
}