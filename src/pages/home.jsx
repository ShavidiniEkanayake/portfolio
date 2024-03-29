import { useEffect, useState } from 'react';

import {
  AboutMe,
  Certifications,
  Contact,
  Experience,
  Hero,
  Projects,
  Skills,
  Splash,
} from '@/components';
import { Footer } from '@/components/layout/footer';
import { NavBar } from '@/components/layout/navbar';
import { motion } from 'framer-motion';

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
          <NavBar />
          <Hero />
          <AboutMe />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
