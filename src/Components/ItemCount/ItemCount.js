import { useState, useEffect } from "react"

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);
    
    const addNumber = () => {
        if(stock > contador)
        setContador(contador + 1);
    }
    const removeNumber = () => {
        setContador(contador - 1); 
    }

    useEffect(() => {
        console.log("Actualización")
    }, [contador])


return (
    <div className='countProd'>
    <button onClick={removeNumber}>-</button>
    <p>{contador}</p>
    <button onClick={addNumber}>+</button>
</div>
)

}



export default ItemCount