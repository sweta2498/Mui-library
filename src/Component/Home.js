
import { Container } from '@mui/material';
import HeroSection from './HeroSection';
import CakeSection from './CakeSection';
import ContactIs from './ContactIs';




const Home = () => {
  return (
    <>
        <Container>
          <HeroSection />
          <CakeSection />
          <ContactIs />
        </Container>
    </>
  )
}

export default Home