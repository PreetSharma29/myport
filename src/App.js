import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Introd from "./Components/Introd/Introd";
import Works from "./Components/Works/Works";
import Process from './Components/Process/Process';
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Introd />
      <Works />
      <Process />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
