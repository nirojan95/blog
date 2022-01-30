import React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Card from './Home/BlogCard';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: ' url(\'https://getwallpapers.com/wallpaper/full/4/f/2/7074.jpg\')',
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
    [theme.breakpoints.down('sm')]: {
      height: 300,
      fontSize: '3em',
    },
  },
  blogContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 700,
    paddingBottom: theme.spacing(3),
    alignItems: 'left',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

function Home(props) {
  const classes = useStyles();
  const { blog } = props;
  const { posts } = blog;
  return (
    <Box>
      <Box>
        <Container className={classes.hero} />
        <Container maxWidth="lg" className={classes.blogContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            Articles
          </Typography>
          { posts.map(({ fields }) => (
            <Card post={fields} key={fields.title} />
          ))}
          <Box my={4} className={classes.paginationContainer}>
            <Pagination count={10} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    blog: state.blog,
  };
}

Home.propTypes = {
  blog: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Home);
