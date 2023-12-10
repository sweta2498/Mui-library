import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import  Cake from '../images/cake.png';

const HeroSection = () => {
  return (
    <Grid container direction="row" alignItems="center" order={{xs:2,sm:1}} sx={{mb:-15}}>
        <Grid item xs={12} sm={6} sx={{justifyContent:'center'}}>
            <Typography variant='h3' color="inherit" m={3}>A bliss in Every byte</Typography>
            <Typography variant='h5' color="inherit" m={2}>We offer tasty cakes and sweets for you..</Typography>
            <Button size='large' variant='contained' sx={{borderRadius:5}}>Call us</Button>
        </Grid >
        <Grid container item xs={12} sm={6} justifyContent="center" order={{xs:1,sm:2}} sx={{mt:5}}>
            <Box component="img" src={Cake}/>
        </Grid>
    </Grid>
  )
}

export default HeroSection