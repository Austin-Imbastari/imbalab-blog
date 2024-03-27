import Hero from '../components/Hero';
import InfiniteSlider from '../components/InfiniteSlider';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfiniteSlider baseVelocity={-5} />
      <InfiniteSlider baseVelocity={5} />
    </>
  );
};

export default HomePage;
