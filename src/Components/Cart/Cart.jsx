import { useCart } from "../CartContext/CartContext"
import "./Cart.css"
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

export const Cart = () => {

    const {carrito, actualizarCantidad, eliminarProducto} = useCart();

    const {usuario} = useAuth();

    const navigate = useNavigate();




    const costoEnvio = 10;
    const subTotal = carrito.reduce((acc, producto) =>
        acc + producto.precio * producto.cantidad, 0)

    const total = subTotal + costoEnvio

    const handleAumentarCantidad = (productoId) => {
        actualizarCantidad(productoId, 1)
    }

    const handleDisminuirCantidad = (productoId) => {
        const producto = carrito.find((item) => item.id === productoId)
        if(producto.cantidad>1) {
            actualizarCantidad(productoId, -1)
        }
    }

    const handleComprar = ()=>{


    if(carrito.length === 0){

        alert("El carrito está vacío");

        return;

    }



    if(usuario){

        navigate("/checkout");

    }else{

        navigate("/login");

    }


}
  return (
    <div className="cart-container">
        <h2>TU <span>CARRITO</span></h2>
        { carrito.length === 0 ? (
            <p>Tu carrito está vacío</p>
        ):(
            <>
            <div className="cart-header">
                <p>Productos</p>
                <p>Precio</p>
                <p>Cantidad</p>
                <p>Total</p>
                <p>Acción</p>
            </div>
            <ul className="cart-items">
                {
                    carrito.map((producto) => {
                        const totalPrecio = producto.precio * producto.cantidad
                        return(
                            <li className="cart-item" key={producto.id}>
                                <div className="product-info">
                                    <img src={producto.imagen || "https://via-placeholder.com/150"} alt=""
                                    className="product-images"
                                    />
                                    <span>{producto.nombre}</span>
                                </div>
                                <p>s/ {producto.precio.toFixed(2)}</p>

                                <div className="quantity-controls">
                                    <button className="quantity-btn"
                                    onClick={()=> handleDisminuirCantidad(producto.id)}>
                                         - 
                                    </button>

                                    <input type="number"
                                    className="quantity-input"
                                    readOnly
                                    value={producto.cantidad}
                                    />
                                    <button className="quantity-btn"
                                    onClick={()=> handleAumentarCantidad(producto.id)}>
                                        +
                                    </button>
                                </div>
                                <p>s/ {totalPrecio.toFixed(2)}</p>
                                <button className="delete-btn"
                                onClick={() => eliminarProducto(producto.id)}>
                                <i className="fas fa-trash"></i>
                                </button>
                            </li>
                        )

                    })
                }


            </ul>
            </>
        )}

        <div className="cart-summary">
            <h2>TU <span>CARRITO</span></h2>
            <p>Total Parcial: <span>s/ {subTotal.toFixed(2)}</span></p>
            <p>Tarifa de envío: <span>s/ {costoEnvio.toFixed(2)}</span></p>
            <p className="total">Total: <span>s/ {total.toFixed(2)}</span></p>
            <button className="checkout-btn" onClick={handleComprar} >
                COMPRAR AHORA
            </button>
        </div>

        
    </div>
  )
}
