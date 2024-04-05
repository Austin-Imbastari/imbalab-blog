import Hero from '../components/Hero';
import InfiniteSlider from '../components/InfiniteSlider';
import NewProjects from '../components/NewProjects';
import AboutSection from '../components/AboutSection';
import Testimony from '../components/Testimony';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [mobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: 500px)`);
    setIsMobile(mediaQuery.matches);
    const handleMediaQuery = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQuery);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQuery);
    };
  }, []);

  return (
    <>
      <Hero mobile={mobile} />
      <InfiniteSlider baseVelocity={-5} />
      <InfiniteSlider baseVelocity={5} />
      <NewProjects />
      <AboutSection mobile={mobile} />
      <Testimony mobile={mobile} />
      <Contact mobile={mobile} />
      <Footer />
    </>
  );
};

export default HomePage;
