import { useParams } from "react-router-dom"
import "./DetailsProduct.css"
import { useEffect, useState } from "react"
import { useCart } from "../CartContext/CartContext"

const DetailsProduct = () => {
  const {id} = useParams()
  const [producto, setProducto] = useState(null) //fuaradr los detalles de producto
  const [error, setError] = useState(null) //manejar posibles erroes
  
  const {agregarAlCarrito} = useCart();
  const handleAgregarAlCarrito = () => {
    if(producto) {
      agregarAlCarrito({
        id: producto.id,
        imagen: producto.imagen,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1
      })
    }
  }

  useEffect(() => {
    const fetchProductos = async () => {
            try {
                const response = await fetch(`http://localhost:3001/productos/${id}`);
                if(!response.ok){
                    throw new Error("Error al cargar los detalles del producto");
                }
                const data = await response.json();
                setProducto(data)
                
            }catch(err) {
                setError(err.message)
            }
        }
        fetchProductos();
  }, [id])

  if (error) {
    return <h2 className="error-message">{error}</h2>;
  }

  return (
    <div className="product-details">
      {
        producto ? 
        (
          <>
          <img src={producto.imagen}alt={producto.nombre} className="image-small"/>
          <img src ={producto.imagen}alt={producto.nombre} />
          <div className="product-infos">
            <h1>{producto.nombre}</h1>
            <p className="price">s/ {producto.precio}</p>
            <p className="description">{producto.descripcion}</p>
            <button className="add-to-cart"
            onClick={handleAgregarAlCarrito}
            >Añadir al carrito</button>
            <p className="note">
            Tecnología seleccionada para ofrecerte calidad, rendimiento y una experiencia superior en cada producto.
          </p>
          </div>
          </>
        ) : (
          <p>Cargando producto...</p>  
          
            )
      }
    </div>
  )
}
export default DetailsProduct