import './ItemListContainer.css'
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
// import imgAli from '../../img/alianza.jpg'


const ItemListContainer = (props)=>{
  // console.log("props de container",props)

    const [count, setCount] = useState(0)
    
    // const stock = 5;
    const sumar = ()=>{
      if(count === props.stockmax){
      }else{
        setCount(count + 1)
      }
    }
    const restar = ()=>{
      if(count<= 0){
        // console.log("no hago nada")
      }else{
        setCount(count - 1)
      }
    }
 
    return(         
        
          <ItemList/>
    )
}

export default ItemListContainer