import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import DetailsProduct from "./Components/DetailsProduct/DetailsProduct"
import { CartProvider } from "./Components/CartContext/CartContext"
// jjjAAAAAAA
import { AuthProvider } from "./Components/AuthContext/AuthContext"
import { Cart } from "./Components/Cart/Cart"
import { useState } from "react"
import Search  from "./Components/Search/Search"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Checkout from "./Components/Checkout/Checkout"



function App() {
  const[buscarTermino, setBuscarTermino] = useState("");

  const handleBuscar = (termino) => {
    setBuscarTermino(termino.toLowerCase())
  }

  return (
    <>
      <AuthProvider>
      <CartProvider>
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element = {<Home buscarTermino = {buscarTermino}/> } />
      <Route path="/producto/:id" element = {<DetailsProduct/> } />
      <Route path="/carrito" element = {<Cart/> } />
      <Route path="/search" element = {<Search onSearch = {handleBuscar}/> }/>
      <Route path="/login" element={<Login/>} />
      <Route path="/registro" element={<Register/>} />
      <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      </Router>
      </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App