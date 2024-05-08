import axios from "axios";


export function registrarUsuario(usuario) {
    return axios.post("Usuario/", usuario);
}

export function loginUsuario(usuario) {
    return axios.post("Login/", usuario);
}