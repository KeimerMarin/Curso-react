import './ItemDetail.css'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { useNotification } from '../notification/Notification'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, isInCart, getQuantityProd } = useContext(CartContext)

    const {setNotification} = useNotification()

    const handleAdd = (count) => {
        const productObj = {
            id, name,price, quantity: count
        }

        addItem(productObj)
        setNotification('success', `Se agregaron ${count} ${name} correctamente`)
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
                {
                    false
                ? <Link to='/cart'>Ir al carrito</Link> 
                : <ItemCount onAdd={handleAdd} stock={stock} initial={getQuantityProd(id)}/>}              
                </footer>
            </section>           
        </div>  
    )
}

export default ItemDetail