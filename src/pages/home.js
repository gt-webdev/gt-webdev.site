import React from 'react';
import eventsData from '../data/events.js'
import {Button} from 'react-bootstrap'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="next-event">
          <div className="container">
            <div className="next-event-label">next meeting</div>
            <h2 className="event-title">{eventsData[0].title}</h2>
            <div className="event-details">
              <span className="event-date">{eventsData[0].date}</span>
              <br/>
              <span className="event-time">{eventsData[0].time}</span> <span className="event-location">{eventsData[0].location}</span>
            </div>
            <Button className="event-rsvp" bsStyle="primary" bsSize="large" href={eventsData[0].rsvpLink}>RSVP</Button>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;