import React from 'react';
import Header from './Layout/Header';
import Router from './Layout/Router';
import Footer from './Layout/Footer';

function Layout() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}
export default Layout;
