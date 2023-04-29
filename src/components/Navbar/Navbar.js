import './Navbar.scss'
import logo from '../../assets/LogoIndraNegativo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'

export const Navbar = ({red}) => {
    const { user, logout } = useContext(LoginContext)

    return (
        <header className="header" style={{backgroundColor: red ? 'red' : 'black'}}>
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/velas' className="navbar__link">Velas</Link>
                    <Link to='/productos/espejos' className="navbar__link">Espejos</Link>
                    <Link to='/productos/macetas' className="navbar__link">Macetas</Link>
                    <Link to='/productos/difusores' className="navbar__link">Difusores</Link>
                    <Link to='/productos/alfombras' className="navbar__link">Alfombras</Link>
                    <Link to='/productos/almohadones' className="navbar__link">Almohadones</Link>
                    <Link to='/productos/otros' className="navbar__link">Otros</Link>
                    <Link to='/nosotros' className="navbar__link">Nosotros</Link>
                </nav>

                <CartWidget />
            </div>

            <div className='user'>
                <h6>Bienvenido: {user.email}</h6>
                <button className='btn btn-danger' onClick={logout}>Cerrar sesión</button>
            </div>
        </header>
    )
}