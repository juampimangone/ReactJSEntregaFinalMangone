import '../ItemListContainer/ItemListContainer.css'
import Button from 'react-bootstrap/Button';


const ItemListContainer = ({greeting}) => {
    return (
        <div className="container my-5">
            <h2 className="list-container__title">Seleccione sus productos!</h2>
            <hr/>

            <p>{greeting}</p>

            <Button variant="danger">COMPRAR !</Button>
        </div>
    )
}

export default ItemListContainer