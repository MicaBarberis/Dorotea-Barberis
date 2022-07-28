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

    /*NO SE COMO HACER PARA QUE EL CONTADOR NO SEA EN NUMEROS NEGATIVOS! HICE ASI PERO SE QUE ESTÁ MAL PORQUE NO FUNCIONA JAJA*/
    if(setContador < 0){
        setContador (contador=0)
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