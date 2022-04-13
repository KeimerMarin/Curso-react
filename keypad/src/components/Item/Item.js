import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price,}) => {
    return(
        <div className="cardProduct">
            <picture className="imgCardProduct">
                <img src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>           
            <Link to={`/detail/${id}`} className='buttonCardProduct'>Ver detalle</Link>
        </div>        
    )
}

export default Item;
