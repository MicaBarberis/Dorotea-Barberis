import './CartWidget.css'
import { useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

const CartWidget = () => {
    const cartContext = useContext(CartContext);
    const {cartProducts} = cartContext


    return (
        <div className="cart-widget">
            <li className='icon-nav'>
                <Link to="/cart">
                    <div className="qty-display">{cartProducts.length}</div>
            <i className="cart-logo"><img src='assets/cart-logo.png'/></i>
            </Link>
            </li>
            </div>      
    )
}

export default CartWidget