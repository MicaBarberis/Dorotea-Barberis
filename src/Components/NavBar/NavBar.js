import './NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar-primary'>
            <nav>
            <Link to="/" className="brand-logo"><img className='logo' src='/assets/logo.png' alt='logo'/></Link>
            <ul className='text-navbar'>
            <li className='text'><Link to="/"><button>Inicio</button></Link></li>
            <li className='text'><Link to="productos"><button>Productos</button></Link></li>
            <li className='text'><Link to="contacto"><button>Contacto</button></Link></li>
            </ul>
                <CartWidget />

            </nav>
        </div>
    )
}

export default NavBar