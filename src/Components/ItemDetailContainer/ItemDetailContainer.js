import ItemDetail from '../ItemDetailContainer/ItemDetail'
import products from '../../utils/products.mock'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = (section) => {
    const [listItem, setListItem] = useState ({})
    const {id} = useParams()

    const filterId = products.filter((products) => products.id === Number(id))

    const getItem = () => new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(filterId[0]);
        }, 2000);
    })

    useEffect( () => {
        const ItemAwait = async() => {
            try {
                const res = await getItem()
                setListItem(res)
            }
            catch(error) {
                console.log(error)
            }
        }
        ItemAwait();
}, [])

    return(
        <div>
            <h4>{section}</h4>
            <div className='container-section'>
                <ItemDetail dataProducts={listItem} />
            </div>
        </div>
    )
} 


    export default ItemDetailContainer