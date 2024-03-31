import './App.css';
//react router dom
import { Route, Routes } from 'react-router';

//components
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllProjects from './pages/AllProjects';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allprojects" element={<AllProjects />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </>
  );
}

export default App;
