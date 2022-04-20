import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {CartContextProvider}  from './context/CartContext'


function App() {

/*  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`);
  }
  */
  return (
    <div className="App">    
     {/*  <ItemListContainer greeting={'Bienvenido a Keypad'}/> */}
      {/* <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/> */}
      <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
            <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
