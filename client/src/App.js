import './App.css';
import Grid from '@mui/material/Grid'
import ControlPanel from './components/ControlPanel';
import TimeTable from './components/TimeTable/TimeTable';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import HeadingBar from './components/AppBar/HeadingBar';
import { useSelector } from 'react-redux';
import { selectedCoursesSelector } from './store/selector';
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
  const selectedCourses = useSelector(selectedCoursesSelector);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>   
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <HeadingBar/>
          </Grid>
          <Grid item xs={4}>
            <ControlPanel/>
          </Grid>
          <Grid item xs={8}>
            <TimeTable selectedCourses={selectedCourses}/>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
