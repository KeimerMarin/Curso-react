import './ItemDetail.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'



const ButtonCount = ({ onConfirm, stock, initial = 0 }) => {
    const [count, setCount] = useState(initial)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0) 

    const handleAdd = (count) => {
        console.log('Agregar al carrito')
        setQuantity(count)
    }
    return (
        <div className="cardDetailProduct">
            <h2>{name}</h2>            
            <picture className="imgDetailProduct">
                <img src={img} alt={name} />
            </picture>
            <section>
                <p className="Info"> Categoria: {category}</p>
                <p className="Info"> {description}</p>
                <p className="Info"> $ {price}</p>
                <footer className='ItemFooter'> 
                {quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> : <ButtonCount onConfirm={handleAdd} stock={stock}/>}              
                </footer>
            </section>           
        </div>
    )
}

export default ItemDetail