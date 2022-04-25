import './CartWidget.css'
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import {Link} from 'react-router-dom';
const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)

    return(
    <Link to='/cart'>
        <FiShoppingCart className='nav-icon'/>
        {getQuantity()}
    </Link>    
    );
}
export default CartWidget;