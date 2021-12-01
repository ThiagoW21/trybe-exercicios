//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

let infoDois = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let chave in info) {
    if (chave == 'recorrente') {
        if (infoDois[chave] == 'Sim' && info[chave] == 'Sim'){
            console.log('Ambos recorrentes')
        }

        else if (info[chave] == 'Sim') {
            console.log('Apenas %s recorrente', info.personagem)
        }

        else if (infoDois[chave] == 'Sim') {
            console.log('Apenas %s recorrente', infoDois.personagem)
        }

        else {
            console.log('Nenhum recorrente')
        }
    }

    else {
        console.log('%s e %s',info[chave], infoDois[chave])
    }
    
}