import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CartContextProvider}  from './context/CartContext'
import Cart from './components/Cart/Cart';
import { NotificationProvider } from './components/notification/Notification'


function App() {

/*  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`);
  }
  */
  return (
    <div className="App">  
    <NotificationProvider>
      <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
            <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </NotificationProvider> 
    </div>
  );
}

export default App;
