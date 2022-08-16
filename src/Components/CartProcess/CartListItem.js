import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import './CartListItem.css';

const CartListItem = () => {
    const { cartProducts, clearAll, clearProduct } = useContext(CartContext)
    console.log (cartProducts)

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
    </div>
    
</div>
)
}

export default CartListItem