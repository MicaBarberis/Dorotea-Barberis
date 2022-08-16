import { useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext";

/* const ItemCount = ({stock, quantitySelected, productData}) => {
    const { addProductToCart } = useContext(CartContext)
    const [ contador, setContador ] = useState(0);

    const onAdd=(contador) => {
        quantitySelected(contador);
        addProductToCart(productData, contador)
    }

    const addQuantity = () => {
        if( contador < stock ) {
            setContador(contador + 1);
        } 
    }

    const removeQuantity = () => {
        if( contador > 0 ) {
            setContador(contador - 1);
        }
    } */
const ItemCount = ({stock, setQuantitySelected, productData}) => {
    const {addProductToCart} = useContext(CartContext)
    
    const [countQuantity, setCountQuantity] = useState(1)


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


    const onAdd = () => {
        console.log ("Agregar al carrito", productData)
        addProductToCart(productData, countQuantity)
        setQuantitySelected (countQuantity)

    }

    return(
        <>
            <div className="container-count">
                <button onClick={removeQuantity}>-</button>
                <span>{countQuantity}</span>
                <button onClick={addQuantity}>+</button>
            </div>
            <button className="btn-agregar-cart" onClick={onAdd}>AGREGAR AL CARRITO</button>
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