import { useState, useEffect } from 'react'
import './style.css'
import { NavBar } from "./components/navbar";
import {Splash} from "./components/splash";
import {Home} from "./components/home";
import { AboutMe } from './components/about-me';
import  {Footer} from './components/footer';
import { Contact } from './components/contact';
import { Experience } from './components/experience';
import { Certifications } from './components/certifications';

function App() {
    const [showSplash, setShowSplash] = useState(true);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowSplash(false);
      }, 2000);
  
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
        <Contact />
        <Footer />
        <Experience />
        <Certifications />
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
  )
}

export default App
