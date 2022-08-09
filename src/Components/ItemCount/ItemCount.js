import { useState, useContext } from "react"
import { CartContext } from "../Context/CartContext";

const ItemCount = ({stock, setQuantitySelected, productData}) => {
    const {addProductToCart} = useContext(CartContext)
    
    const [countQuantity, setCountQuantity] = useState(0)


    const addQuantity = () => {
        if (countQuantity < stock) {
        setCountQuantity (countQuantity + 1)
    }
}
    const removeQuantity = () => {
        if (countQuantity > 0) {
        setCountQuantity (countQuantity - 1)
    }
}


    const onAdd = (countQuantity) => {
        console.log ("Agregar al carrito", productData)
        addProductToCart(productData, countQuantity)
        setQuantitySelected (countQuantity)

    }

    return(
        <>
            <div className="container-count">
                <button onClick={removeQuantity} disabled={countQuantity === 0}>-</button>
                <span>{countQuantity}</span>
                <button onClick={addQuantity} disabled= {stock === countQuantity}>+</button>
            </div>
            <button className="btn-agregar-cart" onClick={() => onAdd (countQuantity)} disabled={stock === 0} >AGREGAR AL CARRITO</button>
            <div className="card-stock"> Stock disponible: <b>{stock}</b></div>
        </>
        )
/* return (
    <div className='countProd'>
    <button onClick={removeNumber}>-</button>
    <p>{contador}</p>
    <button onClick={addNumber}>+</button>
    <button onClick={onAdd}>Añadir al carrito</button>
</div>
) */

}



export default ItemCount