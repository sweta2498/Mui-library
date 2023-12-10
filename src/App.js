
import './App.css';
import NavBar from './Component/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContactIs from './Component/ContactIs';
import SignIn from './Component/SignIn';
import Footer from './Component/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Component/AboutUs';
import Home from './Component/Home';
import SignUp from './Component/SignUp';
import RatingPage from './Component/RatingPage';





const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
  },
});

function App() {


   
// const snackbar = useSelector((state) => state.snackbar);
// const dispatch = useDispatch();
// const handleClose = () => {
//   dispatch(
//     setSnackbar({
//       open: false,
//       message: "",
//       type: snackbar.type,
//     })
//   );
// };
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter >
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/contactus" element={<ContactIs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/rating" element={<RatingPage />} />
            
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>


    </>
  );
}

export default App;
