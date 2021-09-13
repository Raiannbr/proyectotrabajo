import { useEffect} from "react"
import CartWidget from "../cartWidget/CartWidget"
import imgLogo from '../../img/logo.png'
import "./NavBar.css"
import imgCart from '../../img/107831.png'


// import Button from "../button/Button"

const NavBar = ()=>{
  // const [info, setInfo] = useState("")
  useEffect(()=>{
    // console.log("primer render")
    return()=>{
      // console.log("antes de desmontar")
    }
  },[])
  // console.log("reeenderizado")
    return(
        <nav className="containerNav" dark expand="md">
          <img className="imgLogo" src= {imgLogo} alt=""/>
          <div className='navbar-right'>
          <button className="btn btn-sm btn-outline-secondary mx-150"  type="button">Productos</button>
          <button className="btn btn-sm btn-outline-secondary mx-auto" type="button">Nosotros</button>
          <CartWidget imagen = {imgCart} ></CartWidget>
          </div>
        </nav>
    )
}

export default NavBar