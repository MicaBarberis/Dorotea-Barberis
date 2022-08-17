import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import products from '../../utils/products.mock'
import { useParams } from 'react-router-dom';
import {collection, getDocs} from 'firebase/firestore'

import db from '../../firebaseConfig';

const ItemListContainer = ({section}) =>{

    const [listProducts, setListProducts] = useState ([])
    const { categoryName } = useParams()

    const filterCategory = products.filter((products) => products.category === categoryName)


    const getProducts = async () => {

        const productCollection = collection(db, 'productos')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map ( (doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

/*     const getProducts = new Promise ( (resolve) => {
        setTimeout( () => {
            if (categoryName) {
                resolve (filterCategory)
            }
            else {
                resolve(products)
            }
        }, 1000)
    }) */


    useEffect (() => {
        getProducts()
        .then((res) => {
            setListProducts(res)
        })
/*         getProducts
        .then ((res) => {
            setListProducts(res)
        })
        .catch( (error) => { 
            console.log("falló")
        }) */
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