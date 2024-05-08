import React, { createContext, useState } from "react";
import { comprar } from "../Services/carritoService";

export const CarritoContext = createContext();

export const CarritoProvider = (props) => {
  const [cantidad, setCantidad] = useState(0);
  const [items, setItems] = useState([]);

  const handleAgregarCarrito = async (pelicula) => {
    setCantidad(cantidad + 1);
    setItems([...items, pelicula]);
  };

  const handleEliminarCarrito = async (pelicula) => {
    const newItems = items.filter(
      (item) => item.idPelicula !== pelicula.idPelicula
    );

    setItems(newItems);
    setCantidad(cantidad - 1);
  };

  const handleEliminarCarritoTodos = async () => {
    setItems([]);
    setCantidad(0);
  };

  const handleComprar = async (peliculas) => {
    // Validar que las películas no estén vacías
    if (!Array.isArray(peliculas) || peliculas.length === 0) {
        console.error("No hay películas para procesar");
        return;
    }

    // Crear el carrito de compras mapeando cada película a un objeto de carrito
    const carrito = peliculas.map(pelicula => ({
        IdUsuario: localStorage.getItem("idUsuario"),  
        IdPelicula: pelicula.id,
    }));

    console.log(carrito);

    await comprar(carrito);
    handleEliminarCarritoTodos();

  };


  return (
    <CarritoContext.Provider
      value={{
        items,
        setItems,
        cantidad,
        setCantidad,
        handleAgregarCarrito,
        handleEliminarCarrito,
        handleComprar,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};
