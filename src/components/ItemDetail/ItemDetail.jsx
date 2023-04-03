import Button from 'react-bootstrap/Button';
import './ItemDetail.css'

const ItemDetail = ({ item }) => {

    return (
        <div className='row'>
        <div className='Card'>
        <div className='Card_img'>
            
            <img src={item.img} alt={item.name} />
            
            <div className='Card_text'>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Precio: ${item.price}</p>
                <Button variant="primary">Agregar al carrito</Button>
            </div>

        </div>
        </div>
        </div>
    )
}

export default ItemDetail