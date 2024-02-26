import { useState, useEffect } from 'react'
import './App.css'
import { NavBar } from "./components/navbar";
import {Splash} from "./components/splash";
import {Home} from "./components/home";
import { AboutMe } from './components/aboutMe';
import  {Footer} from './components/footer';
import { Contact } from './components/contact';
import { Experience } from './components/experience';

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
