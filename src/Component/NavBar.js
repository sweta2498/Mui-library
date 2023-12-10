import { Alert, AppBar, Button, Toolbar, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import {  Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSnackbar } from '../Redux/SnackAction';
import MuiAlert from '@mui/material/Alert';

const NavBar = () => {
  const navigate = useNavigate();

  // const Alert = React.forwardRef(function Alert(props, ref) {
  //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  // });


  const snackbar = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(
      setSnackbar({
        open: false,
        message: "",
        type: snackbar.type,
      })
    );
  };

//   useEffect(()=>{
//     dispatch(setSnackbar({
//       open: true,
//       message:"Not Secure ",
//       type: "warning"
//     }))
// },[]);


  const loginbtn = () => {
    navigate('/login')
  }
console.log(snackbar);
  const logoutbtn = () => {
    navigate('/')
  }
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6' flexGrow={1}>
          Blissfull Bytes
        </Typography>
        <Button variant='text' color="inherit" startIcon={<LoginIcon />} onClick={loginbtn}>Login</Button>
        <Button variant='text' color="inherit" endIcon={<LogoutIcon />} onClick={logoutbtn}>Loout</Button>


        <Snackbar
          open={snackbar.open}
          onClose={handleClose}
          autoHideDuration={120000}
          anchorOrigin={{ horizontal: "center", vertical: "bottom" }}>
          <Alert onClose={handleClose} severity={snackbar.type} variant="filled">
            {snackbar.message}
          </Alert>
 
        </Snackbar>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar