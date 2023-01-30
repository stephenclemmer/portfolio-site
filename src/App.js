import './App.css';
import ButtonAppBar from './appbar';
import Welcome from './welcome';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';

// import { palette } from '@mui/system'

import { createTheme, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    text: {
      primary: '#c0ccd4',
      secondary: '484d5c'
    },
    background: {
      paper: '#484d5c',
      default: '#484d5c'
    },

    primary: 
    {
      main: '#86bbd8',
      contrast: '484d5c'
    },

    secondary:
    {
      main: '#ffce00'
    },
  },

  typography: {
    h6: {
     color: '#484d5c'
    }
  }
})

console.log(theme);
function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="content">
          <ButtonAppBar />
          <Welcome />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
