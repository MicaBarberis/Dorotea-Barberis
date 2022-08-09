import { Link } from "react-router-dom"

const Products = () => {
    return (
    <div className="container">
        <section className="main-container">
                <ul>
                    <li><Link to="/category/Body">Body</Link></li>
                    <li><Link to="/category/Conjuntos">Conjuntos</Link></li>
                    <li><Link to="/category/Corpiños">Inferior</Link></li>
                    <li><Link to="/category/Inferior">Corpiños</Link></li>
                </ul>
        </section>
    </div>
 )
}

export default Products

