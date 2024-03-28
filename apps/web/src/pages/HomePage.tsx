import Hero from '../components/Hero';
import InfiniteSlider from '../components/InfiniteSlider';
import NewProjects from '../components/NewProjects';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfiniteSlider baseVelocity={-5} />
      <InfiniteSlider baseVelocity={5} />
      <NewProjects />
    </>
  );
};

export default HomePage;
