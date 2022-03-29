import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Keypad</h1>
        <h2>Soluciones en Tecnologia</h2>
      </header>
    </div>
  );
}

export default App;
