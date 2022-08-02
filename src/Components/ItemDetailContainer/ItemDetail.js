
const ItemDetail = ({data}) => {

    return (
        <>
        <div className="item-detail-image">
            <img src={`/assets/productos/${data.image}`} />
            <p>{data.title}</p>
            <span>$ {data.price}</span>

        </div>
        </>
    )
}

export default ItemDetail