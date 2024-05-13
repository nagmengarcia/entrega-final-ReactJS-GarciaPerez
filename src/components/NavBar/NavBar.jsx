import imgLogo from "../../assets/logo-tienda.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <img src={imgLogo} className="img-logo" alt="" />
      </Link>

      <div className="nav-bar__menu-and-cart">
        <ul className="nav-bar__link-item-group">
          <Link to="/category/guantes" className="nav-bar__list-item">
            Guantes
          </Link>
          <Link to="/category/shorts" className="nav-bar__list-item">
            Shorts
          </Link>
          <Link to="/category/vendas" className="nav-bar__list-item">
            Vendas
          </Link>
          <Link to="/category/tibiales" className="nav-bar__list-item">
            Tibiales
          </Link>
          <Link to="/category/bucales" className="nav-bar__list-item">
            Protectores bucales
          </Link>
        </ul>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
