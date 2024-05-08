import React, {useContext} from 'react'
import FavoritoItem from './favoritoItem'
import { FavoritoContext } from '../Context/favoritoContext'
import Grid from '@mui/material/Grid';


const Favoritos = () => {
  const {itemsFav} = useContext(FavoritoContext);
  return (
    <>
      <h2>
        Mis Favoritos{" "}
        {itemsFav.length === 0 && 
        "(No tienes favoritos en tu listado)"}
      
      </h2>
      <Grid container spacing={2}>
        {
          itemsFav.map((pelicula, index) => (
            <FavoritoItem key={index} pelicula={pelicula}/>
          ))
        }
      </Grid>
    </>
  )
}

export default Favoritos