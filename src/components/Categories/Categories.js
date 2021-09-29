import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Muffins from '../ItemList/imgItem/muffins.jpg'
import Muffins1 from '../ItemList/imgItem/muffins1.jpg'
import HamburguesaL from '../ItemList/imgItem/hamburguesas.jpg'
import Item from "../ItemList/Item";
// import prodList from '../ItemList/ItemList'
const prodList = 
[{id: "1",name: "muffins especiales",description:"starwars",price:"200",images:Muffins,stock:"5",categoria:"dulces"},
{id: "2",name: "muffins", description:"marmolado",price:"150",images:Muffins1,stock:"4",categoria:"dulces"},
{id: "3",name: "hamburguesas", description:"lentejas",price:"250",images:HamburguesaL,stock:"6",categoria:"calientes"},
{id: "4",name: "muffins especiales",description:"starwars",price:"200",images:Muffins,stock:"5",categoria:"congelados"}]



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
                    <Link to={`/categoria/${element.id}`} >
                        {/* <Item  /> */}
                        <p>{element.categoria} </p>
                    </Link>
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