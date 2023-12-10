import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router';

const Footer = () => {

  const navigate = useNavigate();

  const contactusbtn = () => {
    navigate('/contactus')
  }

  const aboutusbtn = () => {
    navigate('/aboutus')
  }

  const ratingbtn = () => {
    navigate('/rating')
  }

  return (
    <AppBar position='static' sx={{ mt: 2 }} >
      <Toolbar>
        <Typography variant='h4' flexGrow={1}>
          Blissfull Bytes
        </Typography>
        <Button variant='text' color="inherit" startIcon={<ContactPageIcon />} onClick={contactusbtn}>Contact US -</Button>
        <Button variant='text' color="inherit" startIcon={<StarRateIcon />} onClick={ratingbtn}>Rate  -</Button>
        <Button variant='text' color="inherit" startIcon={<InfoIcon />} onClick={aboutusbtn}>About US -</Button>

      </Toolbar>

    </AppBar>
  )
}

export default Footer