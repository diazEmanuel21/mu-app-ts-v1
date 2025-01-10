import './App.css';
import { BrowserRouter } from 'react-router-dom'; // Corrige el import de react-router
import { AppRouter } from './router/AppRouter';
import { AppBarMU } from './components';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppBarMU />
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
