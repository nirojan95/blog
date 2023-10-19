import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: ({ heroURL }) => `url('${heroURL}')`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
  },
}));

function Hero(props) {
  const { heroURL } = props;
  const classes = useStyles({ heroURL });
  return (
    <Container className={classes.hero} />
  );
}

Hero.propTypes = {
  heroURL: PropTypes.string.isRequired,
};

export default Hero;
