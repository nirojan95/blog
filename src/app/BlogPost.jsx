import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Title from './BlogPost/Title';
import Content from './BlogPost/Content';
import Hero from './BlogPost/Hero';

const useStyles = makeStyles((theme) => ({
  blog: {
    paddingTop: theme.spacing(0),
    maxWidth: '100%',
    justifyContent: 'center',
    display: 'flex',
  },
  blogPost: {
    maxWidth: '800px',
  },
}));

function Blog(props) {
  const location = useLocation();
  const classes = useStyles();
  const { blog } = props;
  const { posts } = blog;
  let post = {};
  if (posts.length > 0) {
    post = posts.find((element) => location.pathname.includes(element.fields.path));
  } else {
    post = { fields: { title: '', content: '', contentWithMedia: { content: [{ content: [{ value: '', marks: [] }, { value: '', marks: [] }] }] } } };
  }
  return (
    <Box className={classes.blog}>
      <Box className={classes.blogPost}>
        <Title title={post.fields.title} />
        {post.fields.contentWithMedia.content.map((x) => {
          console.log(x.content.length);
          if (x.content.length > 0) {
            let contentString = '';
            x.content.forEach((y) => {
              console.log({ y });
              let addedContent = y.value;
              if (y.marks.length > 0) {
                y.marks.forEach((z) => {
                  if (z.type === 'bold') { addedContent = `**${addedContent}**`; }
                });
              }
              contentString += addedContent;
            });
            return <Content content={contentString} />;
          }
          return <Hero heroURL={x.data.target.fields.file.url} />;
        })}
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

Blog.propTypes = {
  blog: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Blog);
