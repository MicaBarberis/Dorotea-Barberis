import { createContext, useState } from "react";

const CartContext = createContext ()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState ([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product, counter) => {
        const isProductInCart = cartProducts.find((cartItem) => cartItem.id === product.id)
            if(isProductInCart) {
                if(isProductInCart.countQuantity + counter > isProductInCart.stock)
                return false
                isProductInCart.countQuantity += counter
            } else {
                product.countQuantity = counter;
                setCartProducts([...cartProducts, product])
            }
            setTotalProducts(totalProducts + counter)
            setTotalPrice(totalPrice + product.price)
    }

    const clearAll = () => {
        setCartProducts([])
    }

    const clearProduct = (id) => {
        const result = cartProducts.filter(el => el.id !== parseInt(id))
        setCartProducts(result)
    }

    const data = {
        cartProducts,
        setCartProducts,
        clearProduct,
        clearAll,
        addProductToCart,
        totalProducts,
        totalPrice
    } 

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }