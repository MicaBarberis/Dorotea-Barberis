import ItemDetail from '../ItemDetailContainer/ItemDetail'
import products from '../../utils/products.mock'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Modal from '../Modal/Modal'
import './ItemDetail.css'
//Firebase
import db from '../../firebaseConfig'
import {doc, getDoc, getDocs} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [productData, setProductData] = useState ({})
    const [showModal, setShowModal] = useState(false)
    const {id} = useParams()

    useEffect( () => {
        filterById()
        getProducts()
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

    const getProducts = async () => {
        const docRef = doc(db, 'productos', id)
        const docSnapshot = await getDoc(docRef)
        console.log(docSnapshot)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        console.log(product)
        
    }

    return(
        <div className={`container-item-detail ${showModal ? 'overlay-black' : ''}`}>
        <ItemDetail data={productData} setShowModal={setShowModal}/>
        {showModal && (
            <Modal title="Imagen Producto" close={setShowModal}>
                <img src={`/assets/productos/${productData.image}`} />
            </Modal>
        )}
    </div>
    )
} 


    export default ItemDetailContainer