import { useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext";
import '../ItemCount/ItemCount.css'


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
            <button className="btn-agregar-cart" onClick={onAdd}>Agregar al carrito</button>
            <div className="card-stock"> Stock disponible: <b>{stock}</b></div>
        </>
        )

}



export default ItemCount