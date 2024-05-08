import React, {useState, useEffect} from 'react'
import { obtenerDestacadas } from '../Services/peliculasServices'
import Pelicula from "./pelicula";
import Grid from '@mui/material/Grid';


const Destacadas = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    cargarPeliculas();
  }, []);

  const cargarPeliculas = async () => {
    const {data: destacadas} = await obtenerDestacadas(5);
    setPeliculas(destacadas);
  }

  return (
    <>
      <h2>Peliculas Destacadas</h2>
      <Grid container spacing={2}>
        {peliculas.map((pelicula) => (
          <Pelicula key={pelicula.id} datos={pelicula} />
        ))}
      </Grid>
    </>
  )
}

export default Destacadas