import './Item.css'
const Item = ({name, img, price}) => {
    return(
        <div className="cardProduct">
            <picture className="imgCardProduct">
                <img src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            <h4>{price}</h4>
            <button className='buttonCardProduct'>Ver Detalle</button>
        </div>        
    )
}
export default Item;