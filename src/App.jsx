import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
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
      </Routes>

      <ItemCount stock={4} />
      <ItemCount stock={32} />
      <ItemCount stock={7} />
    </BrowserRouter>
  );
}

export default App;
