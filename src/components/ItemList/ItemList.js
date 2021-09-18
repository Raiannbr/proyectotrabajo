import { useState } from 'react'
import Item from './Item'
import ItemDetail from '../ItemDetail/ItemDetail'
import Muffins from './imgItem/muffins.jpg'
import Muffins1 from './imgItem/muffins1.jpg'



const ItemList =()=>{
    //estado de productos con lista de productos
    const [prodTienda, setProdTienda] = useState([
        {id: "1",name: "muffins especiales",description:"starwars",price:"200",images:Muffins,stock:"5"},
        {id: "2",name: "muffins", description:"marmolado",price:"150",images:Muffins1,stock:"4"}
    ])

    //Estado del carrito, el carrito esta en 0 de entrada
    const [detail, setDetail] = useState([])
    
    return(
        <>
            <h3>Productos tienda</h3>
            {prodTienda.map((prodSelect) => (
                <Item
                    key={prodSelect.id}
                    //prod solo, recorro el listado, y cada objeto se guarda en prodselect
                    prodSelect={prodSelect}
                    //paso como props el carrito que es el estado, si no lo paso Items, no lo reconoce
                    detail={detail}
                    //como detail es un estado, modificado, y paso el setDetail
                    setDetail = {setDetail}
                    // paso el estado de mis productos tiendas. mi listado
                    prodTienda = {prodTienda}
                />
            ))}
            <ItemDetail 
                detail={detail}
                setDetail = {setDetail}
            />
        </>
    )
}
export default ItemList