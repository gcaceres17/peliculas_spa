import React, { useState, useRef, useContext, useEffect } from "react";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite'
import { FavoritoContext } from '../Context/favoritoContext';
import { CarritoContext } from "../Context/carritoContext";

const Peliculas = ({ datos }) => {
    const { handleAgregarCarrito, handleComprar } = useContext(CarritoContext);
    const { handleAgregarFavorito, handleEliminarFavorito } =
        useContext(FavoritoContext);

    const [esFavorita, setEsFavorita] = useState(
        datos.favorito.length ? true : false
    );
    const [botones, setBotones] = useState("");
    const favorito = useRef();

    useEffect(() => {
        setBotones(datos.carrito.length > 0 ? true : false);
    }, []);


    const setFavorito = (pelicula) => {
        if (!esFavorita) {
            handleAgregarFavorito(pelicula);
        } else {
            handleEliminarFavorito(pelicula);
        }
        setEsFavorita(!esFavorita);
    };

    return (
        <>
            <Grid container item xs={12} sm={4} lg={3}>
                <Paper style={{ padding: 7, textAlign: "center" }} elevation={3}>
                    <h2>{datos.titulo}</h2>
                    <FavoriteIcon
                        ref={favorito}
                        color={esFavorita ? "secondary" : "disabled"}
                        style={{ cursor: "pointer" }}
                        onClick={() => setFavorito(datos)}
                    />
                    <br />
                    <div>
                        <img
                            src={datos.portada}
                            style={{
                                width: "100px%",
                                height: "300px%",
                                objectFit: "cover"
                            }}
                        />
                    </div>
                    <div>
                        <Rating name="read-only" value={datos.estrellas} readOnly />
                    </div>
                    <div>{datos.sinopsis}</div>
                    <br />
                    <div>{`Genero: ${datos.genero}`}</div>
                    <br />
                    <div>{`Director: ${datos.director}`}</div>
                    <br />
                    <div>{`Año: ${datos.anio}`}</div>
                    <br />
                    <div><b>{`Precio: $ ${datos.precio}`}</b></div>
                    <br />
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={botones}
                            onClick={() => {
                                handleComprar([datos]);
                                setBotones(true);
                                alert("Compraste la pelicula");
                            }}>
                            Comprar
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            variant="outlined"
                            color="secondary"
                            disabled={botones}
                            onClick={() => {
                                handleAgregarCarrito(datos);
                                setBotones(true);
                            }}>
                            Agregar al carrito
                        </Button>
                    </div>
                </Paper>
            </Grid>
        </>
    );
}

export default Peliculas;