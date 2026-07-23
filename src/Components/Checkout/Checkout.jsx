import { useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { useCart } from "../CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";


const Checkout = () => {


    const {usuario} = useAuth();

    const {carrito, vaciarCarrito} = useCart();

    const navigate = useNavigate();



    const [form, setForm] = useState({

        nombre:"",
        direccion:"",
        telefono:"",
        correo:""

    });



    const [error,setError] = useState("");

    const [compraFinalizada,setCompraFinalizada] = useState(false);





    const handleChange = (e)=>{

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    }





    const handleSubmit = (e)=>{

        e.preventDefault();


        setError("");



        if(
            !form.nombre ||
            !form.direccion ||
            !form.telefono ||
            !form.correo
        ){

            setError(
                "Todos los campos son obligatorios"
            );

            return;

        }



        if(!form.correo.includes("@")){

            setError(
                "Ingrese un correo válido"
            );

            return;

        }




        if(!/^[0-9]+$/.test(form.telefono)){

            setError(
                "El teléfono solo debe contener números"
            );

            return;

        }



        if(form.telefono.length !== 9){

            setError(
                "El teléfono debe tener 9 dígitos"
            );

            return;

        }





        setCompraFinalizada(true);


        vaciarCarrito();


    }




    if(compraFinalizada){

        return (

            <section className="success-container">

                <h1>
                    Compra realizada exitosamente
                </h1>


                <p>
                    Gracias por tu compra, {usuario.nombre}
                </p>


                <button
                onClick={()=>navigate("/")}
                >
                    Volver al inicio
                </button>


            </section>

        )

    }





    return (

        <section className="checkout-container">


            <form 
            className="checkout-form"
            onSubmit={handleSubmit}>


                <h2>
                    DATOS DE <span>ENVÍO</span>
                </h2>



                {
                    error &&
                    <p className="checkout-error">
                        {error}
                    </p>
                }




                <label>
                    Nombre completo
                </label>

                <input

                type="text"

                name="nombre"

                value={form.nombre}

                onChange={handleChange}

                placeholder={usuario?.nombre}

                />





                <label>
                    Dirección
                </label>

                <input

                type="text"

                name="direccion"

                value={form.direccion}

                onChange={handleChange}

                placeholder="Av. Principal 123"

                />






                <label>
                    Teléfono
                </label>


                <input

                type="text"

                name="telefono"

                value={form.telefono}

                onChange={handleChange}

                placeholder="999999999"

                />






                <label>
                    Correo
                </label>


                <input

                type="email"

                name="correo"

                value={form.correo}

                onChange={handleChange}

                placeholder={usuario?.email}

                />






                <button>
                    PAGAR
                </button>



            </form>


        </section>

    )

}


export default Checkout;