import logo from './logo.svg';
import './App.css';
import {NavBar} from './Components/NavBar';
import {Projects} from './Components/Projects'
import {Skills} from './Components/Skills'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
