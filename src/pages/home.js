import Navbar from '../components/navbar.js';
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>gt-webdev</h1>
      </div>
    );
  }
}

module.exports = Home;