import React, {useState} from 'react'
import Container from '@mui/material/Container';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import Button from '@mui/material/Button';
import {registrarUsuario} from '../Services/usuarioServices'
import { useHistory } from 'react-router-dom';

const Registro = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: ''
    })

    const history = useHistory();

    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        registrarUsuario(usuario)  
    }


  return (
    <Container>
        <form onSubmit={handleSubmit}>
            <h1>Venta de Peliculas</h1>
            <h2>Registrate ahora</h2>
            <TextField
                name='nombre'
                required
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese su nombre"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                ),
                }}
                variant="outlined"
                style={{width: 400}}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
                name='apellido'
                required
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese su apellido"
                InputProps={{
                }}
                variant="outlined"
                style={{width: 400}}
            />
            <br />
            <br />
            <TextField
                name='email'
                type='email'
                required
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese su email"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <EmailIcon />
                    </InputAdornment>
                ),
                }}
                variant="outlined"
              
                style={{width: 400}}
            />
            <br />
            <br />
            <TextField
                name='password'
                type='password'
                required
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese su contraseña"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <VpnKeyTwoToneIcon />
                    </InputAdornment>
                ),
                }}
                variant="outlined"
                style={{width: 400}}
            />
            <br />
            <br />
            <Button variant='contained'
                onClick={() => history.push({pathname: '/'})}
            >
                volver
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='secondary' type='submit'>
                Registrarse
            </Button>
           
        </form>
    </Container>
  );
}

export default Registro