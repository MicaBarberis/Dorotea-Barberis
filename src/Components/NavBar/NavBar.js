import './NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar-primary'>
            <img className='logo' src='/assets/logo.png' alt='logo'/>
            <ul>
                <Link to="/"><li><button className='button-nav'>Inicio</button></li></Link>
                <Link to="productos"><li><button className='button-nav'>Productos</button></li></Link>
                <Link to="contacto"><li><button className='button-nav'>Contacto</button></li></Link>
                <Link to="sobrenosotros"><li><button className='button-nav'>Sobre nosotros</button></li></Link>
                <CartWidget />
            </ul>
        </div>
    )
}

export default NavBar