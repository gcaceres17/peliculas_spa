import React from 'react'
import { Route } from 'react-router-dom'
import Peliculas from '../Pelicula/peliculas'
import Favoritos from '../Favoritos/favoritos'
import Carrito from '../Carrito/carrito'
import Buscar from '../Pelicula/buscar'
import Destacadas from '../Pelicula/destacadas'
import Registro from '../Registro/registro'
import Login from '../Login/login'

const Body = () => {
  return (
    <section>
      <Route path="/" exact component={Login}/>
      <Route path="/peliculas" exact component={Peliculas}/>
      <Route path="/favoritos" exact component={Favoritos}/>
      <Route path="/carrito" exact component={Carrito}/>
      <Route path="/destacadas" exact component={Destacadas}/>
      <Route path="/buscar/:valor" exact component={Buscar}/>
      <Route path="/buscar/" exact component={Peliculas}/>
      <Route path="/registro" exact component={Registro}/>

    </section>
  )
}

export default Body