import React, {createContext, useState} from "react";

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);
    const [login, setLogin] = useState(false);

    const handleLogin = (usuario) => {
        localStorage.setItem("idUsuario", usuario.idUsuario);
        localStorage.setItem("token", usuario.token);
    };

    const handleLogout = () => {
        setUsuario(null);
        setLogin(false);
    }

    return (
        <LoginContext.Provider value={{usuario, login, handleLogin, handleLogout}}>
            {children}
        </LoginContext.Provider>
    )
}