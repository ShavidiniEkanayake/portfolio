import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import SplashScreen from "./Components/SplashScreen";
import { NavBar } from "./Components/NavBar";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { Experience } from "./Components/Experience";
import { Footer } from "./Components/Footer";
import { Certifications } from "./Components/Certifications";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Simulate a delay for the splash screen (e.g., 2 seconds)
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <NavBar />
          <Home />
          <Projects />
          {/* <Skills />
          <Experience />
          <Certifications />
          <Contact />
          <Footer /> */}
        </>
      )}
    </div>
  );
}

export default App;
