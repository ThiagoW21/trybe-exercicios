//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const a = 100;
const b = 40;
const c = 40;

if (a + b + c === 180) {
  console.log("true");
}

else {
  console.log("false");
}
