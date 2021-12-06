/*
Agora vamos trabalhar com algumas formas geométricas! 
Faça um programa que, dado um valor n qualquer, 
seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
*/
function bonus1(n) {
  for (let coluna = 0; coluna < n; coluna += 1) {
    let linhaCompleta = ''

    for (let linha = 0; linha < n; linha += 1) {
      linhaCompleta += '*';
    }
    console.log(linhaCompleta);
  }
}

/*Para o segundo exercício, faça o mesmo que antes, mas que imprima um 
triângulo retângulo com 5 asteriscos de base.
*/
function bonus2(n) {
  for (let coluna = 0; coluna <= n; coluna += 1) {
    let linhaCompleta = ''
    for (let linha = 0; linha < coluna; linha += 1) {
      linhaCompleta += '*';
    }
    console.log(linhaCompleta);
  }
}

//Agora inverta o lado do triângulo. Por exemplo:
function bonus3(n) {
  for (let coluna = 0; coluna <= n; coluna += 1) {
    let linhaCompleta = ''
    for (let linha = 0; linha < n; linha += 1) {
      if (linha >= (n - coluna)) {
        linhaCompleta += '*';
      }
      else {
        linhaCompleta += ' ';
      }
    }
    console.log(linhaCompleta);
  }
}

//Depois, faça uma pirâmide com n asteriscos de base:
function bonus4(n) {
  for (let coluna = 0; coluna <= n; coluna += 1) {
    let linhaCompleta = ''
    for (let linha = 0; linha < coluna; linha += 1) {
      if (linha >= (n - coluna)) {
        linhaCompleta += '*';
      }
      else {
        linhaCompleta += ' ';
      }
    }
    console.log(linhaCompleta);
  }
}


//Faça um programa que diz se um número definido numa variável é primo ou não.
let valor = 5

function verificaPrimo(num) {
  for (let valor = 2; valor < num; valor += 1) {
    if (num % valor == 0) {
      console.log('Não é primo')
      return false;
    }
  }
  console.log('É primo.')
  return true;
}

verificaPrimo(valor);