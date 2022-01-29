import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#764abc',
    },
  },
  background: {
    default: '#fff',
  },
  spacing: (factor) => `${0.25 * factor}rem`,
});

export default theme;
