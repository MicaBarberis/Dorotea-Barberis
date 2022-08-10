import ItemDetail from '../ItemDetailContainer/ItemDetail'
import products from '../../utils/products.mock'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Modal from '../Modal/Modal'

const ItemDetailContainer = () => {
    const [productData, setProductData] = useState ({})
    const [showModal, setShowModal] = useState(false)
    const {id} = useParams()

    useEffect( () => {
        filterById()
    }, [id])

    const filterById = () => {
        products.some( (product) => {
            if(product.id == id) {
                console.log("producto filtrado: ", product)
                setProductData(product) 
            }
        }
    )
    }

/* 
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
}, []) */

    return(
        <div className={`container-item-detail ${showModal ? 'overlay-black' : ''}`}>
        <ItemDetail data={productData} setShowModal={setShowModal}/>
        {showModal && (
            <Modal title="Imagen Producto" close={setShowModal}>
                <img src={`/assets/${productData.image}`} />
            </Modal>
        )}
    </div>
/*         <div>
            <h4>{section}</h4>
            <div className='container-section'>
                <ItemDetail dataProducts={listItem} />
            </div>
        </div> */
    )
} 


    export default ItemDetailContainer