import React, {useEffect, createContext, useState} from "react";
import { obtenerFavorito, agregarFavorito, eliminarFavorito } from "../Services/favoritoService";


export const FavoritoContext = createContext();
export const FavoritoProvider = (props) => {
    const [cantiFav, setCantFavoritos] = useState(0);
    const [itemsFav, setItemsFav] = useState([]);

    const handleObtenerFavorito = async () => {
        
        const {data: favoritos} = await obtenerFavorito(localStorage.getItem("idUsuario"));
        setCantFavoritos(favoritos.length);
        setItemsFav(favoritos);
    }

    const handleAgregarFavorito = async (pelicula) => {
        await agregarFavorito(
            {
                idUsuario: localStorage.getItem("idUsuario"),
                idPelicula: pelicula.id,
            }
        );
        setItemsFav([...itemsFav, pelicula]);
        setCantFavoritos(cantiFav + 1);
    }

    const handleEliminarFavorito = async (pelicula) => {
        console.log("localStorage",localStorage.getItem("idUsuario"));
        await eliminarFavorito(
            {
                idUsuario: localStorage.getItem("idUsuario"),
                idPelicula: pelicula.id,
            }
        );
        const newItems = itemsFav.filter((item) => item.id !== pelicula.id);
        setItemsFav(newItems);
        setCantFavoritos(cantiFav - 1);
    }

    useEffect(() => {
        handleObtenerFavorito();
    }, []);

    return (
        <FavoritoContext.Provider value={{cantiFav, itemsFav, setCantFavoritos, handleAgregarFavorito, handleEliminarFavorito}}>
            {props.children}
        </FavoritoContext.Provider>
    );  
};