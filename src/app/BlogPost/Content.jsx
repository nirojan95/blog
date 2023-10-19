import React from 'react';
import { makeStyles } from '@mui/styles';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const useStyles = makeStyles((theme) => ({
  blogContainer: {
    alignItems: 'center',
    paddingTop: theme.spacing(0),
    lineHeight: '1.8',
  },
}));

function Content(props) {
  const classes = useStyles();
  const { content } = props;
  return (
    <Container maxWidth="lg" className={classes.blogContainer}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Container>
  );
}

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
