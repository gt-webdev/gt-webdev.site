import ReactDOM from 'react-dom'
import React from 'react';
import {Link} from 'react-router'

class Navbar extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/learn">Learn</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    );
  }
}

module.exports = Navbar;