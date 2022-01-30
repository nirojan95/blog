import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import Title from './BlogPost/Title';
import Hero from './BlogPost/Hero';
import Content from './BlogPost/Content';

function Blog(props) {
  const location = useLocation();
  const { blog } = props;
  const { posts } = blog;
  const post = posts.find((element) => location.pathname.includes(element.fields.path));
  console.log(post);
  return (
    <Box>
      <Hero heroURL={post.fields.hero.fields.file.url} />
      <Title title={post.fields.title} />
      <Content content={post.fields.content} />
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
