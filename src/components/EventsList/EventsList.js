import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment'
import {defaultIcon} from '../../data/defaults.js';

class EventsList extends Component {
    render() {
        return (
            <div>
                {this.props.events.map(e => (
                    <div className="event-box container">
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
        );
    }
}

export default EventsList;
