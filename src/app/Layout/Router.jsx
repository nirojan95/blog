import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Blog from '../Blog';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default Router;
