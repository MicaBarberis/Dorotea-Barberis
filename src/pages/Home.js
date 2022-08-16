import { Link } from "react-router-dom"

const Home = () => {
    return (
            <div>
                <h1>Inicio</h1>
                <ul>
                    <li><Link to="/category/Body">Body</Link></li>
                    <li><Link to="/category/Conjunto">Conjuntos</Link></li>
                    <li><Link to="/category/Corpiño">Corpiños</Link></li>
                    <li><Link to="/category/Bombacha">Bombachas</Link></li>
                </ul>
            </div>
    )
}

export default Home