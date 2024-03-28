import './App.css';
//react router dom
import { Route, Routes } from 'react-router';

//components
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllProjects from './pages/AllProjects';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allprojects" element={<AllProjects />} />
      </Routes>
    </>
  );
}

export default App;
