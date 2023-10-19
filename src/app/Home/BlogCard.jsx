import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  card: {
    width: '100%',
  },
}));

function BlogCard(props) {
  const classes = useStyles();
  const { post } = props;
  console.log(post);
  return (
    <Box className={classes.card}>
      <Typography component={Link} to={{ pathname: `${post.path}`, theprops: { post } }} sx={{ textDecoration: 'none' }} color="secondary">
        May 14, 2020 —
        {' '}
        {post.title}
      </Typography>
    </Box>
  );
}

BlogCard.propTypes = {
  // hero: PropTypes.objectOf(PropTypes.any).isRequired,
  // title: PropTypes.string.isRequired,
  // content: PropTypes.string.isRequired,
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BlogCard;
