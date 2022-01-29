import React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Title from './Blog/Title';
import Hero from './Blog/Hero';
import Content from './Blog/Content';

function Blog(props) {
  const { blog } = props;
  const { posts } = blog;
  console.log(posts);
  return (
    <div>
      { posts.map(({ fields }) => (
        <Box key={fields.title}>
          <Hero heroURL={fields.hero.fields.file.url} />
          <Title title={fields.title} />
          <Content content={fields.content} />
        </Box>
      ))}
    </div>
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
