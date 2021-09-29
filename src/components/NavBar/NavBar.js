import { useState} from "react"
import { Link } from "react-router-dom"
import CartWidget from "../cartWidget/CartWidget"
import imgLogo from '../../img/logo.png'
import "./NavBar.css"
import imgCart from '../../img/107831.png'
import { Collapse,
        Navbar as NavBarB,
        NavbarToggler,
        NavbarBrand,
        Nav,
        UncontrolledDropdown,
        DropdownToggle,
        DropDownMenu,
        DropdownItem,
        Col,
        DropdownMenu,
} from 'reactstrap'


// import Button from "../button/Button"

const NavBar = ()=>{
  // const [info, setInfo] = useState("")
  // useEffect(()=>{
  //   // console.log("primer render")
  //   return()=>{
  //     // console.log("antes de desmontar")
  //   }
  // },[])
  // console.log("reeenderizado")

    const[isOpen, setIsOpen] = useState(false);
    const toggle = ()=> setIsOpen(!isOpen);

    return(
        <NavBarB className= 'containerNav' dark expand='md'>
            <NavbarBrand><img className="imgLogo" src= {imgLogo} alt=""/></NavbarBrand>
            <div className='navbar-right'>
                <NavbarToggler onClick = {toggle}/>
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="linkNav" navbar>
                    <Link to='/' className='nav-item'> Producto </Link> 
                    {/* <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret> Detalles</DropdownToggle>
                        <DropdownMenu right>
                            <Link to='/Productos/Detalles/Dulces'><DropdownItem>Productos Dulces</DropdownItem></Link>
                            <Link to='/Productos/Detalles/Congelados'><DropdownItem>Productos ongelados</DropdownItem></Link>
                            <Link to='/ProductosDetalles/Calientes'><DropdownItem>Platos calientes</DropdownItem></Link>
                        </DropdownMenu>
                    </UncontrolledDropdown> */}
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret> Categorias</DropdownToggle>
                      <DropdownMenu right>
                              <Link to='/productos/categoria/dulces'><DropdownItem>Productos dulces</DropdownItem></Link>
                              <Link to='/productos/categoria/congelados'><DropdownItem>Productos ongelados</DropdownItem></Link>
                              <Link to='/productos/categoria/calientes'><DropdownItem>Platos calientes</DropdownItem></Link>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav> 
                </Collapse>
                <CartWidget imagen = {imgCart} ></CartWidget>
            </div>
        </NavBarB>


        // <nav className="containerNav" expand="md">
        //   <img className="imgLogo" src= {imgLogo} alt=""/>
        //   <div className='navbar-right'>
        //   <button className="btn btn-sm btn-outline-secondary mx-150"  type="button">Productos</button>
        //   <button className="btn btn-sm btn-outline-secondary mx-auto" type="button">Nosotros</button>
        //   <CartWidget imagen = {imgCart} ></CartWidget>
        //   </div>
        // </nav>
    )
}

export default NavBar