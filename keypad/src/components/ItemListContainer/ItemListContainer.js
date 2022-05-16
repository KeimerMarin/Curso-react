import { useEffect, useState} from "react"
import { getDocs, collection, query, where } from 'firebase/firestore'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { firestoreDb } from "../../services/firebase"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
        : collection(firestoreDb, 'products')

    getDocs(collectionRef)
    .then(response => {
        const products = response.docs.map(doc => {
            return { id: doc.id, ...doc.data()}
        })
        setProducts(products)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId]) 

return (
        
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;