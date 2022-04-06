import { useEffect, useState} from "react"
import {getProducts} from '../../products'
import ItemList from "../ItemList/ItemList"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        })
    }, [])

    return (
        
        <div>
            <h1>{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;