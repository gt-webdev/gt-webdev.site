import React from 'react';
import eventsData from '../data/events.js'
import {Button} from 'react-bootstrap'
import moment from 'moment'

class Home extends React.Component {
  render() {
    var startDateTime = new Date(eventsData[0].start);
    var endDateTime = new Date(eventsData[0].end);

    return (
      <div className="home">
        <div className="next-event">
          <div className="container">
            <div className="next-event-label">next meeting</div>
            <h2 className="event-title">{eventsData[0].title}</h2>
            <div className="event-details">
              <span className="event-date">{moment(startDateTime).format("dddd, MMM Do")}</span>
              <br/>
              <span className="event-time">{moment(startDateTime).format("h:mma") + " - " + moment(endDateTime).format("h:mma")}</span> <span className="event-location">{eventsData[0].location}</span>
            </div>
            <Button className="event-rsvp" bsStyle="primary" bsSize="large" href={eventsData[0].rsvpLink}>RSVP</Button>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;