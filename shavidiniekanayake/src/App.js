import logo from './logo.svg';
import './App.css';
import {NavBar} from './Components/NavBar';
import {Projects} from './Components/Projects'
import {Skills} from './Components/Skills'
import {Contact} from './Components/Contact'
import {Experience} from './Components/Experience'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
