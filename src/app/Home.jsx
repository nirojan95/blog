import React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Card from './Home/BlogCard';

const useStyles = makeStyles((theme) => ({
  home: {
    paddingTop: theme.spacing(3),
    maxWidth: '100%',
    justifyContent: 'center',
    display: 'flex',
  },
  blogContainer: {
    paddingTop: theme.spacing(3),
    width: '800px',
  },
  blogTitle: {
    fontWeight: 700,
    paddingBottom: theme.spacing(4),
    alignItems: 'left',
  },
}));

function Home(props) {
  const classes = useStyles();
  const { blog } = props;
  const { posts } = blog;
  console.log(posts);
  return (
    <Box className={classes.home}>
      <Box className={classes.blogContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Posts
        </Typography>
        <Box>
          { posts.map(({ fields }) => (
            <Card post={fields} key={fields.title} />
          ))}
        </Box>
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
