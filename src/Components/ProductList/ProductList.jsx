import { useState, useEffect } from "react"
import "./ProductList.css"
import { useNavigate } from "react-router-dom"

const ProductList = ({buscarTermino}) => {
    const [productos, setProductos] = useState([])  //hook para almacenar
    const [error, setError] = useState(null)
    const [orden, setOrden] = useState("") //igual q option
    const [filtros, setFiltros] = useState({categorias: [], marcas: []})
    const navigate = useNavigate() //rediriger
    const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
});

const [mostrarTooltip, setMostrarTooltip] = useState(false);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch("http://localhost:3001/productos");
                if(!response.ok){
                    throw new Error("Error al cargar los productos");
                }
                const data = await response.json();
                setProductos(data)
                
            }catch(err) {
                setError(err.message)
            }
        }
        fetchProductos();
    }, []);

const toggleFiltros = (tipoFiltro, valor) => {
    setFiltros((prev) => ({
        ...prev,
        [tipoFiltro]: prev[tipoFiltro].includes(valor)
        ? prev[tipoFiltro].filter((item) => item !== valor)
        : [...prev[tipoFiltro], valor],
    }))
}

const normalizarTexto = (texto) => {
    return texto
    .toLowerCase()
    .normalize("NFD")
.replace(/[u0300\u036f]/g, "");
}

const productosFiltrados = productos.filter((producto) =>{
    const matchCategoria =
    filtros.categorias.length === 0 || filtros.categorias.includes(producto.categoria);
    const matchMarca =
    filtros.marcas.length === 0 || filtros.marcas.includes(producto.marca);
    
    const matchBuscar = !buscarTermino || normalizarTexto(producto.nombre).includes(normalizarTexto(buscarTermino)) ||
    normalizarTexto(producto.descripcion).includes(normalizarTexto(buscarTermino));

    return matchCategoria && matchMarca && matchBuscar;
})



  const handleOrdenChange = (e) => {
    setOrden(e.target.value) 
  }
  const productosOrdenados = [...productosFiltrados].sort((a,b) =>{
    if(orden === "Precio: Menor a Mayor"){
        return a.precio - b.precio
    } if(orden === "Precio: Mayor a Menor") {
        return b.precio - a.precio
    }
    return 0;
  })

  const handleImageClick = (id) => {
    navigate(`/producto/${id}`);
  }
 
  return (
    <section className="main-content">
        <aside className="filters">
            <h2>FILTROS</h2>
            <div className="filters-category">
                <div className="filter-category">
                    <h3>Categorias</h3>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("categorias", "teclados")}
                        />
                        <span>Teclados</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("categorias", "mouses")}
                        />
                        <span>Mouses</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("categorias", "monitores")}
                        />
                        <span>Monitores</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("categorias", "audifonos")}
                        />
                        <span>Audifonos</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("categorias", "sillas gamer")}
                        />
                        <span>Sillas Gamer</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("categorias", "microfonos")}
                        />
                        <span>Microfonos</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("categorias", "mousepads")}
                        />
                        <span>Mousepads</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("categorias", "webcams")}
                        />
                        <span>Webcams</span>
                    </label>
                   
                </div>

                <div className="filter-category">
                    <h3>Marcas</h3>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "Redragon")}
                        />
                        <span>Redragon</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "Logitech")}
                        />
                        <span>Logitech</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "HyperX")}
                        />
                        <span>HyperX</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "Razer")}
                        />
                        <span>Razer</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "LG")}
                        />
                        <span>LG</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "Samsung")}
                        />
                        <span>Samsung</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "ASUS")}
                        />
                        <span>ASUS</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "JBL")}
                        />
                        <span>JBL</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "Cougar")}
                        />
                        <span>Cougar</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "Fifine")}
                        />
                        <span>Fifine</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "Corsair")}
                        />
                        <span>Corsair</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "SteelSeries")}
                        />
                        <span>SteelSeries</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "AOC")}
                        />
                        <span>AOC</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "MSI")}
                        />
                        <span>MSI</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "Sony")}
                        />
                        <span>Sony</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "T-Dagger")}
                        />
                        <span>T-Dagger</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "Blue")}
                        />
                        <span>Blue</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "Microsoft")}
                        />
                        <span>Microsoft</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "ViewSonic")}
                        />
                        <span>ViewSonic</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "XZEAL")}
                        />
                        <span>XZEAL</span>
                    </label>
                    <label>
                        <input type="checkbox"
                        onChange = {() => toggleFiltros("marcas", "AVerMedia")}
                        />
                        <span>AVerMedia</span>
                    </label>
                </div>
            </div>
        </aside>

        <main className="collection">
            <div className="options">
            <h2>TODOS LOS PRODUCTOS</h2>

            <div className="sort-options">
                <select onChange={handleOrdenChange} value={orden}>
                    <option value="" disabled hidden>
                        Ordenar por...
                    </option>

                    <option value="Relevante">
                        Relevante
                    </option>

                    <option value="Precio: Menor a Mayor">
                        Precio: Menor a Mayor
                    </option>

                    <option value="Precio: Mayor a Menor">
                        Precio: Mayor a Menor
                    </option>
                </select>
            </div>
        </div>
            {/* ggggg */}
            <div className="products">
                {error ? (
                    <p className="error-message">{error}</p>
                ): productosFiltrados.length > 0 ? (
                    productosOrdenados.map((producto) => (
                        <div className="product-card" key={producto.id}>
                           <div 
                                className="image-hover"

                                onMouseMove={(e)=>{
                                    setMousePosition({
                                        x:e.nativeEvent.offsetX,
                                        y:e.nativeEvent.offsetY
                                    });
                                }}

                                onMouseEnter={()=>setMostrarTooltip(true)}

                                onMouseLeave={()=>setMostrarTooltip(false)}

                                onClick={() => handleImageClick(producto.id)}
                            >
                            <img 
                                src={producto.imagen}
                                alt={producto.nombre}
                                className="product-image"
                            />


                            {mostrarTooltip && (
                                <span
                                    className="cursor-tooltip"
                                    style={{
                                        left:mousePosition.x,
                                        top:mousePosition.y
                                    }}
                                >
                                    <i className="bi bi-eye-fill"> </i>
                                    Ver detalles
                                </span>
                            )}

                        </div>

                            <h3>{producto.nombre}</h3>
                            <p>{"S/." + producto.precio.toFixed(2)}</p>
                        </div>
                    ))
                ) :(
                    <p className="no-results">
                        No hay productos que coincidan con los filtros selccionados
                    </p>
                )}
            </div>
        </main>
    </section>

  )
}

export default ProductList