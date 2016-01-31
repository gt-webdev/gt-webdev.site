import ReactDOM from 'react-dom'
import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <ul>
        <li>Home</li>
        <li>Schedule</li>
        <li>Members</li>
        <li>Blog</li>
      </ul>
    );
  }
}

module.exports = Navbar;