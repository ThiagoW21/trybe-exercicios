function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function diasDeDezembro() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const feriados = [24, 25, 31];
  const sextas = [4, 11, 18,25];

  for (let diaDez of dezDaysList){
    let listaUl = document.querySelector('#days');
    let itemLista = document.createElement('li');
    itemLista.innerText = diaDez;
    itemLista.classList.add('day');

    if (feriados.includes(diaDez)) {
      itemLista.classList.add('day');
      itemLista.classList.add('holiday')
    }

    if (sextas.includes(diaDez)) {
      itemLista.classList.add('friday');
    }

    listaUl.appendChild(itemLista);
  }
}

diasDeDezembro();

function criaBotao(string) {
  if (string == 'Feriados') {
    let novoBotao = document.createElement('button');
    let botaoID = 'btn-holiday';

    novoBotao.innerHTML = string;
    novoBotao.id = botaoID;
   
    document.querySelector('.buttons-container').appendChild(novoBotao);
  }

  else if (string == 'Sexta-feira') {
    let novoBotao = document.createElement('button');
    let botaoID = 'btn-friday';

    novoBotao.innerHTML = string;
    novoBotao.id = botaoID;
   
    document.querySelector('.buttons-container').appendChild(novoBotao);

  }
}

criaBotao('Feriados');
criaBotao('Sexta-feira');

function feriado() {
  let btnFeriado = document.querySelector('#btn-holiday')
  let todosOsFeriados = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let novaCorDeFundo = 'blue';

  btnFeriado.addEventListener('click', function() {
    for (let dia = 0; dia < todosOsFeriados.length; dia += 1) {
      if (todosOsFeriados[dia].style.backgroundColor === novaCorDeFundo) {
        todosOsFeriados[dia].style.backgroundColor = backgroundColor;
      }

      else {
        todosOsFeriados[dia].style.backgroundColor = novaCorDeFundo;
      }
    }
  })
}

feriado();

function sextaFeira(sextas) {
  let btnSexta = document.querySelector('#btn-friday');
  let todasAsSextas = document.querySelectorAll('.friday')
  let novoTexto = 'SEXTOU!!'
  
  btnSexta.addEventListener('click', function(){
    for (let sexta = 0; sexta < todasAsSextas.length; sexta+= 1) {
      if (todasAsSextas[sexta].innerText != novoTexto) {
        todasAsSextas[sexta].innerText = novoTexto;
      }

      else {
        todasAsSextas[sexta].innerText = sextas[sexta]; 
      }
    }
  })
}

sextaFeira([4, 11, 18,25]);

function mouseEmCima() {
  let dias = document.querySelector('#days');

  dias.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}

function mouseFora() {
  let dias = document.querySelector('#days');

  dias.addEventListener('mouseout', function(event){
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
}

mouseFora();
mouseEmCima();

function addTarefa(nometarefa) {
  let tarefas = document.querySelector('.my-tasks');
  let novaTarefa = document.createElement('span');
  novaTarefa.innerText = nometarefa;
  tarefas.appendChild(novaTarefa);
}

addTarefa('cozinhar');

function divTarefa(cor) {
  let tarefas = document.querySelector('.my-tasks');
  let novaDiv = document.createElement('div');

  novaDiv.classList.add('task');
  novaDiv.style.backgroundColor = cor;
  tarefas.appendChild(novaDiv);
}

divTarefa('green');

function tarefaSelecionada() {
  let div = document.querySelector('.task');

  div.addEventListener('click', function(event) {
    if (event.target.className == 'task') {
      event.target.className = 'task selected';
    }
    
    else {
      event.target.className = 'task';
    }
  })
}

tarefaSelecionada()

function corDia () {
  let dias = document.querySelector('#days');
  let corDaTarefa = document.querySelector('.task').style.backgroundColor;
  let corPadrao = 'rgb(119,119,119)';
  
  dias.addEventListener('click', function (event) {
    if (event.target.style.color == corDaTarefa) {
      event.target.style.color = corPadrao;
    }

    else{
      event.target.style.color = corDaTarefa;
    }
  })
}

corDia()

function addCompromisso () {
  let compromissos = document.querySelector('.task-list');
  let input = document.querySelector('#task-input')
  let botaoAddClick = document.querySelector('#btn-add');
  
  botaoAddClick.addEventListener('click', function(event) {
    let novoCompromisso = document.createElement('li');
    if (input.value == '') {
      alert('Erro: Digite um compromisso!')
    }

    else {
      novoCompromisso.innerText = input.value;
      compromissos.appendChild(novoCompromisso);
      input.value = '';
    }
  })

  input.addEventListener('keyup', function(event) {
    let novoCompromisso = document.createElement('li');
    if (event.key === 'Enter' && input.value == '') {
      alert('Erro: Digite um compromisso!')
    }

    else if (event.key === 'Enter'){
      novoCompromisso.innerText = input.value;
      compromissos.appendChild(novoCompromisso);
      input.value = '';}
  })
}

addCompromisso()