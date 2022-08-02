import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import products from '../../utils/products.mock'

const ItemListContainer = ({section}) =>{

    const [listProducts, setListProducts] = useState ([])

    /* Desafío 5 */
    const getProducts = new Promise ( (resolve) => {
        setTimeout( () => {
            resolve (products)
        }, 2000)
    })


useEffect (() => {
    getProducts
        .then ( (res) => {
            setListProducts(res)
        })
        .catch ( (error) => {
            console.log ("Falló la llamada")
        })
        .finally ( () => {

        })    
}, [])


    return (
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts}/>
        </div>
 )
}

export default ItemListContainer