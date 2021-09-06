import './ItemListContainer.css'
import { useState } from 'react';
import imgAli from '../../img/alianza.jpg'


const ItemListContainer = ()=>{

    const [count, setCount] = useState(0)
    console.log(count)
    console.log(setCount)
  
    const stock = 10;
  
    const sumar = ()=>{
      if(count === stock){
          console.log("llegaste al tope")
        // <h1>llegaste al tope</h1>
      }else{
        setCount(count + 1)
      }
    }
  
  
  
    const restar = ()=>{
      if(count<= 0){
        console.log("no hago nada")
      }else{
        setCount(count - 1)
      }
    }
  

    return(         
        // <button type="button" class="btn btn-primary">Acá estara el shop en grande</button>
        <div class="col-sm-4">
        <div id="card-product" class="">
         <div class="card-body">
         <img src= {imgAli} width="180px" height="180px" alt=""/>
         <br></br>
        <h1 style= {{color:'red'}}>{count}</h1>
        <button class="btn btn-primar" onClick = {sumar}>Sumar</button>
        <button class="btn btn-primar" onClick = {restar}>Restar</button>
        {/* { count <= 0 ? <h1>Es cero</h1> : <h1> No es cero</h1>} */}
        <br/>
        <button id="add-to-cart" type="button" class="btn btn-primar">Agregar al Carrito</button>



         </div>
         </div>
    </div>
        
    )
}

export default ItemListContainer