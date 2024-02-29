import { useEffect, useState } from 'react';

import { AboutMe } from './components/about-me';
import { Certifications } from './components/certifications';
import { Contact } from './components/contact';
import { Experience } from './components/experience';
import { Footer } from './components/layout/footer';
import { Home } from './components/home';
import { NavBar } from './components/layout/navbar';
import { Projects } from './components/projects';
import { Skill } from './components/skills-list';
import { Splash } from './components/splash';
import './styles/index.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {showSplash ? (
        <Splash />
      ) : (
        <>
          <NavBar />
          <Home />
          <AboutMe />
          <Experience />
          <Projects />
          <Certifications />
          <Skill />
          <Contact />
          <Footer />
          {/* 
        <Skills />
        <Certifications />
        <Contact />
        */}
          {/* <Projects />
           */}
        </>
      )}
    </div>
  );
}

export default App;
