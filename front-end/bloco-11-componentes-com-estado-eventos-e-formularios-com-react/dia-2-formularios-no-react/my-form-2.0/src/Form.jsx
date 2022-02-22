import React from 'react';
import estados from './data';

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      CPF: '',
      endereco: '',
      cidade:'',
      estado: '',
      tipo: '',
      resumoDoCurriculo:'',
      cargo: '',
      descricaoDoCargo: '',
      contMouseHover: 0
    }
  }

  handler = ({target}) => {
    const { name, value } = target
    this.setState({[name]: name === 'nome' ? value.toUpperCase(): value})
  }

  mouseHover = () => {
    if (this.state.contMouseHover === 0) {
      alert('Preencha com cuidado esta informação.')
      this.setState({contMouseHover: 1})
    } 
  }

  verificaCidade = ({target}) => {
    if (Number(target.value[0])) target.value = '';
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Dados pessoais</legend>
          <label>
            Nome:
            <input type="text" name="nome" value={this.state.nome} maxlength="40" onChange={ this.handler } required></input>
          </label>

          <label>
            Email: 
            <input type="email" name="email" onChange={ this.handler } required></input>
          </label>
          
          <label>
            CPF:
            <input type="text" maxlength="11" required name="CPF" onChange={ this.handler }></input>
          </label>

          <label>
            Endereço:
            <input type="text" maxlength="200" required name="endereco" onChange={ this.handler }></input>
          </label>

          <label>
            Cidade:
            <input type="text" maxlength="28" required name="cidade" onChange={ this.handler } onBlur={this.verificaCidade}></input>
          </label>

          <label>
            Estado:
            <select name="estado"onChange={this.handler}>
              { estados.map((uf) => <option>{uf}</option>)}
            </select>
          </label>

          <input type="radio" id="ap" name="tipo" value="Apartamento"></input>
          <label for="ap">Apartamento</label>
          <input type="radio" id="cs" name="tipo" value="Casa"></input>
          <label for="cs">Casa</label>

        </fieldset>



        <fieldset>
          <legend>Dados do seu último emprego</legend>

          <textarea name="resumoDoCurriculo" rows="5" cols="60" limit="1000" placeholder="Resumo do currículo" required></textarea>
          
          <textarea name="cargo" rows="5" cols="60" limit="40" placeholder="Cargo" 
          required onMouseEnter={this.mouseHover}></textarea>

          <label>
            <textarea type="text" name="descricaoDoCargo" limit="500" rows="5" cols="60" placeholder="Descrição do cargo"/>
          </label>
        </fieldset>
      </form>
    )
  }
}

export default Form;
