import { createContext, useState } from "react";

const CartContext = createContext ()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState ([])
    const [totalProducts, setTotalProducts] = useState(0)


    const addProductToCart = (product) => {
        const isProductInCart = cartProducts.find((cartItem) => cartItem.id === product.id)
            if(isProductInCart) {
                setTotalProducts(totalProducts + 1)
                return setCartProducts(cartProducts => [...cartProducts, product])
            }
    }

    const clearAll = () => {
        setCartProducts([])
    }

    const clearProduct = ( product) => {
        setCartProducts(cartProducts.filter( (cartProduct) => cartProduct.id !== product.id) )
    }

    const data = {
        cartProducts,
        setCartProducts,
        clearProduct,
        clearAll,
        addProductToCart,
        totalProducts
    } 

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }