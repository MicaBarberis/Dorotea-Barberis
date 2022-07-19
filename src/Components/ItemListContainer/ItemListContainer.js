import './ItemListContainer.css'
import ItemProduct from"../ItemProduct/ItemProduct"

const ItemListContainer = ({section}) =>{
    return (
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemProduct title="Body Andressa" price={4500} image={'product5.jpg'}/>
            <ItemProduct title="Body Natubel" price={4280} image={'producto21.jpg'}/>
            <ItemProduct title="Body Brigitte" price={3990} image={'producto13.jpg'}/>
        </div>
 )
}

export default ItemListContainer