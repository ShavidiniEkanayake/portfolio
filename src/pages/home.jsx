import { useEffect, useState } from 'react';

import {
  AboutMe,
  Certifications,
  Contact,
  Experience,
  Hero,
  Projects,
  Skills,
  Splash
} from '@/components';

function Home() {
    const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
    {showSplash ? (
      <Splash />
    ) : (
      <>
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </>
    )}
  </div>
  );
}

export default Home;
