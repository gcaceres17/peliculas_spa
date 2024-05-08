//Importamos React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Importamos Comoponentes
import Header from './Components/Header/header';
import Body from './Components/Body/body';
import Menu from './Components/Menu/menu';
import Footer from './Components/Footer/footer';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import "./index.css";
import { FavoritoProvider } from './Components/Context/favoritoContext';
import { CarritoProvider } from './Components/Context/carritoContext';
import { LoginProvider } from './Components/Context/loginContext';

//Renderizamos el componente Peliculas en el elemento con id root
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <CarritoProvider>
                <FavoritoProvider>
                    <LoginProvider>
                        <Header></Header>
                        <Menu></Menu>
                        <Body></Body>
                        <Footer></Footer>
                    </LoginProvider>
                </FavoritoProvider>
            </CarritoProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
