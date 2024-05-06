import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Bienvenido a la tienda" />
      <ItemCount stock={4} />
      <ItemCount stock={32} />
      <ItemCount stock={7} />
    </div>
  );
}

export default App;
