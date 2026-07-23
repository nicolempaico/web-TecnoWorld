import "./Navbar.css"
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from "../CartContext/CartContext"
import { useAuth } from "../AuthContext/AuthContext"


const Navbar = () => {

    const {carrito} = useCart();

    const {usuario, logout} = useAuth();

    const totalProductos = carrito.reduce((acc, producto) =>
        acc + producto.cantidad, 0
    )
  return (
    <section className='header'>
        <h1 className='logo'> TECNO<span>WORLD</span></h1>
        <nav className='navbar'>
            <ul className='nav-links'>
                <li>
                    <Link to = "/">Home</Link>
                </li>
            </ul>
        </nav>
        <div className='icons'>

    {/* <button className='search-button'>
        <i className='fas fa-search'></i>
    </button> */}


    {
        usuario ? (

            <>

            <span className="user-name">
                Hola, {usuario.nombre}
            </span>


            <button 
            className="logout-btn"
            onClick={logout}
            >
                Cerrar sesión
            </button>

            </>


        ) : (

            <Link 
            to="/login"
            className="login-btn"
            >
                Iniciar sesión
            </Link>

        )
    }



    <Link to = "/carrito" className='icon-button'>

        <i className='fas fa-shopping-cart'></i>

        <span className='counter'>
            {totalProductos}
        </span>

    </Link>


</div>
    </section>
  )
}

export default Navbar