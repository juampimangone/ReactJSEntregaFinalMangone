import { useEffect, useState } from "react"


const Nosotros = () => {

    const handleClick = (text) => {
        console.log(text)
    }

    return (
        <div onClick={() => handleClick("Hola mundo")} className="container my-5">
            <h2>Nosotros</h2>
            <hr/>
        </div>
    )
}

export default Nosotros