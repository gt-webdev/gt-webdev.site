import React from 'react';
import {nextEvent} from '../data/events.js'
import {Button} from 'react-bootstrap'
import moment from 'moment'

class Home extends React.Component {
  render() {
    var startDateTime = new Date(nextEvent.start);
    var endDateTime = new Date(nextEvent.end);

    return (
      <div className="home">
        <div className="next-event">
          <div className="container">
            <div className="next-event-label">next meeting</div>
            <h2 className="event-title">{nextEvent.title}</h2>
            <div className="event-details">
              <span className="event-date">{moment(startDateTime).format("dddd, MMM Do")}</span>
              <br/>
              <span className="event-time">{moment(startDateTime).format("h:mma") + " - " + moment(endDateTime).format("h:mma")}</span> <span className="event-location">{nextEvent.location}</span>
            </div>
            <Button className="event-rsvp" bsStyle="primary" bsSize="large" href={nextEvent.rsvpLink}>RSVP</Button>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;