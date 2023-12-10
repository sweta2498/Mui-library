import React from 'react'
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import {   Typography, Rating } from '@mui/material';


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};


function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const RatingPage = () => {

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <>
   <Box>
      <Typography variant="h4" mt={13} mb={2} justifyContent='center' alignItems= 'center'>Rate Us-</Typography>
     
   
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center'
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        size='large'
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2,fontWeight:'bold',color:'primary.main',fontSize:20 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>



       <br/><br/>
      </Box>

    </>

  )
}

export default RatingPage