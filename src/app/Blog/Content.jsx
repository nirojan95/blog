import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const useStyles = makeStyles((theme) => ({
  content: {
    alignItems: 'left',
  },
  blogContainer: {
    paddingTop: theme.spacing(3),
    maxWidth: '700px',
  },
}));

function Content(props) {
  const classes = useStyles();
  const { content } = props;
  return (
    <Container maxWidth="lg" className={classes.blogContainer}>
      <Typography variant="body1" className={classes.content}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Typography>
    </Container>
  );
}

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
