import React from 'react';
import data from '../data/events.js'

class Events extends React.Component {
  render() {
    return (
      <div className="container" id="content">
        <h1>gt-webdev events</h1>
        <li>
          {data.map(e => e.title)}
        </li>
      </div>
    );
  }
}

module.exports = Events;