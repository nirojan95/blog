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
  media: {
    height: 240,
  },
  cardContent: {
    height: 180,
  },
  content: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 6,
    '-webkit-box-orient': 'vertical',
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between',
  },
  author: {
    display: 'flex',
  },
}));

function BlogCard(props) {
  const classes = useStyles();
  const { post } = props;
  console.log(post);
  return (
    <Box className={classes.card}>
      <Link
        className="level-item button is-small is-link is-outlined"
        to={{
          pathname: `${post.path}`,
          theprops: { post },
        }}
      >
        <Typography gutterBottom variant="h5" component="h2">
          May 14, 2020 —
          {' '}
          {post.title}
        </Typography>
      </Link>
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
