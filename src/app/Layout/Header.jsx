import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ArvoRegular from '../../fonts/Arvo-Regular.ttf';

const useStyles = makeStyles((theme) => ({
  header: {
    maxWidth: '50%',
    justifyContent: 'center',
    display: 'flex',
  },
  title: {
    alignItems: 'left',
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(10),
    postion: 'sticky',
  },
}));

const theme = createTheme({
  typography: {
    fontFamily: 'ArvoRegular',
    textDecoration: 'none',
    fontSize: '40',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'ArvoRegular';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${ArvoRegular}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Box className={classes.title}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Typography component={Link} to="/" sx={{ textDecoration: 'none' }} color="secondary">
            SUBJECTIVE OBJECTIVITY
          </Typography>
        </ThemeProvider>
      </Box>
    </Box>

  );
}

export default Header;
