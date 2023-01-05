import './App.css';
import Button from '@mui/material/Button';
import ButtonAppBar from './navbar';
import Welcome from './welcome';
import About from './about';
import Projects from './projects';
import Contact from './contact';

function App() {
  const title = "Welcome to Stephen's Portfolio Site";

  return (
    <div className="App">
      <div className="content">
        <ButtonAppBar />
        <Welcome />
        <About />
        <Projects />
        <Contact />
        {/* <h1>{title}</h1>
        <Button variant="contained">This is a button</Button> */}
      </div>
    </div>
  );
}

export default App;
