import React from 'react';
import { makeStyles } from '@mui/styles';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Montserrat from '../../fonts/Montserrat-VariableFont_wght.ttf';

const useStyles = makeStyles((theme) => ({
  blogContainer: {
    alignItems: 'center',
    paddingTop: theme.spacing(0),
  },
}));

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    textDecoration: 'none',
    fontSize: '15',
    lineHeight: '200',
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

function Content(props) {
  const classes = useStyles();
  const { content } = props;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.blogContainer}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Container>
    </ThemeProvider>
  );
}

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
