import './ItemProduct.css'

const ItemProduct =({title, price, image}) => {
    return (
        <div className='item-product'>
            <img className='img-product' src={`/assets/productos/${image}`} alt="Imagen producto" />
            <p>{title}</p>
            <span>$ {price}</span>
            <button>Añadir al carrito</button>
        </div>
    )
}

export default ItemProduct