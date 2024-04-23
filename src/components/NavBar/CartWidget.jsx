import { IoCartOutline } from "react-icons/io5";
import "./CartWidget.css"
const CartWidget = () => {
  return (
    <div className="nav-bar__cart">
        <IoCartOutline size={24} />
        <p className="pepe">0</p>
    </div>
  )
}

export default CartWidget