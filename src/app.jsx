import { useEffect, useState } from 'react';

import { Home, Projects } from '@/pages';
import '@/styles/index.css';
import {
  MemoryRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import { NavBar } from './components/layout/navbar';
import {Footer} from './components/layout/footer'; 

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <MemoryRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer />
    </MemoryRouter>
  );
}

export default App;
