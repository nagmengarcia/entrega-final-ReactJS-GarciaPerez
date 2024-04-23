import imgLogo from "../../assets/logo-tienda.png"
import "./NavBar.css"
const NavBar = () => {
  return (
    <div className="nav-bar">
        <div>
            <img src={imgLogo} className="img-logo" alt="" />
        </div>

        <ul className="nav-bar__link-item-group">
            <li className="nav-bar__list-item">Guantes</li>
            <li className="nav-bar__list-item">Tibiales</li>
            <li className="nav-bar__list-item">Vendas</li>
        </ul>
        
    </div>
  )
}

export default NavBar