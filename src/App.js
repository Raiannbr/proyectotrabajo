import './App.css';
import NavBar from './components/NavBar/NavBar';
// import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Categories from './components/Categories/Categories';
import CartContex from './CartContext/CartContex';
import {BrowserRouter, Route, Switch, } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact path = "/" component = {ItemListContainer} />
            <Route exact path = "/Productos" component = {Categories}/>
        </Switch>

        {/* <ItemListContainer/> */}
      
      </BrowserRouter>
      


        {/* <CartContex.Provider value = {cart} > */}
    </div>
  );
}

export default App;
