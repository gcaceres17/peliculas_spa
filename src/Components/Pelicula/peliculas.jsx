//Importamos React
import React, {useState, useEffect} from "react";
import Pelicula from "./pelicula";
import {obtenerPeliculas} from "../Services/peliculasServices";
import Grid from '@mui/material/Grid';


//Creamos un componente funcional llamado Peliculas
const Peliculas = () => {
    const [peliculas, setPeliculas] = useState([]);
    
    useEffect(() => {
        cargarPeliculas();
    }, []);

    const cargarPeliculas = async() => {
        const {data: peliculas} = await obtenerPeliculas(localStorage.getItem("idUsuario"));
        setPeliculas(peliculas);
    };

  return (
    <>  
        <div>
            <h2>Peliculas</h2>
        </div>
        <Grid container spacing={2}>
            {peliculas.map((pelicula) => (
                <Pelicula datos={pelicula}> </Pelicula> 
            ))}
        </Grid>
    </>
  );
};

//Exportamos el componente Peliculas
export default Peliculas;