import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import './CartListItem.css';
import Modal from '../Modal/Modal';
import db from '../../firebaseConfig.js'
import {collection, addDoc} from 'firebase/firestore'

const CartListItem = () => {
    const [showModal, setShowModal] = useState (false)
    const { cartProducts, clearAll, clearProduct, totalPrice } = useContext(CartContext)
    const [succes, setSucces] = useState ()

    const [order, setOrder] = useState({
        items: cartProducts.map((product) =>{
            return {
                id: product.id,
                title: product.title,
                price: product.price
            }
        }),
        buyer: {},
        total: totalPrice
    })
    const [formData, setFormData] = useState ({
        name:'',
        phone: '',
        email: ''
    })



    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log("order para enviar: ", {...order, buyer: formData})
        pushData({...order, buyer: formData})
    }
    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'órdenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSucces(orderDoc.id)
        console.log('ÓRDEN GENERADA', orderDoc)
    }


    return (
        <div>
        <p className='card-stock'>Tienes <b>{ cartProducts.length }</b> productos en tu carro de compras </p>

    { cartProducts.map((product) => {
            return(
                <div className="row">
                    <div className="col s12" key={product.id}>
                        <div className="card-horizontal">
                            <div className="card-image">
                                <img src={`/assets/productos/${product.image}`} alt="No hay imágen" />
                            </div>
                            <div className="card-stacked">
                                <div className="card-block">
                                    <h5>{product.title}</h5>
                                    <p className="cart-item">Precio unitario: <b>$ {product.price}</b></p>
                                    <p className="cart-item2">Cantidad seleccionada: <b>{ product.countQuantity}</b></p>
                                </div>

                                <div className="cart-product__action">
                                <button className='btn-clear' onClick={()=>clearProduct(product.id)}>Eliminar producto</button>
                                </div>
                            </div>

                            <div className="price">
                                <span className="price-total">Total:</span> 
                                <h4>$ { product.price * product.countQuantity }</h4>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    <div className="total">
        <div className="col s10">
            <div className="card-action">
                <button className='btn waves-effect waves-light' onClick={() => clearAll()}>Borrar todo</button>
            </div>
        </div>
        <div className="total-compra">
           <p> Total final: <b>Pendiente</b> </p>
        </div>
        <div className='pagar'>
            <button onClick={() => setShowModal(true)}>Ir a pagar</button>
        </div>
    </div>
        {showModal &&  
        <Modal title="DATOS DE CONTACTO" close={() => setShowModal()} >
            {succes ? (
                <>
                <h2>Su órden se generó correctamente</h2>
                <p>Id de compra: {succes} </p>
                </>
            ) : (
            <form onSubmit={submitData}>
                <input type="text" name="name" placeholder='Nombre' onChange={handleChange} value={formData.name}/>
                <input type="number" name="phone" placeholder='Teléfono' onChange={handleChange} value={formData.phone}/>
                <input type="text" name="email" placeholder='Email' onChange={handleChange} value={formData.email}/>

                <button type='Submit'>Enviar</button>
            </form>
            )}
            
        </Modal>
        }
</div>
)
}

export default CartListItem