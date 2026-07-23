import { Children, createContext, useContext, useState } from "react"
import "./CartContext.css"
// import ProductList from "../ProductList/ProductList";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const[carrito, setCarrito] = useState([])

    const agregarAlCarrito = (producto) => {
    setCarrito((carritoAnterior) => {
        const yaExisteElproducto = carritoAnterior.findIndex(
            (articulo) => articulo.id === producto.id
        );

        if (yaExisteElproducto >= 0) {
            return carritoAnterior.map((item) =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            );
        }

        return [...carritoAnterior, { ...producto, cantidad: 1 }];
        });
    };

    const actualizarCantidad = (productoId, cantidad) => {
        setCarrito((carritoAnterior) =>
        carritoAnterior.map((producto) =>
            producto.id === productoId
    ? {...producto, cantidad: producto.cantidad + cantidad}
    : producto
            )
        )
    }

    const eliminarProducto =(productoId) => {
        setCarrito((carritoAnterior) =>
            carritoAnterior.filter((producto) => 
                producto.id !== productoId
    ))}

    const vaciarCarrito = ()=>{
    setCarrito([]);
    }

  return (
    <CartContext.Provider value = {{carrito, agregarAlCarrito, actualizarCantidad, eliminarProducto, vaciarCarrito}}>
        {children}

    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)