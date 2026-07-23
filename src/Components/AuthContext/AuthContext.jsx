// // hgubAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const [usuario, setUsuario] = useState(
        JSON.parse(localStorage.getItem("usuario")) || null
    );


    // LOGIN
    const login = async(email, password) => {

        try {

            const response = await fetch(
                `http://localhost:3001/users?email=${encodeURIComponent(email)}`
            );

            const data = await response.json();


            if(data.length > 0){

            const usuarioEncontrado = data[0];


            if(usuarioEncontrado.password === password){

                setUsuario(usuarioEncontrado);


                localStorage.setItem(
                    "usuario",
                    JSON.stringify(usuarioEncontrado)
                );


                return true;

            }

            }


            return false;


        } catch(error){

            console.log(error);
            return false;

        }

    }



    // REGISTRO
    const register = async(usuarioNuevo)=>{


        const response = await fetch(
            "http://localhost:3001/users",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(usuarioNuevo)
            }
        );


        const data = await response.json();

        return data;

    }



    // CERRAR SESIÓN
    const logout = ()=>{

        setUsuario(null);

        localStorage.removeItem("usuario");

    }



    return (

        <AuthContext.Provider
        value={{
            usuario,
            login,
            register,
            logout
        }}>

            {children}

        </AuthContext.Provider>

    )

}


export const useAuth = ()=> useContext(AuthContext); 
// ddnnnnnnnnnnnnnnnnnnnnnnnllllllllllllllllllllllllllllllllllllllllllllllll