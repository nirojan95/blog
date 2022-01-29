import React from 'react';
import * as contentful from 'contentful';
import Box from '@mui/material/Box';
import Title from './Blog/Title';
import Hero from './Blog/Hero';
import Content from './Blog/Content';

class Blog extends React.Component {
  client = contentful.createClient({
    space: 'fmpayhcaewru',
    accessToken: 'HkGOHIet_hbtrzTRhNsLxp0UemjEdXg1h5cigrQ80zM',
  });

  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries();

  setPosts = (response) => {
    this.setState({
      posts: response.items,
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        { posts.map(({ fields }) => (
          <Box key={fields.title}>
            {console.log(typeof (fields.content))}
            <Hero heroURL={fields.hero.fields.file.url} />
            <Title title={fields.title} />
            <Content content={fields.content} />
          </Box>
        ))}
      </div>
    );
  }
}

export default Blog;
