import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Muffins from '../ItemList/imgItem/muffins.jpg'
import Muffins1 from '../ItemList/imgItem/muffins1.jpg'
import HamburguesaL from '../ItemList/imgItem/hamburguesas.jpg'
// import prodList from '../ItemList/ItemList'
const prodList = [{id: "1",name: "muffins especiales",description:"starwars",price:"200",images:Muffins,stock:"5",category:"dulces"},
{id: "2",name: "muffins", description:"marmolado",price:"150",images:Muffins1,stock:"4",category:"dulces"},
{id: "3",name: "hamburguesas", description:"lentejas",price:"250",images:HamburguesaL,stock:"6",category:"calientes"}]



export default function Categories(){
    // console.log(prodList)
    


    const [prodCategory, setProdCategory] = useState ([]);
    const {CategoriaById} = useParams()

    const getCategory = async () => {

       let arrayCat = prodList
       const catFilter = arrayCat.filter(productos => productos.categoria === CategoriaById)

       setProdCategory(catFilter);
    }

    useEffect(()=> {
        getCategory();
    },[CategoriaById])
    
    return (
        <div>
            <div className='containerCategory'>
            <h1>CATEGORIA {CategoriaById}</h1>
            {prodCategory.map(element =>{ 
                return (
                    <Link to={`/Categoria/${element.id}`}> 
                        <p> {element.title}</p>
                    </Link>
                )
            })}
        </div>
        </div>
    )
}
//ultimos cambios hechos antes de salir, agregados los id, pero no los toma el "json" como el array