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
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(10),
    width: '600px',
  },
  posts: {
    fontWeight: 700,
    paddingBottom: theme.spacing(2),
    alignItems: 'left',
  },
  blogTitle: {
    lineHeight: '0.1',
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
        <Typography variant="h4" className={classes.posts}>
          Posts
        </Typography>
        <Box className={classes.blogTitle}>
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
