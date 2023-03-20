import CartWidget from '../CartWidget.js/CarWidget'
import '../Navbar/Navbar.css'
import logo from '../../assets/LogoIndra.jpeg'

export function Navbar() {
    return (
        <header className='header'>
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>
                <nav className="navbar">
                    <p className="navbar__link">INICIO</p>
                    <p className="navbar__link">QUIENES SOMOS</p>
                    <p className="navbar__link">CONTACTO</p>
                    <p className="navbar__link">PREGUNTAS FRECUENTES</p>
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}