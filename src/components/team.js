import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import officers from '../data/officers.js'

function getSocialIcons(officer) {
  return _.chain(['website', 'facebook', 'twitter', 'github', 'linkedin'])
    .filter((site) => {
      return typeof officer[site] != 'undefined';
    })
    .map((site) => {
      return (
        <a href={officer[site]} target="_blank">
          <img src={"img/" + site + "-icon.png"} alt={officer.name + "'s " + site} />
        </a>
      );
    })
    .toArray()
    .value();
}

class Team extends React.Component {
  render() {
    var showGraduates = this.props.graduates || false;
    var rows = _.chain(officers)
      .filter((officer) => {
        var isGraduate = typeof officer.graduate != 'undefined';
        return showGraduates ? isGraduate : !isGraduate;
      })
      .map(function(officer) {
          return (
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="person">
                <div className="main">
                  <img className="profile-photo" src={officer.image} alt={officer.name + "'s photo"} />
                  <div className="name-area">
                    <h3>{officer.name}</h3>
                    <h4>{officer.major}</h4>
                    {showGraduates ?
                      <div className="graduation-year">{officer.graduate}</div>
                      : ""
                    }
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

module.exports = Team;