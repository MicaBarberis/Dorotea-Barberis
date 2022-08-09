import './NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar-primary'>
            <nav>
            <Link to="/" className="brand-logo">  <img className='logo' src='/assets/logo.png' alt='logo'/></Link>
            <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="productos">Productos</Link></li>
            <li><Link to="productos/Body">Body</Link></li>
            <li><Link to="productos/Conjuntos">Conjuntos</Link></li>
            <li><Link to="productos/Inferior">Inferior</Link></li>
            <li><Link to="productos/Corpiños">Corpiños</Link></li>
            <li><Link to="contacto">Contacto</Link></li>
            <li><Link to="sobrenosotros"></Link></li>
                <CartWidget />
            </ul>
            </nav>
        </div>
    )
}

export default NavBar