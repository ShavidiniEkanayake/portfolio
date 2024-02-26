import { useState, useEffect } from 'react'
import './App.css'
import { NavBar } from "./components/navbar";
import {Splash} from "./components/splash";
import {Home} from "./components/home";
import { AboutMe } from './components/aboutMe';
import  {Footer} from './components/footer';

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
  )
}

export default App
