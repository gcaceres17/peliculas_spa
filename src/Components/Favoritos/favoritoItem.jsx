import React, {useContext} from 'react'
import { FavoritoContext } from '../Context/favoritoContext'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

const FavoritoItem = ({pelicula}) => {
  const {handleEliminarFavorito} = useContext(FavoritoContext);

  return (
    <>
        <Grid container item xs={12} sm={12} lg={12}>
            <Paper style={{padding: 5, textAlign:"center", width:"100%"}}>
                <table style={{width:"100%"}}>
                    <tr>
                        <td>
                            <img src={pelicula.portada} width={60} />
                        </td>
                        <td>
                            <h2>{pelicula.titulo}</h2>
                            <Rating name="read-only" value={pelicula.estrellas} readOnly />
                        </td>
                        <td>{`Año: ${pelicula.anio}`}</td>
                        <td>{`Precio: $ ${pelicula.precio}`}</td>
                        <td>
                            <Button 
                                variant="contained" 
                                color="secondary"
                                onClick={()=> handleEliminarFavorito(pelicula)}
                            >
                                Eliminar
                            </Button>
                        </td>
                    </tr>
                </table>
            </Paper>
        </Grid>
    </>
  )
}

export default FavoritoItem