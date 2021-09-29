import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Muffins from '../ItemList/imgItem/muffins.jpg'
import Muffins1 from '../ItemList/imgItem/muffins1.jpg'
import HamburguesaL from '../ItemList/imgItem/hamburguesas.jpg'
import Omelette from '../ItemList/imgItem/omelette.jfif'
import Item from "../ItemList/Item";
// import prodList from '../ItemList/ItemList'
const prodList = 
[{id: "1",name: "muffins especiales",description:"starwars",price:"200",images:Muffins,stock:"5",categoria:"dulces"},
{id: "2",name: "muffins", description:"marmolado",price:"150",images:Muffins1,stock:"4",categoria:"dulces"},
{id: "3",name: "hamburguesas", description:"pack x4",price:"250",images:HamburguesaL,stock:"6",categoria:"congelados"},
{id: "4",name: "omelette",description:"relleno",price:"300",images:Omelette,stock:"5",categoria:"calientes"}]



function getList() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(prodList), 1000)
    })
    }


export default function Categories(){
    // console.log(prodList)
    const [productsCategory, setProductsCategory] = useState ([]);
    const {CategoriaByID} = useParams()
    useEffect(()=>{

            let arrayCat = getList()
            arrayCat.then( arrayCat => {
                if (!CategoriaByID) {
                    setProductsCategory(arrayCat)
                }else {
                    const prodCategory = arrayCat.filter(prod => prod.categoria === CategoriaByID)
                    setProductsCategory(prodCategory)
                }
            }, err => {
                    console.log(err);

            })
            return (()=> {
                console.log(CategoriaByID)
                setProductsCategory([])
            })
        },[CategoriaByID])
            
            
    
            // const catFilter = arrayCat.filter((productos) => productos.categoria === CategoriaByID)
            // console.log(CategoriaByID)
            
        // getCategory();
    return (
        
        <div className='containerCategory'>
            <h1> Categoria {CategoriaByID}</h1>
            {productsCategory.map(element =>{
                return (
//                     <Link to={`/categoria/${element.id}`} >
                        <div id="card-container">
                            <div className="card-body" key={element.id}>
                            <img src= {element.images} width="180px" height="180px" alt=""/>
                            <h2>{element.name}</h2>
                            <h3>{element.description} </h3>
                            <h3>$ {element.price} </h3>
                            </div>    
                        </div>
//                     </Link>
                )
            })}
        </div>
    )
}

// const getCategory = async () => {

//    let arrayCat = prodList
//    const catFilter = arrayCat.filter(productos => productos.categoria === CategoriaById)
//    console.log(arrayCat)

//    setProdCategory(catFilter);
// }

// useEffect(()=> {
//     getCategory();
// },[CategoriaById])
//ultimos cambios hechos antes de salir, agregados los id, pero no los toma el "json" como el array
