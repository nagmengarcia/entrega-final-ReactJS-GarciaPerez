import imgLogo from "../../assets/logo-tienda.png"
import CartWidget from "./CartWidget"
import "./NavBar.css"
const NavBar = () => {
  return (
    <div className="nav-bar">
        <div>
            <img src={imgLogo} className="img-logo" alt="" />
        </div>

        <div className="nav-bar__menu-and-cart">
          <ul className="nav-bar__link-item-group">
              <li className="nav-bar__list-item">Guantes</li>
              <li className="nav-bar__list-item">Tibiales</li>
              <li className="nav-bar__list-item">Vendas</li>
          </ul>
          <CartWidget />
          
        </div>
    </div>
  )
}

export default NavBar