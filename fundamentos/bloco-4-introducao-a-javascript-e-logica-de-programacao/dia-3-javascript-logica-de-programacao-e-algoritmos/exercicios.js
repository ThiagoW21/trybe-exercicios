//Exercícios refatorados para um único arquivo para serem executados com funções com tudo que foi aprendido no dia 4

function primeiro(n) {
    //Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

    for (var coluna = 0; coluna < n; coluna+= 1) {
        var line = ''
        for(var linha= 0; linha < n; linha+= 1){
            line += '*'
        }
        console.log(line)
    }
}

function segundo(n) {
    //Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

    for (var coluna = 0; coluna < n; coluna+= 1) {
        var line = ''
        for(var linha= 0; linha <= coluna; linha+= 1){
            line += '*'
        }
        console.log(line)
    
    }
}

function terceiro(n) {
    //Agora inverta o lado do triângulo feito no segundo exercicio.

    for(var coluna = 0;coluna <= n;coluna+= 1){
        var line=''
        for(var linha = 0;linha < n;linha += 1){
            if (linha < n - coluna){
                line += ' '
            }
            else{
                line += '*'
            }
        }
        console.log(line)
    }
}
