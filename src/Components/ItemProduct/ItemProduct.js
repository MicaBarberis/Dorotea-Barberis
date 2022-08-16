
import { Link } from 'react-router-dom'
import './ItemProduct.css'


const ItemProduct = ({data}) => {    


        const {title, image, price, id} = data


    return (
        <div className='item-product'>
        <Link to={`/productos/${id}`} >
            <img className='img-product' src={`/assets/productos/${image}`} alt="Imagen producto" />
            <p>{title}</p>
            <span>$ {price}</span>
        </Link>
        </div>

    )
}

export default ItemProduct
