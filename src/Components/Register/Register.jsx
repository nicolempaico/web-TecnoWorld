import { useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Register.css";


const Register = () => {


    const { register } = useAuth();

    const navigate = useNavigate();


    const [form, setForm] = useState({

        nombre:"",
        email:"",
        password:"",
        confirmarPassword:""

    });



    const [error, setError] = useState("");

    const [mensaje, setMensaje] = useState("");




    const handleChange = (e)=>{

        setForm({

            ...form,
            [e.target.name]: e.target.value

        });

    }





    const handleSubmit = async(e)=>{

        e.preventDefault();


        setError("");
        setMensaje("");



        if(
            !form.nombre ||
            !form.email ||
            !form.password ||
            !form.confirmarPassword
        ){

            setError("Todos los campos son obligatorios");
            return;

        }




        if(!form.email.includes("@")){

            setError("Ingrese un correo válido");
            return;

        }




        if(form.password.length < 6){

            setError(
                "La contraseña debe tener mínimo 6 caracteres"
            );

            return;

        }




        if(form.password !== form.confirmarPassword){

            setError(
                "Las contraseñas no coinciden"
            );

            return;

        }




        // verificar correo existente

        const response = await fetch(
            `http://localhost:3001/users?email=${encodeURIComponent(form.email)}`
        );


        const usuarios = await response.json();



        if(usuarios.length > 0){

            setError(
                "El correo ya está registrado"
            );

            return;

        }





        await register({

            nombre:form.nombre,

            email:form.email,

            password:form.password

        });



        setMensaje(
            "Registro exitoso, ahora inicia sesión"
        );



        setTimeout(()=>{

            navigate("/login");

        },1500);



    }





    return (

        <section className="register-container">


            <form 
            className="register-form"
            onSubmit={handleSubmit}>


                <h2>
                    CREAR <span>CUENTA</span>
                </h2>




                {
                    error &&
                    <p className="register-error">
                        {error}
                    </p>
                }



                {
                    mensaje &&
                    <p className="register-success">
                        {mensaje}
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

                placeholder="Nombre"

                />





                <label>
                    Correo
                </label>


                <input

                type="email"

                name="email"

                value={form.email}

                onChange={handleChange}

                placeholder="correo@gmail.com"

                />






                <label>
                    Contraseña
                </label>


                <input

                type="password"

                name="password"

                value={form.password}

                onChange={handleChange}

                placeholder="********"

                />






                <label>
                    Confirmar contraseña
                </label>


                <input

                type="password"

                name="confirmarPassword"

                value={form.confirmarPassword}

                onChange={handleChange}

                placeholder="********"

                />





                <button>
                    Registrarse
                </button>



                <p className="login-link">

                    ¿Ya tienes cuenta?

                    <span
                    onClick={()=>navigate("/login")}
                    >
                        Iniciar sesión
                    </span>

                </p>



            </form>


        </section>

    )

}


export default Register;