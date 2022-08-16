import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import products from '../../utils/products.mock'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({section}) =>{

    const [listProducts, setListProducts] = useState ([])
    const { categoryName } = useParams()

    const filterCategory = products.filter((products) => products.category === categoryName)

    const getProducts = new Promise ( (resolve) => {
        setTimeout( () => {
            if (categoryName) {
                resolve (filterCategory)
            }
            else {
                resolve(products)
            }
        }, 1000)
    })
/*     const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })*/

    useEffect (() => {
        getProducts
        .then ((res) => {
            setListProducts(res)
        })
        .catch( (error) => { 
            console.log("falló")
        })
}, []) 



    return (
        <div className='list-products'>
            <h2>{section} </h2>
            <section className='main-container list-products'>
            <ItemList dataProducts={listProducts}/>
            </section>
        </div>
 )
}

export default ItemListContainer