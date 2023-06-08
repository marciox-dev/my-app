import './App.css';
import WelcomeUser from './components/welcome/welcome';
import NoteTaker from './components/NoteTaker/NoteTaker';
import TodoList from './components/TodoList/TodoList';
import Reverse from './components/Reverse/Reverse';

function App() {
  return (
    <div className="App">
      <WelcomeUser name="Marcio"/>
      <NoteTaker />
      <TodoList />
      <Reverse>
        Aqui vai o texto a ser invertido.
      </Reverse>
    </div>
  );
}

export default App;
