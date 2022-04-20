import './CartWidget.css'
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)

    return(
    <a href='#'><FiShoppingCart className='nav-icon'/>{getQuantity()}</a>    
    );
}
export default CartWidget;