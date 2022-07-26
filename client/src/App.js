import './App.css';
import Grid from '@mui/material/Grid'
import ControlPanel from './components/ControlPanel';
import TimeTable from './components/TimeTable/TimeTable';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import HeadingBar from './components/AppBar/HeadingBar';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#4a332d',
    },
    secondary: {
      main: '#896b60',
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
    <div className="App" style={{overflow: 'hidden'}}>
      <ThemeProvider theme={theme}>   
        <Grid container spacing={2}>
          <Grid item xs={12}>
             <HeadingBar/>
          </Grid>
          <Grid item xs={4}>
            <ControlPanel/>
          </Grid>
          <Grid item xs={8}>
            <TimeTable/>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
