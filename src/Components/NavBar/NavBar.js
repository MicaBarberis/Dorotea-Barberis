import './NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className='navbar-primary'>
            <img className='logo' src='/assets/logo.png' alt='logo'/>
            <ul>
                <li><button className='button-nav'>Inicio</button></li>
                <li><button className='button-nav  active'>Productos</button></li>
                <li><button className='button-nav'>Contacto</button></li>
                <li><button className='button-nav'>Sobre nosotros</button></li>
                <CartWidget />
            </ul>
        </div>
    )
}

export default NavBar