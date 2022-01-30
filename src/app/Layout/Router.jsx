import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Blog from '../BlogPost';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/blog/:blogPost" element={<Blog />} />
    </Routes>
  );
}

export default Router;
