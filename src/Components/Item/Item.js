import { Link } from 'react-router-dom';

const Item = ({ data }) => {
    const {title, image, price, id } = data

    return(
        <div className='productCard'>
            <div className="card">
                <div className="card-image">
                    <img src={`/assets/${image}`} alt="Producto 1" />
                    <span className="card-title">$ { price }</span>
                </div>
                <div className="card-content">
                    <h5>{ title }</h5>
                
                    <Link to={`/products/${id}`}><span>Ver detalles del producto</span></Link>
                </div>
            </div>
        </div> 
    )
}

export default Item;