import { useContext } from 'react'
import { CartContext } from '../Context/CartContext';
/* import products from '../../utils/products.mock'; */
import './CartListItem.css';

const CartListItem = () => {
    const { cartProducts, clearAll, clearProduct } = useContext(CartContext)
    console.log (cartProducts)

    return (
        <div>
        <p className='card-stock'>Tienes <b>{ cartProducts.length }</b> Productos en tu carro de compras. </p>

    { cartProducts.length > 0 && 
        cartProducts.map((product) => {
            return(
                <div className="row">
                    <div className="col s12 padding-0" key={product.id}>
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src={`/assets/${product.image}`} alt="" />
                            </div>
                            <div className="card-stacked">
                                <div className="card-block">
                                    <h5>{product.title}</h5>
                                    <p className="cart-item">Precio unit.: <b>$ {product.price}</b></p>

                                    <p>Cantidad seleccionada: <b>{ product.countQuantity}</b></p>

                                </div>

                                <div className="cart-product__action">
                                <button className='btn-small waves-effect waves-light' onClick={()=>clearProduct(product.id)}>Eliminar producto</button>
                                </div>
                            </div>

                            <div className="price">
                                <span className="grey-text text-darken-4">Total:</span>
                                <h4>$ { product.price * product.countQuantity }</h4>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    <div className="row">
        <div className="col s10">
            <div className="card-action">
                <button className='btn waves-effect waves-light' onClick={() => clearAll()}>Borrar todo</button>
            </div>
        </div>

        <div className="col s2">
            Total final: <b>Pendiente</b>
        </div>
    </div>
    
    </div>
)
}

export default CartListItem