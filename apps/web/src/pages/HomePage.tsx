import Hero from '../components/Hero';
import InfiniteSlider from '../components/InfiniteSlider';
import NewProjects from '../components/NewProjects';
import AboutSection from '../components/AboutSection';
import Testimony from '../components/Testimony';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfiniteSlider baseVelocity={-5} />
      <InfiniteSlider baseVelocity={5} />
      <NewProjects />
      <AboutSection />
      <Testimony />
      <Footer />
    </>
  );
};

export default HomePage;
