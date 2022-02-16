import React from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

const conteudo = (obj, index) => {
    return (
        <p key={index}>
            O conteúdo é: {`${obj.conteudo}`}<br></br>
            Status: {`${obj.status}`}<br></br>
            Bloco: {`${obj.bloco}`}<br></br>
        </p>
    )
}

const elemento = conteudos.map((obj, index) => conteudo(obj, index))

class Content extends React.Component {
    render() {
        return elemento;
    }
}

export default Content;