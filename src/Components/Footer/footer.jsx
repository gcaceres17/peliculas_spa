import React from 'react'
import './footer.css'
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <footer>
      <p>Venta de Peliculas - Copyrigth</p>
      <EmailIcon color="primary" fontSize='large' />
      &nbsp;&nbsp;
      <FacebookIcon color="primary" fontSize='large' />
      &nbsp;&nbsp;
      <InstagramIcon color="primary" fontSize='large' />

    </footer>
  )
}

export default Footer