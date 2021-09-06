import { useEffect} from "react"
import CartW from "../cartW/CartW"
import imgLogo from '../../img/logo.png'
import "./NavBar.css"

// import Button from "../button/Button"

const NavBar = ()=>{

  // const [info, setInfo] = useState("")


  useEffect(()=>{
    console.log("primer render")
    return()=>{
      console.log("antes de desmontar")
    }
  },[])

  console.log("reeenderizado")


    return(
        <nav className="containerNav" dark expand="md">
        {/* <form className="container-fluid justify-content-start"> */}
        {/* <i className= 'https://pm1.narvii.com/6187/09f9647a65c174ec43b776894761007927a4dbfb_hq.jpg'></i> */}
          <img className="imgLogo" src= {imgLogo} alt=""/>
          <div className='navbar-right'>
          {/* <button className="btn btn-outline-success me-2" type="button">Alianza Reverde</button> */}
          <button className="btn btn-sm btn-outline-secondary mx-150"  type="button">Productos</button>
          <button className="btn btn-sm btn-outline-secondary mx-auto" type="button">Nosotros</button>
          <CartW/>
          </div>
          
        {/* </form> */}
        </nav>
    )
}

export default NavBar