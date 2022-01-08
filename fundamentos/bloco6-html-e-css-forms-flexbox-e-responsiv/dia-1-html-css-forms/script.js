console.log('amor');

function addEstados() {
  const estado = document.getElementById('estado');

  const estados = [
    '', 'AC', 'AL', 'AP','AM',
    'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS'
    ,'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  for (let sigla of estados) {
    const item = document.createElement('option');
    item.innerText = sigla;
    estado.appendChild(item);
  }
}

addEstados();
