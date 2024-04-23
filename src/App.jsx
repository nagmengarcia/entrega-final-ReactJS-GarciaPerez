import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  return (
   <div>
    <NavBar/>
    <ItemListContainer saludo="Bienvenido a la tienda"/>
   </div>
  )
}

export default App
