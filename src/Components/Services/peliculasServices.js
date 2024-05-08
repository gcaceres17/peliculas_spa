import servicio from "./axiosServices"

export function obtenerPeliculas(idUsuario) {
    return servicio.get("pelicula/" + idUsuario);
    
}

export function buscarPor(buscar, idUsuario) {
    return servicio.get("Pelicula/BuscarPor/"+ idUsuario + "/" + buscar);
}

export function obtenerDestacadas(estrellas, idUsuario) {
    return servicio.get("Pelicula/GetDestacadas/" + idUsuario + "/" + estrellas);
}
  