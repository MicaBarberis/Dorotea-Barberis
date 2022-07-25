import { useEffect } from 'react'
import './ItemListContainer.css'
import ItemProduct from"../ItemProduct/ItemProduct"

const ItemListContainer = ({section}) =>{

    const product1 = {
        title: "Body Andressa",
        price: 4500,
        image: 'product5.jpg',
        stock: 3
    }
    const product2 = {
        title: "Body Natubel",
        price: 4280,
        image: 'producto21.jpg',
        stock: 2
    }
    const product3 = {
        title: "Body Brigitte",
        price: 3990,
        image: 'producto13.jpg',
        stock: 6
    }

useEffect (() => {

})

const handleSubmit = () => {console.log("Envio de info")}


    return (
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemProduct data={product1}/>
            <ItemProduct data={product2} action={handleSubmit}/>
            <ItemProduct data={product3}/> 
        </div>
 )
}

export default ItemListContainer