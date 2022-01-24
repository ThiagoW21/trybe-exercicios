// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
const sum = (...args) => args.reduce((acumulador, num) => acumulador + num, 0);

