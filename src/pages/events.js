import Navbar from '../components/navbar.js';
import React from 'react';
import data from '../data/events.js'

class Events extends React.Component {
  render() {
    return (
      <div>
        <h1>gt-webdev events</h1>
        <Navbar />
        <li>
          {data.map(e => e.title)}
        </li>
      </div>
    );
  }
}

module.exports = Events;