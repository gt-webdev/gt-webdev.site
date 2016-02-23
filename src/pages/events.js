import React from 'react';
import {Button} from 'react-bootstrap'
import moment from 'moment'
import {nextEvent, upcomingEvents} from '../data/events.js'
import {defaultIcon} from '../data/defaults.js'


class Events extends React.Component {

  render() {
    return (
      <div>
        <div className="next-event">
          <div className="container">
            <div className="next-event-label">next meeting</div>
            <h2 className="event-title">{nextEvent.title}</h2>
            <div className="event-details">
              <span className="event-date">{moment(nextEvent.start).format("dddd, MMM Do")}</span>
              <br/>
              <span className="event-time">{moment(nextEvent.start).format("h:mma") + " - " + moment(nextEvent.end).format("h:mma")}</span> <span className="event-location">{nextEvent.location}</span>
            </div>
            <p className="event-description">{nextEvent.description}</p>
            <Button className="event-rsvp" bsStyle="primary" bsSize="large" href={nextEvent.rsvpLink}>RSVP</Button>
          </div>
        </div>
        <div className="container" id="upcoming-events">
          <h2>Upcoming Events</h2>
          {upcomingEvents.map(e => (
              <div className="upcoming-event container">
                <div className="row">
                  <div className="col-sm-2">
                    <div>
                      <img className="event-image" src={e.image || defaultIcon} />
                    </div>
                    <div className="event-date">{moment(e.start).format("MMM D")}</div>
                  </div>
                  <div className="col-sm-10">
                    <h3 className="event-title">{e.title}</h3>
                    <p>{e.description}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

module.exports = Events;