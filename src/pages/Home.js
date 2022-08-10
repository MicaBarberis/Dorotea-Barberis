import { Link } from "react-router-dom"

const Home = () => {
    return (
            <div>
                <h1>Inicio</h1>
                <ul>
                    <li><Link to="/category/Remeras">Body</Link></li>
                    <li><Link to="/category/Abrigo">Conjuntos</Link></li>
                    <li><Link to="/category/Pantalones">Corpiños</Link></li>
                    <li><Link to="/category/Accesorios">Bombachas</Link></li>
                </ul>
            </div>
    )
}

export default Home