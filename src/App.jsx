import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer saludo="Bienvenido a la tienda" />}
          />
          <Route
            path="/category/:idCategory"
            element={<ItemListContainer saludo="Bienvenido a la tienda" />}
          />
          <Route
            path="/detalle/:idProducto"
            element={<ItemDetailContainer />}
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
