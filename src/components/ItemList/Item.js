import React, { useState } from 'react';

//pasamos las props de itemlist
const Item = ({prodSelect,detail,setDetail,prodTienda})=> {


    const [count,setCount] = useState(0)

    const sumar =()=>{
        if(count === parseInt(stock)){
            alert("No hay mas stock")
        }else{
            setCount(count + 1)
        }
    }

    const restar = () =>{
        if(count <= 0){
        }else{
            setCount(count -1)
        }
    }

    // const [count, setCount] = useState(0)
    
    // const stock = 5;
   

    //los declaro para después a la horar de pasarlos en el return no tengo que poenr prodSelect.
    const {name, description, price, images, id,stock} = prodSelect


    const seeDetail = (id) => {

        const prodSelect = prodTienda.filter((prodSelect)=> prodSelect.id === id)
        //modifico mi array del useState, modifico mi arreglo, con los corchetes que le paso
        //uso restoperator para no reemplazar el anterior
        setDetail([...detail,...prodSelect]);
    };

    const deteleDetail = (id) => {
        const prodTienda = detail.filter(prodSelect => prodSelect.id !== id)
    }

    return(
                <div id="card-container">
                    <div className="card-body" key={id}>
                         <img src= {images} width="180px" height="180px" alt=""/>
                         <h2>{name}</h2>
                         <h3>{description} </h3>
                         <h3>$ {price} </h3>

                        { prodTienda ? (
                            <button type="button" className="btn btn-primary" onClick={ ()=>seeDetail(id) } > Ver Producto</button>

                        ) : ( <div>
                                <h3>cantidad {count} </h3>
                                <button className="btn btn-secundary" onClick={sumar}>+1</button>
                                <button className="btn btn-secundary" onClick={restar} >-1</button>
                              </div>
                        ) }

                     </div>
                </div>
    )
}

export default Item


// // import imgProd from '../ItemList/imgItem/muffins.jpg'
// import { useEffect, useState } from "react";

// // const productos = [{id: "1",name: "muffins especiales",description:"starwars",pice:200,images:'./ItemList/imgItem/muffins.jpg'},
// //                    {id: "2",name: "muffins", description:"marmolado",pice:150,images:'./ItemList/imgItem/muffins1.jpg'}];

// function getProd (){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=> resolve(productos),2000)
//     })
// }
// // function prodEncontrados() {
// //     const producto = getProd();
// //     producto.then(producto => {
// //         productos.map(prod => <li key={prod.id}>{prod.name}</li>)
// //     })
// // }
// // prodEncontrados()
// const Item = ()=>{
//     //Establezco mi State, para empezar con un array vacio y reenderizo mi componente
//     const [prodAlmacenados, setProdAlmacenados] = useState([])

//     useEffect(()=> {
//         //declaro mi lista de productos que obtengo luego de 3 seg. desde mi array
//         const listProd = getProd()
//         listProd.then(listProd => {
//             //función que me cambia el estado, y luego devuelve la lista en el "set"
//             setProdAlmacenados(listProd)
//         })
//     },[])
//     return(
//         <div>
//            {prodAlmacenados.map( misProd => <div className="col-sm-4">
//                 <div id="card-product">
//                     <div className="card-body" key={misProd.id}>
//                         <img src= {misProd.images} width="180px" height="180px" alt=""/>
//                         <h2>{misProd.name}</h2>
//                         <h3>{misProd.description} </h3>
//                         <h3>$ {misProd.pice} </h3>
//                     </div>
//                 </div>
//            </div>)}
//         </div>
//     )
// }
// export default Item