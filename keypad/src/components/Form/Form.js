import './Form.css'
import CartContext from '../../context/CartContext'
import Swal from 'sweetalert2'
import Cart from '../Cart/Cart'
import { useState, useContext } from 'react'
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import { NavLink } from "react-router-dom"

const Form = () => {
    const [input, setInput] = useState({name: '', phone: '', address: '', mail: '', mailConfirm: '' })
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const { cart, getTotal } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const onBlurHandler = (event) =>  {
        if (input.mail === input.mailConfirm) {
            setButtonDisabled(false)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Mail incorrecto!',
                footer: 'Correo Incorrecto'
            })
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const createOrder = () => {
        setLoading(true)
    
        const objOrder = {
            prodOrder: cart.map(prod => { return ({ id: prod.id, name: prod.name, quantity: prod.quantity, priceUni: prod.price }) }),
            buyer: {...input},
            total: getTotal(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
                const orderId = id
                return setOrderId(orderId)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if (orderId) {
        return (
            <div> 
                <h2 className="buyMessage">Su pedido se ha realizado correctamente {input.name}</h2>
                <h3 className="code">El número de seguimiento es {orderId}</h3>
                <NavLink to="/" className="end">Volver al Listado</NavLink>
            </div>
        )
    }
    if (loading) {
        return <h1 className="processing"> Procesando...</h1>
    }

    if (cart.length === 0) {
        return < Cart />
    }

    return (
        <div className="container-form">
            <div className="form">
                <div className="form-title">
                    <span className="form-title1">Keypad Soluciones en Seguridad </span>
                    <span className="form-title2">Por favor Complete el Siguiente Formulario</span>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-input">
                        <span className="label-input">Nombre y Apellido:</span>
                        <input required className="input" type="text" name="name" placeholder="Ingrese Nombre y Apellido" onChange={handleChange} value={input.name || ""} />
                    </div>
                    <div className="contact-input">
                        <span className="label-input">Email:</span>
                        <input required className="input" type="text" name="mail" placeholder="Ingrese Email" onChange={handleChange} value={input.mail || ""} />
                    </div>
                    <div className="contact-input">
                        <span className="label-input">Repita Email:</span>
                        <input required className="input" type="text" name="mailConfirm" placeholder="Reingrese Email" onChange={handleChange} onBlur={onBlurHandler} value={input.mailConfirm || ""} />
                    </div>
                    <div className="contact-input">
                        <span className="label-input">Direccion de Envio:</span>
                        <input required className="input" type="text" name="address" placeholder="Ingrese Direccion de Envio" onChange={handleChange} value={input.address || ""} />
                    </div>
                    <div className="contact-input">
                        <span className="label-input">Telefono:</span>
                        <input required className="input" type="text" name="phone" placeholder="Ingrese su numero de telefono" onChange={handleChange} value={input.phone || ""} />
                    </div>
                    <div className="container-btn">
                        <button className="form-btn" type="submit" onClick={() => createOrder()} disabled={buttonDisabled}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
