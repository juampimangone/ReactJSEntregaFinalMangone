import { useEffect, useState } from "react"
import './Nosotros.scss'

const Nosotros = () => {

    const handleClick = (text) => {
        console.log(text)
    }

    return (
        <div onClick={() => handleClick("Hola mundo")} className="container my-5">
            <h2>Nosotros</h2>
            <hr/>
            <div className="nosotrosPh">
                <p>¡Hola a todos! Somos Agostina y Martina, dos hermanas que creamos Indra en el año 2020. Nuestra marca comenzó como una idea durante la pandemia, cuando nos dimos cuenta de que queríamos hacer algo significativo y creativo con nuestro tiempo en casa. Comenzamos con velas de soja 100% naturales y poco a poco fuimos ampliando nuestra gama de productos de home.</p>
                <p>En Indra, nos esforzamos por ofrecer productos artesanales y ECO-friendly que no solo embellecen su hogar, sino que también promueven un estilo de vida saludable y sustentable. Nos enorgullece utilizar materiales renovables en todos nuestros productos para minimizar nuestro impacto en el planeta.</p> 
                <p>¡Esperamos que nuestros productos mejoren su experiencia en el hogar y contribuyan a la construcción de un mundo más sustentable!</p> 
            </div>
        </div>
    )
}

export default Nosotros