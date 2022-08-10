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
            <li><Link to="contacto">Contacto</Link></li>
            </ul>
                <CartWidget />

            </nav>
        </div>
    )
}

export default NavBar