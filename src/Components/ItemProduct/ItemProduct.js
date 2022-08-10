import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import products from '../../utils/products.mock'
import { CartContext } from '../../Context/CartContext'
import './ItemProduct.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemProduct = ({data, action}) => {    
    const {handleClick, name} = useContext(CartContext)

        const [contador, setContador] = useState(1);

        const {title, image, price, stock, id} = data

    
    const addNumber = () => {
        if(stock > contador)
        setContador(contador + 1);
    }
    const removeNumber = () => {
        if(contador > 1) {
            setContador(contador - 1); 
         }
    }
    if(setContador < 0){
        setContador (contador=0)
    }

    useEffect(() => {
        console.log("Actualización")
    }, [contador])

    const addToCart = (e) => {
        e.preventDefault()
    }

    return (
        <div className='item-product'>
        <Link to={`/productos/${id}`} >
            <img className='img-product' src={`/assets/productos/${image}`} alt="Imagen producto" />
            <p>{title}</p>
            <span>$ {price}</span>
        </Link>
            <ItemCount stock={stock}/>
            <button onClick={addToCart}>Añadir al carrito</button>
        </div>

    )
}

/* import { Link } from 'react-router-dom'
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
} */

export default ItemProduct
