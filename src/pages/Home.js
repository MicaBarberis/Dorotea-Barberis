import { Link } from "react-router-dom"

const Home = () => {
    return (
            <div>
                <h1>Inicio</h1>
                <ul>
                    <li><Link to="/category/body">Body</Link></li>
                    <li><Link to="/category/conjunto">Conjuntos</Link></li>
                    <li><Link to="/category/corpiño">Corpiños</Link></li>
                    <li><Link to="/category/bombacha">Bombachas</Link></li>
                </ul>
            </div>
    )
}

export default Home