import Item from "../Item/Item"



const ItemList = ({ items }) => {

    return (
        <div>
            <h2 className="list-container__title">Productos</h2>
            <hr />

            <div className='row'>
                {/* <div > */}
                    {items.map((producto) => <Item key={producto.id} item={producto} />)}
                {/* </div> */}
            </div>
        </div>
    )
}

export default ItemList