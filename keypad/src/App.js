import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function App() {

/*  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`);
  }
  */
  return (
    <div className="App">
    
     {/*  <ItemListContainer greeting={'Bienvenido a Keypad'}/> */}
      {/* <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/> */}
      <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
