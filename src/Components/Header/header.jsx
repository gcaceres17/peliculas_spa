import React, {useContext} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './header.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { FavoritoContext } from '../Context/favoritoContext';
import { CarritoContext } from '../Context/carritoContext';

const Header = () => {
  const {cantiFav} = useContext(FavoritoContext);
  const {cantidad} = useContext(CarritoContext);
  return (
    <header>
        <div>
            <h1>API Peliculas</h1>
        </div>
        <Link to="/carrito">
          <Badge badgeContent={cantidad} color="primary" sx={{ fontSize: '0.75rem' }}>
            <ShoppingCartIcon color="action" fontSize='large' />
          </Badge>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/favoritos">               
          <Badge badgeContent={cantiFav} color="secondary" >
            <FavoriteIcon color="action" fontSize='large' />
          </Badge>
        </Link>
          
        </header>
  )
}

export default Header