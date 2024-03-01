import { useEffect, useState } from 'react';

import { Home, Projects } from '@/pages';
import '@/styles/index.css';
import {
  MemoryRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
