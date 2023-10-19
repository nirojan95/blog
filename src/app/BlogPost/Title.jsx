import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  blogTitle: {
    fontWeight: 700,
    paddingBottom: theme.spacing(0),
    alignItems: 'left',
  },
  blogContainer: {
    paddingTop: theme.spacing(3),
    maxWidth: '700px',
  },
}));

function BlogTitle(props) {
  const classes = useStyles();
  const { title } = props;
  return (
    <Container maxWidth="lg" className={classes.blogContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        {title}
      </Typography>
    </Container>
  );
}

BlogTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BlogTitle;
