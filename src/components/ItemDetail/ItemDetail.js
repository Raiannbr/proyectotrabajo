import React from 'react'
import Item from '../ItemList/Item'
// import './ItemDetail.css'

const ItemDetail = ({detail, setDetail})=>{

    return(
        <div className="detail">
            <h1>Detalle</h1>

                         {/* itero en el componente del cart, y cada iteración es un prodselect
                         cada iteración es reendereizada en el componente itemdetail cada iteración tiene su id
                         NEcesito el detail en si, con todas sus iteraciones, estado del DETAIL, y la función que modifica el DETAIL SETDETAIL */}  
        {detail.length === 0 ? 
        (<h2>0</h2>) : (detail.map((prodSelect => 
        <Item key={prodSelect.id} prodSelect= {prodSelect} 
        detail={detail} setDetail={setDetail} />)))}

        </div>
    )

}
export default ItemDetail