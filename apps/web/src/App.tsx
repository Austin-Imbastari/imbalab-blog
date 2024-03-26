import './App.css';
//react router dom
import { Route, Routes } from 'react-router';

//components
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
