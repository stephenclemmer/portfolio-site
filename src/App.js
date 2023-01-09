import './App.css';

import ButtonAppBar from './appbar';
import Welcome from './welcome';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';

function App() {

  return (
    <div className="App">
      <div className="content">
        <ButtonAppBar />
        <div>
          <Welcome />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
