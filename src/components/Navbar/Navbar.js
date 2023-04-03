import './Navbar.css'
import logo from '../../assets/LogoIndra.jpeg'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/velas' className="navbar__link">Velas</Link>
                    <Link to='/productos/espejos' className="navbar__link">Espejos</Link>
                    <Link to='/productos/macetas' className="navbar__link">Macetas</Link>
                    <Link to='/productos/otros' className="navbar__link">Otros</Link>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}