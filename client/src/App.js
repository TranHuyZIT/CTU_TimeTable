import './App.css';
import Grid from '@mui/material/Grid'
import ControlPanel from './components/ControlPanel';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

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
          <Grid item xs={3}>
            <ControlPanel/>
          </Grid>
          <Grid item xs={9}>

          </Grid>
        </Grid>
          
      </ThemeProvider>
    </div>
  );
}

export default App;
