import './App.css';
import Grid from '@mui/material/Grid'
import ControlPanel from './components/ControlPanel';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import HeadingBar from './components/AppBar/HeadingBar';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#a69279',
    },
    secondary: {
      main: '#c3b091',
    },
    background: {
      default: '#faf8f6',
      paper: '#ffffff',
    },
    warning: {
      main: '#f9d091',
    },
    error: {
      main: '#fa8804',
    },
    info: {
      main: '#d9b99b',
    },
    success: {
      main: '#faf104',
    },
  },
  typography: {
    subtitle1: {
      fontSize: 9,
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>   
        <Grid container>
          <Grid item xs={12}>
            <HeadingBar/>
          </Grid>
          <Grid item xs={4}>
            <ControlPanel/>
          </Grid>
          <Grid item xs={8}>

          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
