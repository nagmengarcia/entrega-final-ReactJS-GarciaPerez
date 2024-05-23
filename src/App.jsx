import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route
            path="/detalle/:idProducto"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
