import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import AppsIcon from '@mui/icons-material/Apps';
import { useHistory } from 'react-router-dom';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';


const Menu = () => {
  const history = useHistory();
  const [buscar, setBuscar] = useState("");

  const handleBuscar = (e) => {
    setBuscar(e.target.value);
  }

  return (
    <nav>
      <TextField name="Buscar" 
        value={buscar}
        onChange={(e) => handleBuscar(e)}
        variant="outlined"
        placeholder='Buscar por genero, titulo, etc.'
        style={{ width: 300 }} />
      <CloseIcon color='action'
      onClick={() => setBuscar("")}
      style={{ cursor: "pointer" }} />
      &nbsp;&nbsp;
      <Button
        startIcon={<SearchIcon />}
        variant="contained"
        onClick={() => history.push({ pathname: "/buscar/" + buscar })}
      >
        Buscar
      </Button>
      &nbsp;&nbsp;
      <Button variant="contained" 
      onClick={() => history.push({ pathname: "/destacadas" })}
      startIcon={<StarIcon color='action' />}>
         Destacadas
      </Button>
      &nbsp;&nbsp;
      <Button variant="contained" 
      onClick={() => history.push({ pathname: "/peliculas" })}
      startIcon={<AppsIcon color='action' />}>
        Todas
      </Button>
      &nbsp;&nbsp;
      <Button variant="contained"
      onClick={() => {
        localStorage.clear()
        history.push({ pathname: "/" })
      }}
      startIcon={<LogoutTwoToneIcon color='action' />}
      >
        logout
      </Button>
    </nav>
  )
}

export default Menu