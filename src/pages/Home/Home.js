import React, { Component } from 'react';
import {nextEvent} from '../../data/events.js';
import {Button} from 'react-bootstrap';
import moment from 'moment';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
    componentWillMount() {
        document.title = "Home | gt-webdev";
    }
    render() {
        return (
            <div className="page-home home">
                <Menu />
                <div className="next-event">
                    <div className="container">
                        <div className="next-event-label">next event</div>
                        <h2 className="event-title">{nextEvent.title}</h2>
                        <div className="event-details">
                            <span className="event-date">{moment(nextEvent.start).format("dddd, MMM Do")}</span>
                            <br/>
                            <span className="event-time">{moment(nextEvent.start).format("h:mma") + " - " + moment(nextEvent.end).format("h:mma")}</span> <span className="event-location">{nextEvent.location}</span>
                        </div>
                        <Button className="event-rsvp" bsstyle="primary" bssize="large" href={nextEvent.rsvpLink}>RSVP</Button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
