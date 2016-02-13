import React from 'react';
import {Button} from 'react-bootstrap'
import moment from 'moment'
import {nextEvent, upcomingEvents} from '../data/events.js'


class Events extends React.Component {

  render() {
    var startDateTime = new Date(nextEvent.start);
    var endDateTime = new Date(nextEvent.end);

    return (
      <div>
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
        <div className="container" id="upcoming-events">
          <h2>Upcoming Events</h2>
          {upcomingEvents.map(e => <p>{e.title}</p>)}
        </div>
      </div>
    );
  }
}

module.exports = Events;