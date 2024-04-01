import './App.css';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

//react router dom
import { Route, Routes } from 'react-router';

//components
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllProjects from './pages/AllProjects';
import BlogPost from './pages/BlogPost';

function App() {
  const options = {
    lerp: 0.05,
    duration: 1.5,
    smoothWheel: true,
  };

  return (
    <>
      <ReactLenis root options={options}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </ReactLenis>
    </>
  );
}

export default App;
