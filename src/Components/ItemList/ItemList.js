import Item from "../Item/Item";

const ItemList = ({dataProducts}) => {
   
    return (
        <>
            {dataProducts.map(product =>       
                <Item key={product.id} data={product}/>
        )}
        </>
    )
}


export default ItemList