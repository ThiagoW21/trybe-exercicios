import './App.css';
import Header from './Header';
import Content from './Content'

const Task = (value, index) => {
  return (
    <li key={index}>
      {value}
    </li>
  );
}

const compromissos = ['Estudar', 'Jogar futebol', 'Alimentar o Pet'];
const lista = compromissos.map((compromisso, index) => Task(compromisso, index));

function App() {
  return <Content/>
}

export default App;
