import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetail from './components/ItemDetail/ItemDetail';
// import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Categories from './components/Categories/Categories';
import {BrowserRouter, Route, Switch, } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact path = "/" component = {ItemListContainer} />
            <Route exact path = '/productos/categoria/:CategoriaByID' component = {Categories}/>
            <Route exact path = '/productos/detalles/:detalleByID' component = {ItemDetail}/>

        </Switch>

        {/* <ItemListContainer/> */}
      
      </BrowserRouter>
      


        {/* <CartContex.Provider value = {cart} > */}
    </div>
  );
}

export default App;
