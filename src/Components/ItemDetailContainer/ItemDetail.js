import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { useState } from "react"
import { Link } from 'react-router-dom'

const ItemDetail = ({dataProducts}) => {
    const {title, price, image, stock} = dataProducts
    const [quantitySelected, setQuantitySelected] = useState(0)

    /* const addToCart = (e) => {
        e.stopPropagation()
    } */

    return (
        <div className='row width-container'>
            <div className="col s6">
                    <img src={`/assets/${image}`} alt="Producto 1" />
            </div>

            <div className="col s6">
                <div className="card">
                    <div className="card-content left-align">
                        <div className="card-title"><h3>{title}</h3></div>

                        <div className="card-price red darken-4"><h5>$ {price}</h5></div>

                        <div className="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>

                        {
                            quantitySelected > 0
                            ? 
                            <div className="card-action">
                                <Link to="/Cart"><button className="btn waves-effect waves-light">Finalizar compra</button></Link>
                            </div> 
                            : 
                            <ItemCount stock={stock} quantitySelected={setQuantitySelected} productData={dataProducts}></ItemCount>
                        }
                        
                    </div>
                </div>
            </div>
        </div>  
    )
}
{/*                <div className="item-detail-image">
            <img src={`/assets/productos/${data.image}`} alt="imagen" />
        </div>
        <div className="item-detail-info">
            <span className="category">Body</span>
            <p>{data.title}</p>   
            <span className="detail-info__price">$ {data.price}</span>
            <span>Talles</span>
        <div className="detail-info__size">
                    <button>XXL</button>
                    <button>XL</button>
                    <button>L</button>
        </div>
            {console.log("quantitySelected: ", quantitySelected)}
                

            { quantitySelected > 0 ? <button><Link to="/cart" >Finalizar compra</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected} productData={data} /> }

        </div>

    )
}
 */}


export default ItemDetail