import { Link } from "react-router-dom"
import './Item.scss'

const Item = ( {item} ) => {

    return (
        <div className='anItem col-lg-3 g-3'>
            <h2>{item.name}</h2>
            <img src={item.img}/>
            <p className="fw-semibold fst-italic">Precio: ${item.price}</p>
            <p><small>Categoría: {item.category}</small></p>
            <Link to={`/detail/${item.id}`} className='btn btn-dark'>Conoce más sobre este producto!</Link>
        </div>
    )
}

export default Item