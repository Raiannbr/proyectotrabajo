// import imgProd from '../ItemList/imgItem/muffins.jpg'
import { useEffect, useState } from "react";

const productos = [{id: "1",name: "muffins especiales",description:"starwars",stock:5,images:'./ItemList/imgItem/muffins.jpg'},
                   {id: "2",name: "muffins", description:"marmolado",stock:5,images:'./ItemList/imgItem/muffins1.jpg'}
                    ];

function getProd (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(productos),2000)
    })
}
// function prodEncontrados() {
//     const producto = getProd();
//     producto.then(producto => {
//         productos.map(prod => <li key={prod.id}>{prod.name}</li>)
//     })
// }
// prodEncontrados()
const Item = ()=>{
    //Establezco mi State, para empezar con un array vacio y reenderizo mi componente
    const [prodAlmacenados, setProdAlmacenados] = useState([])

    useEffect(()=> {
        //declaro mi lista de productos que obtengo luego de 3 seg. desde mi array
        const listProd = getProd()
        listProd.then(listProd => {
            //función que me cambia el estado, y luego devuelve la lista en el "set"
            setProdAlmacenados(listProd)
        })
    },[])


    return(
        <div>
           {prodAlmacenados.map( misProd => <div className="col-sm-4">
                <div id="card-product">
                    <div className="card-body" key={misProd.id}>
                        <img src= {misProd.images} width="180px" height="180px" alt=""/>
                        <h2>{misProd.name}</h2>
                        <h3>{misProd.description} </h3>
                        <h3>$ {misProd.stock} </h3>
                    </div>
                </div>
           </div>)}
        </div>
    )
}
export default Item