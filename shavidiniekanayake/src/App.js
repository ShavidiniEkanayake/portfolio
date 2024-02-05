import logo from './logo.svg';
import './App.css';
import {NavBar} from './Components/NavBar';
import {Projects} from './Components/Projects'
import {Skills} from './Components/Skills'
import {Contact} from './Components/Contact'
import {Experience} from './Components/Experience'
import {Footer} from './Components/Footer'
import { Certifications } from './Components/Certifications';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Certifications/>
      <Footer/>
    </div>
  );
}

export default App;
