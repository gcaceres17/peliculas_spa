import axios from "./axiosServices"

export function obtenerFavorito(idUsuario) {
    return axios.get("Favorito/" + idUsuario);
}

export function agregarFavorito(favorito) {
    return axios.post("Favorito/Agregar", favorito);
}

export function eliminarFavorito(favorito) {
    return axios.delete("Favorito/Eliminar", {
        data: favorito,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}