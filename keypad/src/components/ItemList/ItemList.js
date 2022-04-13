import './ItemList.css'
import Item from "../Item/Item";

const ItemList = ({products}) => {

    return(
        <section className="grid-container">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </section>
    )
}

export default ItemList;

