import './ItemDetail.css'
const ItemDetail = ({ id, name, img, category, description, price }) => {
    return (
        <div className="cardDetailProduct">
            <h2>{name}</h2>            
            <picture className="imgDetailProduct">
                <img src={img} alt={name} />
            </picture>
            <section>
                <p class Name="Info"> Categoria: {category}</p>
                <p className="Info"> {description}</p>
                <p className="Info"> $ {price}</p>
            </section>           
        </div>
    )
}

export default ItemDetail