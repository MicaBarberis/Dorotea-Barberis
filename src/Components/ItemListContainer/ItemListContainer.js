import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import products from '../../utils/products.mock'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({section}) =>{

    const [listProducts, setListProducts] = useState ([])
    const { categoryName } = useParams()

    const filterCategory = products.filter((products) => products.category === categoryName)

    /* Desafío 5 */
    const getProducts = new Promise ( (resolve) => {
        setTimeout( () => {
            if (categoryName) {
                resolve (filterCategory)
            }
            else {
                resolve(products)
            }
        }, 2000)
    })


useEffect (() => {
    const getProduct = async () => {
        try{
        const responseLog = await getProducts()
        setListProducts(responseLog)
    }

    catch(error){ console.log(error) }
}
    getProduct()
}, )


    return (
        <div className='list-products'>
            <h2>Listado de productos</h2>
            <section className='main-container list-products'>
            <ItemList dataProducts={listProducts}/>
            </section>
        </div>
 )
}

export default ItemListContainer