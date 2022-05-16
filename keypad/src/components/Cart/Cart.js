import './Cart.css'
import CartContext from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { useContext} from "react"
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, clearCart, getTotal } = useContext(CartContext)  
    if(cart.length === 0) {
        return (
            <>
                <h1 className="emptyCart">Tu carrito está vacío</h1>
                <div className="home">
                    <Link to={'/'} className="return">Inicio</Link>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="pageCar">
                <h2 className="cartTitle">carrito</h2>
            </div>
            {cart.map(prod => <CartItem key={prod.id}{...prod}/>)}
            <p className="total">Total: ${getTotal()}</p>
            <div className="btns">
                <Link className="btnLower" to={'/'} onClick={() => clearCart()}>Vaciar carrito</Link>
                <Link className="btnLower" to={'/form'}>Continuar </Link>
            </div>
        </div>
    )
}

export default Cart
