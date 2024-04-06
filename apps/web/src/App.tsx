import './App.css';
import { useEffect, useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

//react router dom
import { Route, Routes } from 'react-router';

//components
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllProjects from './pages/AllProjects';
import BlogPost from './pages/BlogPost';

function App() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || 'light',
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('darkMode');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('darkMode');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const options = {
    lerp: 0.05,
    duration: 1.5,
    smoothWheel: true,
  };

  return (
    <>
      <ReactLenis root options={options}>
        <Navbar handleThemeSwitch={handleThemeSwitch} />
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
