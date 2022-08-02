import { Link } from 'react-router-dom'
import products from '../../utils/products.mock'
import ItemCount from '../ItemCount/ItemCount'
import './ItemProduct.css'

const ItemProduct = ({data, action}) => {    
    const {title, image, price, stock, id} = data


    return (
        <Link to={`/productos/${id}`} >
        <div className='item-product'>
            <img className='img-product' src={`/assets/productos/${image}`} alt="Imagen producto" />
            <p>{title}</p>
            <span>$ {price}</span>
            <ItemCount stock={stock}/>
            <button onClick={action}>Añadir al carrito</button>
        </div>
        </Link>
    )
}

export default ItemProduct
