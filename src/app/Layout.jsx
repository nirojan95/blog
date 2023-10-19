import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Layout/Header';
import Router from './Layout/Router';
import Footer from './Layout/Footer';
import Montserrat from '../fonts/Montserrat-VariableFont_wght.ttf';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    textDecoration: 'none',
    fontSize: '15',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${Montserrat}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

function Layout() {
  return (
    <div className="App">
      <Header />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
      <Footer />
    </div>
  );
}
export default Layout;
