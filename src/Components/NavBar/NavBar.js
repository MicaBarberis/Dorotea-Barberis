import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar-primary'>
            <img className='logo' src='/assets/logo.png' alt='logo'/>
            <ul>
                <li><button className='button-nav active'>Inicio</button></li>
                <li><button className='button-nav'>Productos</button></li>
                <li><button className='button-nav'>Contacto</button></li>
                <li><button className='button-nav'>Sobre nosotros</button></li>
            </ul>
        </div>
    )
}

export default NavBar