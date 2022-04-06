import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'

function App() {

/*  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`);
  }
  */
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenido a Keypad'}/>
      {/* <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/> */}
    </div>
  );
}

export default App;
