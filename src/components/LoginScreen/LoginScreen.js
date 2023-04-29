import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    const { login, googleLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)
    }

    return (
        <div className="login-container">
            <div className="login">
                <h2>Inicio de sesión</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        type={'email'}
                        className="form-control my-2"
                        placeholder='Tu email'
                    />

                    <input 
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        type={'password'}
                        className="form-control my-2"
                        placeholder='Contraseña'
                    />
                    <button className='btn btn-dark' type='submit'>Ingresar</button>
                    <button className='btn btn-primary ms-3' type='submit'><Link to={"/register"} className='register'>Registrarme</Link></button>
                </form>
                    <button className='btn btn-outline-dark mt-3' onClick={googleLogin}>Ingresar con google</button>

            </div>
        </div>
    )
}

export default LoginScreen