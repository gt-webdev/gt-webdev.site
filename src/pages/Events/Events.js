import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import moment from 'moment';
import EventsList from '../../components/EventsList/EventsList.js';
import {nextEvent, upcomingEvents, pastEvents} from '../../data/events.js';

class Events extends Component {
    componentWillMount() {
        document.title = "Events | gt-webdev";
    }
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
                <div className="events-list container">
                    <h2>Upcoming Events</h2>
                    <EventsList events={upcomingEvents} />

                    <h2>Past Events</h2>
                    <EventsList events={pastEvents} />
                </div>
            </div>
        );
    }
}

export default Events;
