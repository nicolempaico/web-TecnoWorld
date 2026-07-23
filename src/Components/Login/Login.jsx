import { useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {

    const { login } = useAuth();

    const navigate = useNavigate();


    const [form, setForm] = useState({
        email:"",
        password:""
    });


    const [error, setError] = useState("");



    const handleChange = (e)=>{

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }



    const handleSubmit = async(e)=>{

        e.preventDefault();


        setError("");

        if(!form.email || !form.password){

            setError("Todos los campos son obligatorios");
            return;

        }


        if(!form.email.includes("@")){

            setError("Ingrese un correo válido");
            return;

        }


        if(form.password.length < 6){

            setError("La contraseña debe tener mínimo 6 caracteres");
            return;

        }



        const resultado = await login(
            form.email,
            form.password
        );


        if(resultado){

            navigate("/carrito");

        }else{

            setError("Correo o contraseña incorrectos");

        }

    }



    return (

        <section className="login-container">


            <form 
            className="login-form"
            onSubmit={handleSubmit}>


                <h2>
                    INICIAR <span>SESIÓN</span>
                </h2>


                {
                    error &&
                    <p className="login-error">
                        {error}
                    </p>
                }



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


                <button>
                    Ingresar
                </button>


                <p className="register-link">
                    ¿No tienes cuenta?
                    <span onClick={()=>navigate("/registro")}>
                        Registrarse
                    </span>
                </p>


            </form>


        </section>

    )

}


export default Login;