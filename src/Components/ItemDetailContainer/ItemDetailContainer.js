import ItemDetail from '../ItemDetailContainer/ItemDetail'
import products from '../../utils/products.mock'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productData, setProductData] = useState ({})
    console.log(products)
    const {id} = useParams()


    useEffect( () => {
        filterById()
}, [])

    const filterById = () => {
        products.some( (product) =>{
            if(product.id == id) {
                console.log("producto filtrado: ", product)
                setProductData (product)
            }
        }
        )
    }

    
    return (
        <div className='detail-container'>
            <h2>Detalle</h2>
            <ItemDetail data= {productData} />
        </div>
    )
} 


    export default ItemDetailContainer