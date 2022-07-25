import { useState, useEffect } from 'react'
import './ItemProduct.css'

const ItemProduct = ({data, action}) => {
    const [contador, setContador] = useState(1)
    
    const {title, image, price} = data

    const addNumber = () => {
        setContador(contador + 1)
    }
    const removeNumber = () => {
        setContador(contador - 1)
    }

useEffect(() => {
    console.log("Actualización")
}, [contador])


    return (
        <div className='item-product'>
            <img className='img-product' src={`/assets/productos/${image}`} alt="Imagen producto" />
            <p>{title}</p>
            <span>$ {price}</span>
            <div className='countProd'>
                <button onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <button onClick={action}>Añadir al carrito</button>
        </div>
    )
}

export default ItemProduct
