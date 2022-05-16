import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Form from './components/Form/Form';
import Cart from './components/Cart/Cart';
import {CartContextProvider}  from './context/CartContext'
import { NotificationProvider } from './components/notification/Notification'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
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
              <Route path='/form' element={<Form/>} />
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </NotificationProvider> 
    </div>
  );
}

export default App;
