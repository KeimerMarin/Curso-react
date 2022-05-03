import './ItemCount.css'
import { useState } from "react";

const Counter = ({stock = 0, initial = 1, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }     
    }

    if(stock === 0) {
        return <button className='Option' disabled>No hay stock</button>
    }

    return(
        <div className="container-count">            
            <div className="container-button"> 
                <button onClick={decrement}>-</button>
                <p>{quantity}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={()=>onAdd(quantity)}>Agregar al Carrito</button>
        </div>
    )
}
export default Counter;