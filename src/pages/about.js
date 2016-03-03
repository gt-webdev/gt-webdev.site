import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div id="about-jumbotron" className="jumbotron">
          <h1>About Us</h1>
        </div>
        <div className="container">
          <div id="about-organization" className="row">
            <div className="col-sm-7">
              <h2>The Organization</h2>
              <p>gt-webdev is a student organization within Georgia Tech's
                College of Computing. Our club is dedicated to creating a
                prosperous community of web developers. No matter whether you
                are a beginner or a professional, you have a lot to learn
                from us, and we have a lot to learn from you.
              </p>
            </div>
            <div className="about-image" className="col-sm-5">
              <img src="img/audience.jpg" />
            </div>
          </div>
          <h2 className="center-heading">Team</h2>
          <div className="row">
            <div className="col-sm-4">
              <div className="person">
                <div className="main">
                  <img className="profile-photo" src="img/profiles/saleh.png" alt="Saleh's photo" />
                  <div className="name-area">
                    <h3>Saleh Hamadeh</h3>
                    <h4>CS - Devices & Mod/Sim</h4>
                  </div>
                  <div className="links-area">
                    <img src="http://placehold.it/32x32" alt="" />
                    <img src="http://placehold.it/32x32" alt="" />
                    <img src="http://placehold.it/32x32" alt="" />
                  </div>
                </div>
                
                <div className="description-area">
                  <p>Saleh is very social and enjoys having thoughtful conversations about philosophy, economics, and code.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="person">
                <div className="main">
                  <img className="profile-photo" src="http://placehold.it/100x100" alt="" />
                  <div className="name-area">
                    <h3>Saleh Hamadeh</h3>
                    <h4>CS - Devices & Mod/Sim</h4>
                  </div>
                  <div className="links-area">
                    <img src="http://placehold.it/32x32" alt="" />
                    <img src="http://placehold.it/32x32" alt="" />
                    <img src="http://placehold.it/32x32" alt="" />
                  </div>
                </div>
                
                <div className="description-area">
                  <p>Saleh is very social and enjoys having thoughtful conversations about philosophy, economics, and code.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = About;