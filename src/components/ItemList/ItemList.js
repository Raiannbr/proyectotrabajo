import { useState } from 'react'
import Item from './Item'
import ItemDetail from '../ItemDetail/ItemDetail'
import Muffins from './imgItem/muffins.jpg'
import Muffins1 from './imgItem/muffins1.jpg'
import HamburguesaL from './imgItem/hamburguesas.jpg'
import Omelette from './imgItem/omelette.jfif'

//(paso 1) Inicio de mi trabajo, contenido dentro del ItemListContainer, luego son todos hijos de este componente

//lista de objetos que voy a tener
const prodList = 
[{id: "1",name: "muffins especiales",description:"starwars",price:"200",images:Muffins,stock:"5",category:"dulces"},
{id: "2",name: "muffins", description:"marmolado",price:"150",images:Muffins1,stock:"4",category:"dulces"},
{id: "3",name: "hamburguesas", description:"lentejas",price:"250",images:HamburguesaL,stock:"6",category:"calientes"},
{id: "4",name: "omelette",description:"relleno",price:"300",images:Omelette,stock:"5",categoria:"calientes"}]


const ItemList =()=>{

    //estado de productos con lista de productos
    //estado del componente, y del listado de productos(función que modifica el componente)
    const [prodTienda, setProdTienda] = useState(prodList)

    //Estado del Detalle, el detalle esta en 0 de entrada
    const [detail, setDetail] = useState([])
    
    return(
        <>
            <h3>Productos tienda</h3>
            {/* forma de recorrer el estado prodTienda es con map
            guardo cada producto seleccionado en prodSelect */}

            {prodTienda.map((prodSelect) => (
                // componenete item donde le paso las props del hijo al padre 
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