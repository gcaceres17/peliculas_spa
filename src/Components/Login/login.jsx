import React, {useState, useContext} from 'react'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { loginUsuario } from '../Services/usuarioServices';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import { useHistory} from 'react-router-dom';
import { LoginContext } from '../Context/loginContext';
import { FavoritoContext } from '../Context/favoritoContext';

const Login = () => {
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    })

    const {handleLogin} = useContext(LoginContext);
    const {handleObtenerFavorito} = useContext(FavoritoContext);

    const [msg, setMsg] = useState("");

    const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault()
        const {data: usuarioValido} = await loginUsuario(usuario)
        if(usuarioValido.token){
            handleLogin(usuarioValido)
            
            history.push({pathname: "/peliculas"})
        }else{
            setMsg("Usuario o contraseña incorrectos")
        }
    }

    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
            
        })
    }



  return (
    <>
    <Container>
        <form onSubmit={handleSubmit}>
            <h1>Venta de Peliculas</h1>
            <h2>Inicia Sesion</h2>
            <TextField
                type="email"
                name='email'
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
            <br/>
            <br/>
            <TextField
                name='password'
                type="password"
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
            <br/>
            <br/>
            <h4 style={{color: "red"}}>{msg}</h4>
            <hr />
            <Button type="submit" variant="contained" color="primary">Iniciar Sesion</Button>
            &nbsp;&nbsp;&nbsp;
            <Button onClick={() => history.push({ pathname: "/registro" })}
             color="secondary" variant="contained" >Registrate</Button>
        </form>
    </Container>
    </>
  )
}

export default Login