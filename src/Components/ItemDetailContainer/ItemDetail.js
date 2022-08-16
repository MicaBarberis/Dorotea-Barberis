import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { useState } from "react"
import { Link } from 'react-router-dom'

const ItemDetail = ({data, setShowModal}) => {
    const [quantitySelected, setQuantitySelected] = useState(0)
    return(
        <>
        <div className="product-detail">
        <span className="category">{data.category} </span>
        <div className="item-detail">
            <img className="item-detail-image" src={`/assets/productos/${data.image}`} alt="imagen" onClick={() => setShowModal(true)}/>
        </div>
        <div className="item-detail-info">

            <h2>{data.title}</h2>   
            <div><span className="detail-info-price">$ {data.price}</span></div>
            <div className="detail-info-size">
            <span>Talles</span>
                    <button>XXL</button>
                    <button>XL</button>
                    <button>L</button>
        </div>
            {console.log("quantitySelected: ", quantitySelected)}
                

            { quantitySelected != 0 ?
             <Link to="/cart" ><button className="button">Finalizar compra</button></Link>
             : 
            <ItemCount setQuantitySelected={setQuantitySelected} stock={data.stock} productData={data} /> }

        </div>
        </div>
        </>

    )
}




export default ItemDetail