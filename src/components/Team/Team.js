import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import officers from '../../data/officers.js'

function getSocialIcons(officer) {
    return _.chain(['website', 'facebook', 'twitter', 'github', 'linkedin', 'stackoverflow'])
    .filter((site) => {
        return typeof officer[site] != 'undefined';
    })
    .map((site) => {
        var icons = {
            stackoverflow: 'stack-overflow',
            twitter: 'twitter',
            facebook: 'facebook',
            linkedin: 'linkedin',
            github: 'github',
            facebook: 'facebook',
            website: 'globe'
        }

        return (
            <a href={officer[site]} target="_blank">
                <i className={"fa fa-"+icons[site]} alt={officer.name + "'s " + site} />
            </a>
        );
    })
    .toArray()
    .value();
}

class Team extends Component {
    render() {
        var showGraduates = this.props.graduates || false;
        var rows = _.chain(officers)
        .filter((officer) => {
            var isGraduate = typeof officer.graduate != 'undefined';
            return showGraduates ? isGraduate : !isGraduate;
        })
        .map(function(officer) {
            return (
                <div className="col-lg-4 col-md-6">
                    <div className="person">
                        <div className="main">
                            <div className="profile-photo">
                                <img src={officer.image} alt={officer.name + "'s photo"} />
                                {showGraduates ?
                                    <div className="graduation-year">{officer.graduate}</div>
                                    : ""}
                            </div>
                            <div className="name-area">
                                <h3>{officer.name}</h3>
                                <h4>{officer.major}</h4>
                            </div>
                            <div className="links-area">
                                {getSocialIcons(officer)}
                            </div>
                        </div>
                        <div className="description-area">
                            <p>{officer.description}</p>
                        </div>
                    </div>
                </div>
            );
        })
        .toArray()
        .value();

        return <div className="row">{rows}</div>;
    }
}

export default Team;
