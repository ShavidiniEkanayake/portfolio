import { useEffect, useState } from 'react';

import { Home, ProjectsList } from '@/pages';
import '@/styles/index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsList />} />
      </Routes>
    </Router>
  );
}

export default App;
